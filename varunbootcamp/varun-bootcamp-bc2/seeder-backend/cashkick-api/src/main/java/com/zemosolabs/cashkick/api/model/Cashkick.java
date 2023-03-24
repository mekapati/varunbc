package com.zemosolabs.cashkick.api.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.*;

import java.util.Date;
import java.util.UUID;


@Entity
@Table(name = "cashkick")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cashkick {

    @Id
    @Type(type="org.hibernate.type.PostgresUUIDType")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name = "id")
    private UUID id;

    @Column(name = "name")
    private String name;

    @Column(name = "user_id")
    private UUID userId;

    @ManyToOne
    @JoinColumn(name = "status")
    private CashkickStatus status;

    @Column(name = "int_rate")
    private double intRate;

    @Column(name = "term")
    private int term;

    @Column(name = "created")
    private Date created;

    @Column(name = "updated")
    private Date updated;

    @Column(name = "due_date")
    private Date dueDate;

    @OneToMany(mappedBy = "cashkick")
    private Set<CashkickContract> contracts;
}
