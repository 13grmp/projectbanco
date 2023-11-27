package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Indica;
import com.example.demo.repository.IndicaRepository;

import java.util.List;

@RestController
@RequestMapping("/indica")
public class IndicaController {

    @Autowired
    private IndicaRepository repository;

    @GetMapping
    public List<Indica> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Indica getById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping
    public Indica add(@RequestBody Indica entity) {
        return repository.save(entity);
    }

    @PutMapping("/{id}")
    public Indica update(@PathVariable Long id, @RequestBody Indica entityDetails) {
        Indica entity = repository.findById(id).orElse(null);

        if (entity != null) {
            entity.setParticipante1(entityDetails.getParticipante1());
            entity.setParticipante2(entityDetails.getParticipante2());
            entity.setData(entityDetails.getData());

            repository.save(entity);
        }

        return entity;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
