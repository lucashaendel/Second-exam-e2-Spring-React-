package com.examendos.ejerciciodosbackend.service;


import com.examendos.ejerciciodosbackend.model.Usuarios;
import com.examendos.ejerciciodosbackend.repository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UsuariosRepository usuarioRepository;

    public boolean authenticate(String nombreUsuario, String passwordUsuario) {
        Usuarios user = usuarioRepository.findByNombreUsuarioAndPasswordUsuario(nombreUsuario, passwordUsuario);
        return user != null;
    }
}