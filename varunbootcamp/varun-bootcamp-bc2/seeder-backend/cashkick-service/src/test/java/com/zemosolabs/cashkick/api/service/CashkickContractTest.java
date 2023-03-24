package com.zemosolabs.cashkick.api.service;

import com.zemosolabs.cashkick.api.dto.ContractDTO;
import com.zemosolabs.cashkick.api.model.CashkickContract;
import com.zemosolabs.cashkick.api.repository.CashkickContractRepository;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.mockito.Mockito.times;

@SpringBootTest
@AutoConfigureMockMvc
class CashkickContractTest {

    @MockBean
    private CashkickContractService cashkickContractService;

    @MockBean
    private CashkickContractRepository cashkickContractRepository;

    @Test
    void saveCashkickContract() {
        UUID cashkickId = UUID.randomUUID();
        List<CashkickContract> cashkickContractList = new ArrayList<>();

        List<ContractDTO> contractDTOList = new ArrayList<>();
        ContractDTO contractDTO = new ContractDTO();
        contractDTO.setName("My Contract");
        contractDTO.setValue(12000);
        contractDTOList.add(contractDTO);
        CashkickContract cashkickContract1 = new CashkickContract(
                cashkickId,UUID.randomUUID(),12000
        );
        CashkickContract cashkickContract2 = new CashkickContract(
                cashkickId,UUID.randomUUID(),14000
        );
        cashkickContractList.add(cashkickContract1);
        cashkickContractList.add(cashkickContract2);

        Mockito.verify(cashkickContractRepository,times(0)).save(cashkickContract1);
        Mockito.verify(cashkickContractService,times(0)).save(contractDTOList,cashkickId);

    }

}
