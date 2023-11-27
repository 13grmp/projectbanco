package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.PossuiVotacaoEdicaoCasaParticipante;
import com.example.demo.repository.PossuiVotacaoEdicaoCasaParticipanteRepository;

import java.util.List;

@RestController
@RequestMapping("/possui-votacao-edicao-casa-participantes")
public class PossuiVotacaoEdicaoCasaParticipanteController {

    @Autowired
    private PossuiVotacaoEdicaoCasaParticipanteRepository repository;

    @GetMapping
    public List<PossuiVotacaoEdicaoCasaParticipante> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public PossuiVotacaoEdicaoCasaParticipante getById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping
    public PossuiVotacaoEdicaoCasaParticipante add(@RequestBody PossuiVotacaoEdicaoCasaParticipante entity) {
        return repository.save(entity);
    }

    @PutMapping("/{id}")
    public PossuiVotacaoEdicaoCasaParticipante update(@PathVariable Long id, @RequestBody PossuiVotacaoEdicaoCasaParticipante entityDetails) {
        PossuiVotacaoEdicaoCasaParticipante entity = repository.findById(id).orElse(null);

        if (entity != null) {
            entity.setVotacao(entityDetails.getVotacao());
            entity.setEdicaoCasa(entityDetails.getEdicaoCasa());
            entity.setParticipante(entityDetails.getParticipante());

            repository.save(entity);
        }

        return entity;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
