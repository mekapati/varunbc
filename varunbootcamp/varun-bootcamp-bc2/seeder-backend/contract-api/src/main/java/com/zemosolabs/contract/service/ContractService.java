package com.zemosolabs.contract.service;

import com.zemosolabs.contract.service.dto.ContractDTO;

import java.util.List;

public interface ContractService {
    List<ContractDTO> getAllContractsByStatus(String code);
    List<ContractDTO> getContractsForCashkick();
    ContractDTO getById(String id);

}
