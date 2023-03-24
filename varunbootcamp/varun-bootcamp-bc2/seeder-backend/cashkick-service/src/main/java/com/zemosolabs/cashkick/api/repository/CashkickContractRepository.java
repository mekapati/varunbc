package com.zemosolabs.cashkick.api.repository;

import com.zemosolabs.cashkick.api.model.CashkickContract;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.UUID;

public interface CashkickContractRepository extends JpaRepository<CashkickContract, UUID> {
    @Query(value = "from CashkickContract where cashkick_id=:id")
    List<CashkickContract> findAllByCashkickId(@Param("id") UUID id);
}
