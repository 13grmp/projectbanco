package com.example.demo.dto;

import java.util.Date;

public class ParticipanteDTO {

    private String nome;
    public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataEliminacao() {
		return dataEliminacao;
	}

	public void setDataEliminacao(Date dataEliminacao) {
		this.dataEliminacao = dataEliminacao;
	}

	private Date dataEliminacao;

    public ParticipanteDTO(String nome, Date dataEliminacao) {
        this.nome = nome;
        this.dataEliminacao = dataEliminacao;
    }

}
