package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.Vencedores;
import com.example.demo.repository.VencedoresRepository;

import java.util.List;

@RestController
@RequestMapping("/vencedores")
public class VencedoresController {

    @Autowired
    private VencedoresRepository vencedoresRepository;

    @GetMapping
    public List<Vencedores> getAllVencedores() {
        return vencedoresRepository.findAll();
    }

    @GetMapping("/{id}")
    public Vencedores getVencedoresById(@PathVariable Long id) {
        return vencedoresRepository.findById(id).orElse(null);
    }

    @PostMapping
    public Vencedores addVencedores(@RequestBody Vencedores vencedores) {
        return vencedoresRepository.save(vencedores);
    }

    @PutMapping("/{id}")
    public Vencedores updateVencedores(@PathVariable Long id, @RequestBody Vencedores vencedoresDetails) {
        Vencedores vencedores = vencedoresRepository.findById(id).orElse(null);

        if (vencedores != null) {
            vencedores.setVencedores(vencedoresDetails.getVencedores());

            vencedoresRepository.save(vencedores);
        }

        return vencedores;
    }

    @DeleteMapping("/{id}")
    public void deleteVencedores(@PathVariable Long id) {
        vencedoresRepository.deleteById(id);
    }
}
