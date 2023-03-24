package com.zemosolabs.cashkick.api.repository;

import com.zemosolabs.cashkick.api.model.CashkickStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CashkickStatusRepository extends JpaRepository<CashkickStatus, String> {

}
