package com.zemosolabs.contract.service.controller;

import com.zemosolabs.contract.service.dto.ContractDTO;
import com.zemosolabs.contract.service.ContractService;
import com.zemosolabs.contract.service.model.ContractStatus;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.ArrayList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

@SpringBootTest
@AutoConfigureMockMvc
class ContractControllerTest {
    @Autowired
    private ContractController contractController;

    @MockBean
    private ContractService contractService;

    @Test
    void getApprovedContracts() {
        List<ContractDTO> contractDTOs = new ArrayList<>();
        ContractDTO contractDTO = new ContractDTO();
//        contractDTO.setStatus(ContractStatus.Status.AVAILABLE.getCode());

        contractDTOs.add(contractDTO);

        when(contractService.getAllContractsByStatus("AVAIL")).thenReturn(contractDTOs);
        assertEquals(1, contractController.getApprovedContracts().size());
    }

    @Test
    void getRejectedContracts() {
        List<ContractDTO> contractDTOs = new ArrayList<>();
        ContractDTO contractDTO = new ContractDTO();
//        contractDTO.setStatus(ContractStatus.Status.REJECTED);

        contractDTOs.add(contractDTO);

        when(contractService.getAllContractsByStatus(ContractStatus.Status.REJECTED.getCode())).thenReturn(contractDTOs);
        assertEquals(1, contractController.getRejectedContracts().size());
    }

    @Test
    void getApprovedAndUnutilizedContracts() {
        List<ContractDTO> contractDTOs = new ArrayList<>();
        ContractDTO contractDTO = new ContractDTO();
        contractDTO.setValue(100000.00);
        contractDTO.setFinanced(0.0);
        
        contractDTOs.add(contractDTO);

        when(contractService.getContractsForCashkick()).thenReturn(contractDTOs);
        assertEquals(1, contractController.getContractsForCashkick().size());
    }
}
