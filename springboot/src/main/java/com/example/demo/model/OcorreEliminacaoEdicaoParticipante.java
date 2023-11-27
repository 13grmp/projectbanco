package com.example.demo.model;

import jakarta.persistence.*;

@Entity
@Table(name = "OcorreEliminacaoEdicaoParticipante")
public class OcorreEliminacaoEdicaoParticipante {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_Eliminacao_idEliminacao")
    private Eliminacao eliminacao;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumns({
            @JoinColumn(name = "fk_EdicaoCasa_idEdicao", referencedColumnName = "idEdicao"),
            @JoinColumn(name = "fk_EdicaoCasa_idCasa", referencedColumnName = "idCasa")
    })
    private EdicaoCasa edicaoCasa;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_Participante_idParticipante")
    private Participante participante;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Eliminacao getEliminacao() {
        return eliminacao;
    }

    public void setEliminacao(Eliminacao eliminacao) {
        this.eliminacao = eliminacao;
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
