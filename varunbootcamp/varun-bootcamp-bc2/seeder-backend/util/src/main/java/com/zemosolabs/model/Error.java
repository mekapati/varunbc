package com.zemosolabs.model;

import lombok.Data;

@Data
public class Error {

    private int status;

    private String message;

    private long timeStamp;

}