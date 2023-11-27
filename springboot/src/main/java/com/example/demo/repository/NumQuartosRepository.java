package com.example.demo.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.NumQuartos;

public interface NumQuartosRepository extends JpaRepository<NumQuartos, Long> {
}
