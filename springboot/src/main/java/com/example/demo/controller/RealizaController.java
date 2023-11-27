package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Realiza;
import com.example.demo.repository.RealizaRepository;

import java.util.List;

@RestController
@RequestMapping("/realizacoes")
public class RealizaController {

    @Autowired
    private RealizaRepository realizaRepository;

    @GetMapping
    public List<Realiza> getAllRealizacoes() {
        return realizaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Realiza getRealizacaoById(@PathVariable Long id) {
        return realizaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Realiza addRealizacao(@RequestBody Realiza realizacao) {
        return realizaRepository.save(realizacao);
    }

    @PutMapping("/{id}")
    public Realiza updateRealizacao(@PathVariable Long id, @RequestBody Realiza realizacaoDetails) {
        Realiza realizacao = realizaRepository.findById(id).orElse(null);

        if (realizacao != null) {
            realizacao.setProva(realizacaoDetails.getProva());
            realizacao.setParticipante(realizacaoDetails.getParticipante());

            realizaRepository.save(realizacao);
        }

        return realizacao;
    }

    @DeleteMapping("/{id}")
    public void deleteRealizacao(@PathVariable Long id) {
        realizaRepository.deleteById(id);
    }
}
