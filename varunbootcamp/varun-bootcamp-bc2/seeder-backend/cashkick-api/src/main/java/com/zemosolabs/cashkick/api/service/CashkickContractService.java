package com.zemosolabs.cashkick.api.service;

import com.zemosolabs.cashkick.api.dto.ContractDTO;
import com.zemosolabs.cashkick.api.model.CashkickContract;

import java.util.List;
import java.util.UUID;

public interface CashkickContractService {
    public void save(List<ContractDTO> contracts, UUID cashKickId);
    public List<CashkickContract> findCashKickContracts(UUID cashkickID);
}
