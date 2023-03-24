package com.zemosolabs.cashkick.api.repository;

import com.zemosolabs.cashkick.api.model.UserPayment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface UserPaymentRepository extends JpaRepository<UserPayment, UUID> {


    List<UserPayment> findAllByCashkickIdAndStatusNameContainingIgnoreCase(UUID id, String paymentStatus);
}
