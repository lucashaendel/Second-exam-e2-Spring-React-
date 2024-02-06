package com.examendos.ejerciciodosbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Clientes {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idClientes;

    private String nombre;
    private String apellido;
    private String fechaIngreso;
    private String domicilio;
    private String telefono;
}
