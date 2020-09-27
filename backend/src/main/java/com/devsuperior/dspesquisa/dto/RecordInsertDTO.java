package com.devsuperior.dspesquisa.dto;

import lombok.Getter;
import lombok.Setter;

import java.io.Serializable;

public class RecordInsertDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private Integer age;

    @Getter
    @Setter
    private Long gameId;

    public RecordInsertDTO() {

    }
}