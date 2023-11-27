package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Votacao;

public interface VotacaoRepository extends JpaRepository<Votacao, Long> {

}
