package com.zemosolabs.cashkick.api.model;


import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.UUID;

@Entity
@Table(name="cashkick_contract")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(CashkickContractPK.class)
public class CashkickContract implements Serializable {

    private static final long serialVersionUID = -2031338104356028248L;
    @Id
    @Column(name="cashkick_id")
    private UUID cashkick;

    @Id
    @Column(name = "contract_id")
    private UUID contract;

    @Column(name="amount")
    private double amount;

}
