package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.OcorreEliminacaoEdicaoParticipante;
import com.example.demo.repository.OcorreEliminacaoEdicaoParticipanteRepository;

import java.util.List;

@RestController
@RequestMapping("/ocorreEliminacaoEdicaoParticipante")
public class OcorreEliminacaoEdicaoParticipanteController {

    @Autowired
    private OcorreEliminacaoEdicaoParticipanteRepository ocorreEliminacaoEdicaoParticipanteRepository;

    @GetMapping
    public List<OcorreEliminacaoEdicaoParticipante> getAllOcorrencias() {
        return ocorreEliminacaoEdicaoParticipanteRepository.findAll();
    }

    @GetMapping("/{id}")
    public OcorreEliminacaoEdicaoParticipante getOcorrenciaById(@PathVariable Long id) {
        return ocorreEliminacaoEdicaoParticipanteRepository.findById(id).orElse(null);
    }

    @PostMapping
    public OcorreEliminacaoEdicaoParticipante createOcorrencia(@RequestBody OcorreEliminacaoEdicaoParticipante ocorrencia) {
        return ocorreEliminacaoEdicaoParticipanteRepository.save(ocorrencia);
    }

    @PutMapping("/{id}")
    public OcorreEliminacaoEdicaoParticipante updateOcorrencia(@PathVariable Long id, @RequestBody OcorreEliminacaoEdicaoParticipante ocorrencia) {
        ocorrencia.setId(id);
        return ocorreEliminacaoEdicaoParticipanteRepository.save(ocorrencia);
    }

    @DeleteMapping("/{id}")
    public void deleteOcorrencia(@PathVariable Long id) {
        ocorreEliminacaoEdicaoParticipanteRepository.deleteById(id);
    }
}
