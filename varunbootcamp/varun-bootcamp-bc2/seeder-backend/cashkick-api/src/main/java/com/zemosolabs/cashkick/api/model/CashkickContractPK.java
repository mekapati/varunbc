package com.zemosolabs.cashkick.api.model;

import lombok.*;

import java.io.Serializable;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class CashkickContractPK implements Serializable {

    private static final long serialVersionUID = -7397450712550749873L;


    private UUID cashkick;
    private UUID contract;

}
