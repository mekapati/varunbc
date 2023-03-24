package com.zemosolabs.cashkick.api.exception;

public class CashkickNotFound extends RuntimeException {

    public CashkickNotFound(String message) {
        super(message);
    }

    public CashkickNotFound(String message, Throwable cause) {
        super(message, cause);
    }

    public CashkickNotFound(Throwable cause) {
        super(cause);
    }
}
