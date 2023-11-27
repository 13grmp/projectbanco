package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Possui;

public interface PossuiRepository extends JpaRepository<Possui, Long> {
}
