package com.zemosolabs.cashkick.api.model;

import lombok.*;

import javax.persistence.*;

@Entity
@Table(name="payment_status")
@Data
@EqualsAndHashCode(of = "code")
@NoArgsConstructor
public class PaymentStatus {

    @Id
    @Column(name = "code")
    private String code;

    @Column(name = "name")
    private String name;

    public enum Status {
        UPCOMING("UPC");

        private final String code;

        Status(String code) {
            this.code = code;
        }

        public String getCode() {
            return this.code;
        }

        public PaymentStatus valueOf() {
            PaymentStatus pStatus = new PaymentStatus();
            pStatus.setCode(code);
            return pStatus;
        }

    }

}
