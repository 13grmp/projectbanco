package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class NumQuartos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long numQuartosPK;
    private int numQuartos;

    // Getters and Setters

    public Long getNumQuartosPK() {
        return numQuartosPK;
    }

    public void setNumQuartosPK(Long numQuartosPK) {
        this.numQuartosPK = numQuartosPK;
    }

    public int getNumQuartos() {
        return numQuartos;
    }

    public void setNumQuartos(int numQuartos) {
        this.numQuartos = numQuartos;
    }
}
