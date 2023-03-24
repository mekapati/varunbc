package com.zemosolabs.cashkick.api.model;

import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name="user_payment")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserPayment {

    @Type(type="org.hibernate.type.PostgresUUIDType")
    @Id
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "uuid2")
    @Column(name="id")
    private UUID id;

    @Column(name = "cashkick_id")
    private UUID cashkickId;

    @Column(name = "expected")
    private double expected;

    @Column(name = "outstanding")
    private double outstanding;

    @Column(name = "due_date")
    private LocalDateTime dueDate;

    @ManyToOne
    @JoinColumn(name="status")
    private PaymentStatus status;

    @Column(name = "created")
    private Date created;

    @Column(name = "updated")
    private Date updated;


}
