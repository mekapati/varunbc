package com.zemosolabs.contract.service.service;

import com.zemosolabs.contract.service.ContractService;
import com.zemosolabs.contract.service.dto.ContractDTO;
import com.zemosolabs.contract.service.repository.ContractRepository;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class ContractServiceImpl implements ContractService {
    private final ContractRepository contractRepository;

    private final ModelMapper mapper;

    @Override
    public List<ContractDTO> getAllContractsByStatus(String code) {
        return contractRepository.findAllByStatusCode(code).stream().map(contract -> mapper.map(contract, ContractDTO.class)).collect(Collectors.toList());
    }

    @Override
    public List<ContractDTO> getContractsForCashkick() {
        return contractRepository.getContractsForCashkick().stream().map(contract -> mapper.map(contract, ContractDTO.class)).collect(Collectors.toList());
    }

    @Override
    public ContractDTO getById(String id) {
        return mapper.map(contractRepository.findById(UUID.fromString(id)), ContractDTO.class);
    }
}
