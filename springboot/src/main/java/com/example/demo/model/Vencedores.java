package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Vencedores {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long VencedoresPK;
    private String vencedores;

    // Getters and Setters

    public Long getIdVencedores() {
        return VencedoresPK;
    }

    public void setIdVencedores(Long idVencedores) {
        this.VencedoresPK = idVencedores;
    }

    public String getVencedores() {
        return vencedores;
    }

    public void setVencedores(String vencedores) {
        this.vencedores = vencedores;
    }
}
