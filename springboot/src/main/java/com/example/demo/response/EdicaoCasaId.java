package com.example.demo.response;

import java.io.Serializable;

public class EdicaoCasaId implements Serializable {

    /**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int idEdicao;
    private int idCasa;
	public int getIdEdicao() {
		return idEdicao;
	}
	public void setIdEdicao(int idEdicao) {
		this.idEdicao = idEdicao;
	}
	public int getIdCasa() {
		return idCasa;
	}
	public void setIdCasa(int idCasa) {
		this.idCasa = idCasa;
	}
    
    
}

    
