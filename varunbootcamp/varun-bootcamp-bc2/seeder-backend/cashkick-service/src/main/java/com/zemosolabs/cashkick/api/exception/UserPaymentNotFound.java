package com.zemosolabs.cashkick.api.exception;

public class UserPaymentNotFound extends RuntimeException{

    public UserPaymentNotFound(String message) {
        super(message);
    }

    public UserPaymentNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public UserPaymentNotFound(Throwable cause) {
        super(cause);
    }
}
