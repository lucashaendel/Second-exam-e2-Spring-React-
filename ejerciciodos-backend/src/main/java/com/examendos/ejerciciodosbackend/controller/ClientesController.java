package com.examendos.ejerciciodosbackend.controller;

import com.examendos.ejerciciodosbackend.model.Clientes;
import com.examendos.ejerciciodosbackend.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/clientes")
public class ClientesController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public ResponseEntity<List<Clientes>> getClients(){
        List<Clientes> clientes = clienteService.getClients();
        return new ResponseEntity<>(clientes, HttpStatus.OK);
    }

    @GetMapping("/{idCliente}")
    public ResponseEntity<Clientes> getClientbyId(@PathVariable Long idCliente) {
        Clientes client = clienteService.getClientById(idCliente);
        if (client != null) {
            return new ResponseEntity<>(client, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{idCliente}")
    public ResponseEntity<Void> deleteClient(@PathVariable Long idCliente) {
        clienteService.deleteClient(idCliente);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{idCliente}")
    public ResponseEntity<Clientes> updateClient(@PathVariable Long idCliente, @RequestBody Clientes cliente) {
        Clientes clientUpdated = clienteService.updateClient(idCliente, cliente);
        if (clientUpdated != null) {
            return new ResponseEntity<>(clientUpdated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Clientes> saveClient(@RequestBody Clientes empleado) {
        Clientes clientSaved = clienteService.saveClient(empleado);
        return new ResponseEntity<>(clientSaved, HttpStatus.CREATED);
    }

}
