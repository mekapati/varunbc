package com.zemosolabs.user.service.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;

import javax.persistence.*;
import java.math.BigDecimal;
import java.util.UUID;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "settings")
public class UserSettings {

    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    private UUID id;

    @Column(name = "interest_rate", nullable = false)
    private float interestRate;

    @Column(name = "currency", nullable = false)
    private String currency;

    @Column(name = "available_credit", nullable = false)
    private BigDecimal availableCredit;

    @Column(name="term_cap", nullable = false)
    private int termCap;

}
