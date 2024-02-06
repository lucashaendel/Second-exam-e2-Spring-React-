package com.examendos.ejerciciodosbackend.repository;

import com.examendos.ejerciciodosbackend.model.Clientes;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClientesRepository extends JpaRepository<Clientes, Long> {
}
