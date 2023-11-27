package com.example.demo.model;



import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Votacao {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idVotacao;

    private Date data;

    // Getters and Setters

    public Long getIdVotacao() {
        return idVotacao;
    }

    public void setIdVotacao(Long idVotacao) {
        this.idVotacao = idVotacao;
    }

    public Date getData() {
        return data;
    }

    public void setData(Date data) {
        this.data = data;
    }
}
