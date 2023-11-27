package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Eliminacao;
import com.example.demo.repository.EliminacaoRepository;

import java.util.List;

@RestController
@RequestMapping("/eliminacoes")
public class EliminacaoController {

    @Autowired
    private EliminacaoRepository eliminacaoRepository;

    @GetMapping
    public List<Eliminacao> getAllEliminacoes() {
        return eliminacaoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Eliminacao getEliminacaoById(@PathVariable Long id) {
        return eliminacaoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Eliminacao addEliminacao(@RequestBody Eliminacao eliminacao) {
        return eliminacaoRepository.save(eliminacao);
    }

    @PutMapping("/{id}")
    public Eliminacao updateEliminacao(@PathVariable Long id, @RequestBody Eliminacao eliminacaoDetails) {
        Eliminacao eliminacao = eliminacaoRepository.findById(id).orElse(null);

        if (eliminacao != null) {
            eliminacao.setMotivo(eliminacaoDetails.getMotivo());
            eliminacao.setData(eliminacaoDetails.getData());

            eliminacaoRepository.save(eliminacao);
        }

        return eliminacao;
    }

    @DeleteMapping("/{id}")
    public void deleteEliminacao(@PathVariable Long id) {
        eliminacaoRepository.deleteById(id);
    }
}
