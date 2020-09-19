package com.devsuperior.dspesquisa.resources;

import com.devsuperior.dspesquisa.services.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/games")
public class GameResource {

    @Autowired /*disponibiliza a injeção de dependencia sem precisar fazê-la manualmente */
    private GameService service;

}
