package com.zemosolabs.contract.service.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="contract_status")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ContractStatus {

    @Id
    private String code;

    @Column
    private String name;

    public enum Status {
        AVAILABLE("AVAIL"),
        REJECTED("REJTD");

        private String code;

        public String getCode() {
            return this.code;
        }

        private Status(String code) {
            this.code = code;
        }

        public ContractStatus valueOf() {
            ContractStatus cStatus = new ContractStatus();
            cStatus.setCode(this.getCode());
            return cStatus;
        }

    }
}
