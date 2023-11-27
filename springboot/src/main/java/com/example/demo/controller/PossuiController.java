package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Possui;
import com.example.demo.repository.PossuiRepository;

import java.util.List;

@RestController
@RequestMapping("/possui")
public class PossuiController {

    @Autowired
    private PossuiRepository repository;

    @GetMapping
    public List<Possui> getAll() {
        return repository.findAll();
    }

    @GetMapping("/{id}")
    public Possui getById(@PathVariable Long id) {
        return repository.findById(id).orElse(null);
    }

    @PostMapping
    public Possui add(@RequestBody Possui entity) {
        return repository.save(entity);
    }

    @PutMapping("/{id}")
    public Possui update(@PathVariable Long id, @RequestBody Possui entityDetails) {
        Possui entity = repository.findById(id).orElse(null);

        if (entity != null) {
            entity.setEventosEspeciais(entityDetails.getEventosEspeciais());
            entity.setEdicaoCasa(entityDetails.getEdicaoCasa());

            repository.save(entity);
        }

        return entity;
    }

    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        repository.deleteById(id);
    }
}
