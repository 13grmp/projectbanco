package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

import java.util.Date;

@Entity
@Table(name = "Prova")
public class Prova {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idProva")
    private Long idProva;

    @Column(name = "Nome")
    private String nome;

    @Column(name = "Data")
    private Date data;

    @ManyToOne
    @JoinColumn(name = "fk_Vencedores_Vencedores_PK")
    private Vencedores vencedores;

	public Long getIdProva() {
		return idProva;
	}

	public void setIdProva(Long idProva) {
		this.idProva = idProva;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Vencedores getVencedores() {
		return vencedores;
	}

	public void setVencedores(Vencedores vencedores) {
		this.vencedores = vencedores;
	}

    

}
