package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Votacao;
import com.example.demo.repository.VotacaoRepository;

import java.util.List;

@RestController
@RequestMapping("/votacoes")
public class VotacaoController {

    @Autowired
    private VotacaoRepository votacaoRepository;

    @GetMapping
    public List<Votacao> getAllVotacoes() {
        return votacaoRepository.findAll();
    }

    @GetMapping("/{id}")
    public Votacao getVotacaoById(@PathVariable Long id) {
        return votacaoRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Votacao addVotacao(@RequestBody Votacao votacao) {
        return votacaoRepository.save(votacao);
    }

    @PutMapping("/{id}")
    public Votacao updateVotacao(@PathVariable Long id, @RequestBody Votacao votacaoDetails) {
        Votacao votacao = votacaoRepository.findById(id).orElse(null);

        if (votacao != null) {
            votacao.setData(votacaoDetails.getData());

            votacaoRepository.save(votacao);
        }

        return votacao;
    }

    @DeleteMapping("/{id}")
    public void deleteVotacao(@PathVariable Long id) {
        votacaoRepository.deleteById(id);
    }
}
