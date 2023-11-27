package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.NumQuartos;
import com.example.demo.repository.NumQuartosRepository;

import java.util.List;

@RestController
@RequestMapping("/num-quartos")
public class NumQuartosController {

    @Autowired
    private NumQuartosRepository numQuartosRepository;

    @GetMapping
    public List<NumQuartos> getAllNumQuartos() {
        return numQuartosRepository.findAll();
    }

    @GetMapping("/{id}")
    public NumQuartos getNumQuartosById(@PathVariable Long id) {
        return numQuartosRepository.findById(id).orElse(null);
    }

    @PostMapping
    public NumQuartos addNumQuartos(@RequestBody NumQuartos numQuartos) {
        return numQuartosRepository.save(numQuartos);
    }

    @PutMapping("/{id}")
    public NumQuartos updateNumQuartos(@PathVariable Long id, @RequestBody NumQuartos numQuartosDetails) {
        NumQuartos numQuartos = numQuartosRepository.findById(id).orElse(null);

        if (numQuartos != null) {
            numQuartos.setNumQuartos(numQuartosDetails.getNumQuartos());

            numQuartosRepository.save(numQuartos);
        }

        return numQuartos;
    }

    @DeleteMapping("/{id}")
    public void deleteNumQuartos(@PathVariable Long id) {
        numQuartosRepository.deleteById(id);
    }
}
