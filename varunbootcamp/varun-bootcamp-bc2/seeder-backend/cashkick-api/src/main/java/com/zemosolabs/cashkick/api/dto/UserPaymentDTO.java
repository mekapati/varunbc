package com.zemosolabs.cashkick.api.dto;

import com.zemosolabs.cashkick.api.model.PaymentStatus;
import lombok.Data;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Data
public class UserPaymentDTO {

    private UUID id;
    private UUID cashkickId;
    private PaymentStatus status;
    private double expected;
    private double outstanding;
    private LocalDateTime dueDate;
    private Date created;
}
