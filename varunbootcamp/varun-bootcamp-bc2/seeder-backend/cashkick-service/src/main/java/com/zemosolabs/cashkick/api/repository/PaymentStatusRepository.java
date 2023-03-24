package com.zemosolabs.cashkick.api.repository;

import com.zemosolabs.cashkick.api.model.PaymentStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.UUID;

public interface PaymentStatusRepository extends JpaRepository<PaymentStatus, UUID> {

    @Query("SELECT u FROM PaymentStatus u where u.code = :code")
    PaymentStatus findByCode(String code);
}
