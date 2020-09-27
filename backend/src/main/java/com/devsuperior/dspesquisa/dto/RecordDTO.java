package com.devsuperior.dspesquisa.dto;

import java.io.Serializable;
import java.time.Instant;

import com.devsuperior.dspesquisa.entities.Record;
import com.devsuperior.dspesquisa.entities.enums.Platform;
import lombok.Getter;
import lombok.Setter;

public class RecordDTO implements Serializable {
    private static final long serialVersionUID = 1L;

    @Getter
    @Setter
    private Long id;

    @Getter
    @Setter
    private Instant moment;

    @Getter
    @Setter
    private String name;

    @Getter
    @Setter
    private Integer age;

    @Getter
    @Setter
    private String gameTitle;

    @Getter
    @Setter
    private Platform gamePlatform;

    @Getter
    @Setter
    private String genreName;

    public RecordDTO() {

    }

    public RecordDTO(Record entity) {
        this.id = entity.getId();
        this.moment = entity.getMoment();
        this.name = entity.getName();
        this.age = entity.getAge();
        this.gameTitle = entity.getGame().getTitle();
        this.gamePlatform = entity.getGame().getPlatform();
        this.genreName = entity.getGame().getGenre().getName();
    }
}