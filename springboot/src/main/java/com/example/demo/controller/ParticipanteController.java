package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.dto.ParticipanteDTO;
import com.example.demo.dto.ParticipanteProvaDTO;
import com.example.demo.model.OcorreEliminacaoEdicaoParticipante;
import com.example.demo.model.Participante;
import com.example.demo.model.Realiza;
import com.example.demo.repository.OcorreEliminacaoEdicaoParticipanteRepository;
import com.example.demo.repository.ParticipanteRepository;
import com.example.demo.repository.RealizaRepository;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/participante")
public class ParticipanteController {

	@Autowired
    private ParticipanteRepository participanteRepository;
    
	@Autowired
    private OcorreEliminacaoEdicaoParticipanteRepository ocorreEliminacaoEdicaoParticipanteRepository;
	
    @Autowired
    private RealizaRepository realizaRepository;


    @GetMapping
    public List<Participante> getAllParticipantes() {
        return participanteRepository.findAll();
    }

    @GetMapping("/{id}")
    public Participante getParticipanteById(@PathVariable Long id) {
        return participanteRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Participante addParticipante(@RequestBody Participante participante) {
        return participanteRepository.save(participante);
    }

    @GetMapping("/eliminados")
    public List<ParticipanteDTO> getParticipantesEliminados() {
        List<OcorreEliminacaoEdicaoParticipante> ocorrencias = ocorreEliminacaoEdicaoParticipanteRepository.findAll();

        return ocorrencias.stream()
                .map(ocorrencia -> new ParticipanteDTO(
                        ocorrencia.getParticipante().getNome(),
                        ocorrencia.getEliminacao().getData()
                ))
                .collect(Collectors.toList());
    }
    
    @GetMapping("/prova")
    public List<ParticipanteProvaDTO> getParticipantesComProva() {
        List<Realiza> realizacoes = realizaRepository.findAll();

        return realizacoes.stream()
                .map(realiza -> new ParticipanteProvaDTO(
                        realiza.getParticipante().getNome(),
                        realiza.getProva().getNome()
                ))
                .collect(Collectors.toList());
    }
    
    @PutMapping("/{id}")
    public Participante updateParticipante(@PathVariable Long id, @RequestBody Participante participanteDetails) {
        Participante participante = participanteRepository.findById(id).orElse(null);

        if (participante != null) {
            participante.setNome(participanteDetails.getNome());
            participante.setIdade(participanteDetails.getIdade());
            participante.setGenero(participanteDetails.getGenero());
            participante.setRua(participanteDetails.getRua());
            participante.setCidade(participanteDetails.getCidade());
            participante.setNumero(participanteDetails.getNumero());
            participante.setEstado(participanteDetails.getEstado());
            participante.setTelefone(participanteDetails.getTelefone());
            participante.setEmail(participanteDetails.getEmail());
            participante.setTipoParticipante(participanteDetails.getTipoParticipante());

            participanteRepository.save(participante);
        }

        return participante;
    }

    @DeleteMapping("/{id}")
    public void deleteParticipante(@PathVariable Long id) {
        participanteRepository.deleteById(id);
    }
}
