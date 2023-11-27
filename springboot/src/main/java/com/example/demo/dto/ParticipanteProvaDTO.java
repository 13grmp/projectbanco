package com.example.demo.dto;

public class ParticipanteProvaDTO {

    private String nomeParticipante;
    private String nomeProva;

    public ParticipanteProvaDTO(String nomeParticipante, String nomeProva) {
        this.nomeParticipante = nomeParticipante;
        this.nomeProva = nomeProva;
    }

	public String getNomeParticipante() {
		return nomeParticipante;
	}

	public void setNomeParticipante(String nomeParticipante) {
		this.nomeParticipante = nomeParticipante;
	}

	public String getNomeProva() {
		return nomeProva;
	}

	public void setNomeProva(String nomeProva) {
		this.nomeProva = nomeProva;
	}

    
}
