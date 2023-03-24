package com.zemosolabs.contract.service.service;

import com.zemosolabs.contract.service.ContractService;
import com.zemosolabs.contract.service.model.Contract;
import com.zemosolabs.contract.service.model.ContractStatus;
import com.zemosolabs.contract.service.model.ContractType;
import com.zemosolabs.contract.service.repository.ContractRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
class ContractServiceTest {
    @Autowired
    private ContractService contractService;

    @MockBean
    private ContractRepository contractRepository;

    @Test
    void getApprovedContracts() {
        List<Contract> contracts = new ArrayList<>();

        Contract contract = new Contract();
        contract.setStatus(ContractStatus.Status.AVAILABLE.valueOf());

        contracts.add(contract);

        when(contractRepository.findAllByStatusCode("AVAIL")).thenReturn(contracts);
        assertEquals(1, contractService.getAllContractsByStatus("AVAIL").size());
    }

    @Test
    void getContractsForCashkick() {
        List<Contract> contracts = new ArrayList<>();

        Contract contract = new Contract();

        contract.setFinanced(0.0);
        contract.setValue(100000.00);

        contracts.add(contract);

        when(contractRepository.getContractsForCashkick()).thenReturn(contracts);
        assertEquals(1, contractService.getContractsForCashkick().size());
    }

    @Test
    void getContract() {
        String contractId = UUID.randomUUID().toString();
        Contract contract = new Contract();
        contract.setId(UUID.fromString(contractId));
        contract.setValue(10000.00);
        contract.setFinanced(0.0);
        contract.setStatus(ContractStatus.Status.AVAILABLE.valueOf());
        contract.setType(ContractType.Type.ANNUAL.valueOf());

        when(contractRepository.findById(contract.getId())).thenReturn(contract);

        assertEquals(contractService.getById(contractId).getValue(), contract.getValue());
    }
}
