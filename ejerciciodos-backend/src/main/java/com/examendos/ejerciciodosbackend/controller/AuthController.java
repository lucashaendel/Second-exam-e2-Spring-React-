package com.examendos.ejerciciodosbackend.controller;


import com.examendos.ejerciciodosbackend.model.Usuarios;
import com.examendos.ejerciciodosbackend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {
    @Autowired
    private AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody Usuarios usuario) {
        String nombreUsuario = usuario.getNombreUsuario();
        String passwordUsuario = usuario.getPasswordUsuario();
        if (authService.authenticate(nombreUsuario, passwordUsuario)) {
            return ResponseEntity.ok("Login exitoso para el usuario: " + nombreUsuario);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Nombre de usuario o contraseña incorrectos");
        }
    }
}