package com.zemosolabs.contract.service.repository;

import com.zemosolabs.contract.service.model.Contract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.UUID;

public interface ContractRepository extends JpaRepository<Contract, String> {
    List<Contract> findAllByStatusCode(String code);

    @Query(value = "from Contract c where status='AVAIL' and c.financed < c.value")
    List<Contract> getContractsForCashkick();

    Contract findById(UUID id);
}
