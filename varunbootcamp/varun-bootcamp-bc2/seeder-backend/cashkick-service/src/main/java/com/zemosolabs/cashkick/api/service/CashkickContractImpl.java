package com.zemosolabs.cashkick.api.service;

import com.zemosolabs.cashkick.api.dto.ContractDTO;
import com.zemosolabs.cashkick.api.model.CashkickContract;
import com.zemosolabs.cashkick.api.repository.CashkickContractRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;

@Service
public class CashkickContractImpl implements CashkickContractService {
    @Autowired
    private CashkickContractRepository cashkickContractRepository;

    @Override
    @Transactional(Transactional.TxType.REQUIRED)
    public void save(final List<ContractDTO> contracts,UUID cashKickId) {
        final Set<CashkickContract> cashkickContracts = new HashSet<>();

        contracts.stream().forEach(contract -> cashkickContracts.add(new CashkickContract(cashKickId, UUID.fromString(contract.getId()), contract.getValue())));
        cashkickContractRepository.saveAll(cashkickContracts);
    }

    @Override
    public List<CashkickContract> findCashKickContracts(UUID cashkickID) {
        return cashkickContractRepository.findAllByCashkickId(cashkickID);
    }
}
