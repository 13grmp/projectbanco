package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.EdicaoCasa;
import com.example.demo.repository.EdicaoCasaRepository;

import java.util.List;

@RestController
@RequestMapping("/edicaoCasa")
public class EdicaoCasaController {

    @Autowired
    private EdicaoCasaRepository edicaoCasaRepository;

    @GetMapping
    public List<EdicaoCasa> getAllEdicaoCasas() {
        return edicaoCasaRepository.findAll();
    }

    @GetMapping("/{id}")
    public EdicaoCasa getEdicaoCasaById(@PathVariable Long id) {
        return edicaoCasaRepository.findById(id).orElse(null);
    }

    @PostMapping
    public EdicaoCasa createEdicaoCasa(@RequestBody EdicaoCasa edicaoCasa) {
        return edicaoCasaRepository.save(edicaoCasa);
    }

    @PutMapping("/{id}")
    public EdicaoCasa updateEdicaoCasa(@PathVariable Long id, @RequestBody EdicaoCasa edicaoCasa) {
        edicaoCasa.setIdEdicao(id);
        return edicaoCasaRepository.save(edicaoCasa);
    }

    @DeleteMapping("/{id}")
    public void deleteEdicaoCasa(@PathVariable Long id) {
        edicaoCasaRepository.deleteById(id);
    }
}
