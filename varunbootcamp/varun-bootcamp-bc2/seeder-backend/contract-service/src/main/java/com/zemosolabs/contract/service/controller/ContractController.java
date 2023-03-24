package com.zemosolabs.contract.service.controller;

import com.zemosolabs.contract.service.dto.ContractDTO;
import com.zemosolabs.contract.service.ContractService;
import com.zemosolabs.contract.service.model.ContractStatus;
import org.springframework.web.bind.annotation.*;
import lombok.Data;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/contracts")
@Data
public class ContractController {
    private final ContractService contractService;

    @GetMapping("/approved")
    public List<ContractDTO> getApprovedContracts() {
        return contractService.getAllContractsByStatus(ContractStatus.Status.AVAILABLE.getCode());
    }

    @GetMapping("/rejected")
    public List<ContractDTO> getRejectedContracts() {
        return contractService.getAllContractsByStatus(ContractStatus.Status.REJECTED.getCode());
    }

    @GetMapping("/unused")
    public List<ContractDTO> getContractsForCashkick() {
        return contractService.getContractsForCashkick();
    }

    @GetMapping("/{id}")
    public ContractDTO getContractById(@PathVariable(name = "id") String id) {
        return contractService.getById(id);
    }
}
