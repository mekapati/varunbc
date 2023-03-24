package com.zemosolabs.cashkick.api.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class CashkickErrorResponse {
    private int status;
    private String message;
    private long timeStamp;
}
