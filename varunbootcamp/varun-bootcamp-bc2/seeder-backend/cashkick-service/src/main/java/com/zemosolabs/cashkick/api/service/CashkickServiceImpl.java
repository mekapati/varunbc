package com.zemosolabs.cashkick.api.service;

import com.zemosolabs.cashkick.api.dto.CashkickDTO;
import com.zemosolabs.cashkick.api.dto.ContractDTO;
import com.zemosolabs.cashkick.api.dto.UserPaymentDTO;
import com.zemosolabs.cashkick.api.model.*;

import com.zemosolabs.cashkick.api.repository.CashkickRepository;
import com.zemosolabs.cashkick.api.repository.UserPaymentRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.*;

@Service
public class CashkickServiceImpl implements CashkickService {

    @Autowired
    private ModelMapper modelMapper;

    @Autowired
    private CashkickContractService cashkickContractService;

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private CashkickRepository cashkickRepository;
    @Autowired
    private UserPaymentRepository userPaymentRepository;

    @Value("${contract.service.url}")
    private String contractURL;

    @Override
    @Transactional(Transactional.TxType.REQUIRED)
    public void save(CashkickDTO cashkickDTO) {
        Cashkick cashkick = modelMapper.map(cashkickDTO, Cashkick.class);

        cashkick=saveCashkick(cashkick);
        saveCashkickContracts(cashkickDTO.getContracts(), cashkick);
    }

    private Cashkick saveCashkick(Cashkick cashkick) {
        cashkick.setCreated(new Date());
        cashkick.setStatus(CashkickStatus.Status.PENDING.valueOf());
        return cashkickRepository.save(cashkick);
    }

    private void saveCashkickContracts(List<ContractDTO> contracts, Cashkick cashkick) {
        cashkickContractService.save(contracts, cashkick.getId());
        double paybackAmount = getPaybackAmount(cashkick.getIntRate(), contracts);
        saveUserPayments(paybackAmount, cashkick.getTerm(), cashkick.getId());
    }

    private double getPaybackAmount(double interestRate, List<ContractDTO> contracts) {
        double paybackAmount = 0;
        for (ContractDTO c : contracts) {
            paybackAmount += c.getValue();
        }
        return paybackAmount + (interestRate / 100) * paybackAmount;
    }


    @Override
    public List<CashkickDTO> getCashkicksForUser(String userId) {
        List<Cashkick> cashkicks = cashkickRepository.findAllByUserId(UUID.fromString(userId));

        List<CashkickDTO> data = new ArrayList<>();

        for (Cashkick cashkick : cashkicks) {
            double cashkickValue = 0;

            CashkickDTO cashkickDTO = modelMapper.map(cashkick, CashkickDTO.class);

            for (CashkickContract cashkickContract : cashkick.getContracts()) {
                ContractDTO contract = restTemplate.getForObject(contractURL + "/" + cashkickContract.getContract(), ContractDTO.class);
                if(contract != null) {
                    cashkickValue += contract.getValue() - contract.getFinanced();
                }

            }

            cashkickDTO.setValue(cashkickValue);
            data.add(cashkickDTO);
        }

        return data;
    }

    @Override
    public List<UserPaymentDTO> getUserPayments(String userId) {

        List<CashkickDTO> cashkicks = getCashkicksForUser(userId);

        List<UserPaymentDTO> userPayments = new ArrayList<>();

        for(CashkickDTO cashkick: cashkicks) {
            List<UserPayment> list = userPaymentRepository.findAllByCashkickIdAndStatusNameContainingIgnoreCase(cashkick.getId(), PaymentStatus.Status.UPCOMING.toString());

            TypeToken<List<UserPaymentDTO>> typeToken = new TypeToken<>() {};
            List<UserPaymentDTO> result = modelMapper.map(list, typeToken.getType());
            userPayments.addAll((result));
        }

        return userPayments;
    }

    private void saveUserPayments(double paybackAmount, int term, UUID cashkickId) {
        List<UserPayment> payments = new ArrayList<>();

        double expected = paybackAmount / term;

        for(int i=1; i<=term; i++) {

            Date today = new Date();
            Calendar cal = Calendar.getInstance();
            cal.setTime(today);
            int month = (cal.get(Calendar.MONTH)) + i + 1;
            int date = cal.get(Calendar.DATE);
            int year = cal.get(Calendar.YEAR);
            if(month > 12) {
                month = month -12;
                year = year+1;
            }

            LocalDateTime now = LocalDateTime.of(year, Month.of(month), date, 12, 30);

            UserPayment userPayment = new UserPayment();
            userPayment.setCashkickId(cashkickId);
            userPayment.setExpected(expected);
            paybackAmount -= expected;
            userPayment.setOutstanding(paybackAmount);
            userPayment.setDueDate(now);
            userPayment.setStatus(PaymentStatus.Status.UPCOMING.valueOf());
            userPayment.setCreated(new Date());

            payments.add(userPayment);
        }

        userPaymentRepository.saveAll(payments);
    }

}