package com.zemosolabs.cashkick.api.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserPaymentExceptionHandler {

    @ExceptionHandler
    public ResponseEntity<UserPaymentErrorResponse> handleException(UserPaymentNotFound exc) {
        UserPaymentErrorResponse error = new UserPaymentErrorResponse(
                HttpStatus.NOT_FOUND.value(),
                exc.getMessage(),
                System.currentTimeMillis()
        );

        return new ResponseEntity<>(error, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler
    public ResponseEntity<UserPaymentErrorResponse> handleException(Exception exc) {
        UserPaymentErrorResponse error = new UserPaymentErrorResponse(
                HttpStatus.BAD_REQUEST.value(),
                exc.getMessage(),
                System.currentTimeMillis()
        );

        return new ResponseEntity<>(error, HttpStatus.BAD_REQUEST);
    }
}
