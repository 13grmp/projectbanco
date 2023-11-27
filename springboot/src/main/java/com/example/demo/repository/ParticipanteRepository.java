package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Participante;

public interface ParticipanteRepository extends JpaRepository<Participante, Long> {
	
}