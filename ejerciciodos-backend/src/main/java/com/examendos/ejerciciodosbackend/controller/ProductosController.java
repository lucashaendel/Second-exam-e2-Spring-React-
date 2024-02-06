package com.examendos.ejerciciodosbackend.controller;

import com.examendos.ejerciciodosbackend.model.Clientes;
import com.examendos.ejerciciodosbackend.model.Productos;
import com.examendos.ejerciciodosbackend.service.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/productos")
public class ProductosController {

    @Autowired
    private ProductosService productosService;

    @GetMapping
    public ResponseEntity<List<Productos>> getProducts(){
        List<Productos> productos = productosService.getProducts();
        return new ResponseEntity<>(productos, HttpStatus.OK);
    }

    @GetMapping("/{idProducto}")
    public ResponseEntity<Productos> getProductById(@PathVariable Long idProducto) {
        Productos product = productosService.getProductById(idProducto);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{idProducto}")
    public ResponseEntity<Void> deleteProducto(@PathVariable Long idProducto) {
        productosService.deleteProduct(idProducto);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PutMapping("/{idProducto}")
    public ResponseEntity<Productos> updateProduct(@PathVariable Long idProducto, @RequestBody Productos cliente) {
        Productos productUpdated = productosService.updateProduct(idProducto, cliente);
        if (productUpdated != null) {
            return new ResponseEntity<>(productUpdated, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping
    public ResponseEntity<Productos> saveProduct(@RequestBody Productos producto) {
        Productos clientSaved = productosService.saveProduct(producto);
        return new ResponseEntity<>(clientSaved, HttpStatus.CREATED);
    }
}
