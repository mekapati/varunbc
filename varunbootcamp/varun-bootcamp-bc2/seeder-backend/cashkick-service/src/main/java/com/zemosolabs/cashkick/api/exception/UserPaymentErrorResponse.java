package com.zemosolabs.cashkick.api.exception;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserPaymentErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
}
