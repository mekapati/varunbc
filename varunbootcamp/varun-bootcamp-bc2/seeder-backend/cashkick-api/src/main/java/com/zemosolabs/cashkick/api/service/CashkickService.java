package com.zemosolabs.cashkick.api.service;

import com.zemosolabs.cashkick.api.dto.CashkickDTO;
import com.zemosolabs.cashkick.api.dto.UserPaymentDTO;

import java.util.List;

public interface CashkickService {
    void save(CashkickDTO cashKick);

    List<CashkickDTO> getCashkicksForUser(String id);

    List<UserPaymentDTO> getUserPayments(String userId);

}
