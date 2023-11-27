package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.JoinColumns;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "PossuiVotacaoEdicaoCasaParticipante")
public class PossuiVotacaoEdicaoCasaParticipante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "fk_Votacao_idVotacao")
    private Votacao votacao;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "fk_EdicaoCasa_idEdicao", referencedColumnName = "idEdicao"),
            @JoinColumn(name = "fk_EdicaoCasa_idCasa", referencedColumnName = "idCasa")
    })
    private EdicaoCasa edicaoCasa;

    @ManyToOne
    @JoinColumn(name = "fk_Participante_idParticipante")
    private Participante participante;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Votacao getVotacao() {
        return votacao;
    }

    public void setVotacao(Votacao votacao) {
        this.votacao = votacao;
    }

    public EdicaoCasa getEdicaoCasa() {
        return edicaoCasa;
    }

    public void setEdicaoCasa(EdicaoCasa edicaoCasa) {
        this.edicaoCasa = edicaoCasa;
    }

    public Participante getParticipante() {
        return participante;
    }

    public void setParticipante(Participante participante) {
        this.participante = participante;
    }
}
