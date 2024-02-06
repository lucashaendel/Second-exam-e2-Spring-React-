package com.examendos.ejerciciodosbackend.repository;

import com.examendos.ejerciciodosbackend.model.Productos;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductosRepository extends JpaRepository<Productos, Long> {
}
