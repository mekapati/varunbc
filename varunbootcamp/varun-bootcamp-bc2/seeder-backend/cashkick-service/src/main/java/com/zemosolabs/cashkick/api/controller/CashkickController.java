package com.zemosolabs.cashkick.api.controller;

import com.zemosolabs.cashkick.api.dto.UserPaymentDTO;
import com.zemosolabs.cashkick.api.service.CashkickService;
import com.zemosolabs.cashkick.api.dto.CashkickDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/v1/cashkick")
@RestController
@RequiredArgsConstructor
public class CashkickController {

    private final CashkickService cashkickService;

    @PostMapping
    public void save(@RequestBody CashkickDTO cashkick){
        cashkickService.save(cashkick);
    }

    @GetMapping("/{id}")
    public List<CashkickDTO> getCashkick(@PathVariable(name="id") String id) {
        return cashkickService.getCashkicksForUser(id);
    }

    @GetMapping("/payments/user/{userId}")
    public List<UserPaymentDTO> getUserPayments(@PathVariable String userId) {
        return cashkickService.getUserPayments(userId);
    }

}
