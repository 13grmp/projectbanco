package com.example.demo.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "EdicaoCasa")
public class EdicaoCasa {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idEdicao")
    private Long idEdicao;

    @Column(name = "Ano")
    private Integer ano;

    @Column(name = "Apresentador")
    private String apresentador;

    @Column(name = "DataInicio")
    private Date dataInicio;

    @Column(name = "DataTermino")
    private Date dataTermino;

    @ManyToOne
    @JoinColumn(name = "fk_Participante_idParticipante")
    private Participante participante;

    @Column(name = "Cidade")
    private String cidade;

    @Column(name = "idCasa")
    private Integer idCasa;

    @Column(name = "Localizacao")
    private String localizacao;

    @ManyToOne
    @JoinColumn(name = "fk_NumQuartos_NumQuartos_PK")
    private NumQuartos numQuartos;

    @Column(name = "AreaTotal")
    private Integer areaTotal;

	public Long getIdEdicao() {
		return idEdicao;
	}

	public void setIdEdicao(Long idEdicao) {
		this.idEdicao = idEdicao;
	}

	public Integer getAno() {
		return ano;
	}

	public void setAno(Integer ano) {
		this.ano = ano;
	}

	public String getApresentador() {
		return apresentador;
	}

	public void setApresentador(String apresentador) {
		this.apresentador = apresentador;
	}

	public Date getDataInicio() {
		return dataInicio;
	}

	public void setDataInicio(Date dataInicio) {
		this.dataInicio = dataInicio;
	}

	public Date getDataTermino() {
		return dataTermino;
	}

	public void setDataTermino(Date dataTermino) {
		this.dataTermino = dataTermino;
	}

	public Participante getParticipante() {
		return participante;
	}

	public void setParticipante(Participante participante) {
		this.participante = participante;
	}

	public String getCidade() {
		return cidade;
	}

	public void setCidade(String cidade) {
		this.cidade = cidade;
	}

	public Integer getIdCasa() {
		return idCasa;
	}

	public void setIdCasa(Integer idCasa) {
		this.idCasa = idCasa;
	}

	public String getLocalizacao() {
		return localizacao;
	}

	public void setLocalizacao(String localizacao) {
		this.localizacao = localizacao;
	}

	public NumQuartos getNumQuartos() {
		return numQuartos;
	}

	public void setNumQuartos(NumQuartos numQuartos) {
		this.numQuartos = numQuartos;
	}

	public Integer getAreaTotal() {
		return areaTotal;
	}

	public void setAreaTotal(Integer areaTotal) {
		this.areaTotal = areaTotal;
	}

    

}
