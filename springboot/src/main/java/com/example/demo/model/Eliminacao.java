package com.example.demo.model;


import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Eliminacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEliminacao;

    private String motivo;
    private Date data;

    // Getters and Setters

    public Long getIdEliminacao() {
        return idEliminacao;
    }

    public void setIdEliminacao(Long idEliminacao) {
        this.idEliminacao = idEliminacao;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }
}
