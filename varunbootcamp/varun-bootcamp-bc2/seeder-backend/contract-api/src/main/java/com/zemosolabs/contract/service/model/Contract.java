package com.zemosolabs.contract.service.model;

import lombok.Data;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.util.Date;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Table(name="contract")
@Data
public class Contract {

    @Id
    @Type(type="org.hibernate.type.PostgresUUIDType")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    private UUID id;

    @Column(name = "name")
    private String name;

    @ManyToOne
    @JoinColumn(name = "type")
    private ContractType type;

    @Column(name = "value")
    private double value;

    @Column(name = "financed")
    private double financed;

    @ManyToOne
    @JoinColumn(name = "status")
    private ContractStatus status;

    @Column(name = "source")
    private String source;

    @Column(name="reject_reason")
    private String rejectReason;

    @Column(name = "created")
    private Date created;

    @Column(name = "updated")
    private Date updated;
}
