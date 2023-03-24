package com.zemosolabs.cashkick.api.repository;

import com.zemosolabs.cashkick.api.model.Cashkick;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface CashkickRepository extends JpaRepository<Cashkick, UUID> {
    List<Cashkick> findAllByUserId(UUID userId);
}
