package com.zemosolabs.cashkick.api.dto;

import lombok.Data;

@Data
public class ContractDTO {
    private String id;
    private String name;
    private double value;
    private double financed;
    private ContractTypeDTO type;
    private ContractStatusDTO status;
    private String source;
    private String rejectReason;
    private String created;
    private String updated;
}
