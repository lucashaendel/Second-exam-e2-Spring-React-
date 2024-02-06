package com.examendos.ejerciciodosbackend.repository;

import com.examendos.ejerciciodosbackend.model.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository extends JpaRepository<Usuarios, Long> {
    Usuarios findByNombreUsuarioAndPasswordUsuario(String nombreUsuario, String passwordUsuario);
}