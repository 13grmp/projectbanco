package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Prova;
import com.example.demo.repository.ProvaRepository;

import java.util.List;

@RestController
@RequestMapping("/prova")
public class ProvaController {

    @Autowired
    private ProvaRepository provaRepository;

    @GetMapping
    public List<Prova> getAllProvas() {
        return provaRepository.findAll();
    }

    @GetMapping("/{id}")
    public Prova getProvaById(@PathVariable Long id) {
        return provaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Prova createProva(@RequestBody Prova prova) {
        return provaRepository.save(prova);
    }

    @PutMapping("/{id}")
    public Prova updateProva(@PathVariable Long id, @RequestBody Prova prova) {
        prova.setIdProva(id);
        return provaRepository.save(prova);
    }

    @DeleteMapping("/{id}")
    public void deleteProva(@PathVariable Long id) {
        provaRepository.deleteById(id);
    }
}
