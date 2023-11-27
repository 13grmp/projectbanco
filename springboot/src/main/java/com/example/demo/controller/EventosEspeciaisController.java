package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.model.EventosEspeciais;
import com.example.demo.repository.EventosEspeciaisRepository;

import java.util.List;

@RestController
@RequestMapping("/eventos-especiais")
public class EventosEspeciaisController {

    @Autowired
    private EventosEspeciaisRepository eventosEspeciaisRepository;

    @GetMapping
    public List<EventosEspeciais> getAllEventosEspeciais() {
        return eventosEspeciaisRepository.findAll();
    }

    @GetMapping("/{id}")
    public EventosEspeciais getEventoEspecialById(@PathVariable Long id) {
        return eventosEspeciaisRepository.findById(id).orElse(null);
    }

    @PostMapping
    public EventosEspeciais addEventoEspecial(@RequestBody EventosEspeciais eventoEspecial) {
        return eventosEspeciaisRepository.save(eventoEspecial);
    }

    @PutMapping("/{id}")
    public EventosEspeciais updateEventoEspecial(@PathVariable Long id, @RequestBody EventosEspeciais eventoEspecialDetails) {
        EventosEspeciais eventoEspecial = eventosEspeciaisRepository.findById(id).orElse(null);

        if (eventoEspecial != null) {
            eventoEspecial.setNome(eventoEspecialDetails.getNome());
            eventoEspecial.setDescricao(eventoEspecialDetails.getDescricao());
            eventoEspecial.setData(eventoEspecialDetails.getData());

            eventosEspeciaisRepository.save(eventoEspecial);
        }

        return eventoEspecial;
    }

    @DeleteMapping("/{id}")
    public void deleteEventoEspecial(@PathVariable Long id) {
        eventosEspeciaisRepository.deleteById(id);
    }
}
