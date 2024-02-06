package com.examendos.ejerciciodosbackend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Productos {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idProducto;

    private String codigoEan;
    private String nombreProducto;
    private String descripcionProducto;
    private String tipo;
    private String marca;
    private Double precio;
    private int stock;

}
