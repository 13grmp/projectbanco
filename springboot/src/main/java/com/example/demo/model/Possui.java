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
@Table(name = "Possui")
public class Possui {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "fk_EventosEspeciais_idEvento")
    private EventosEspeciais eventosEspeciais;

    @ManyToOne
    @JoinColumns({
            @JoinColumn(name = "fk_EdicaoCasa_idEdicao", referencedColumnName = "idEdicao"),
            @JoinColumn(name = "fk_EdicaoCasa_idCasa", referencedColumnName = "idCasa")
    })
    private EdicaoCasa edicaoCasa;

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public EventosEspeciais getEventosEspeciais() {
        return eventosEspeciais;
    }

    public void setEventosEspeciais(EventosEspeciais eventosEspeciais) {
        this.eventosEspeciais = eventosEspeciais;
    }

    public EdicaoCasa getEdicaoCasa() {
        return edicaoCasa;
    }

    public void setEdicaoCasa(EdicaoCasa edicaoCasa) {
        this.edicaoCasa = edicaoCasa;
    }
}
