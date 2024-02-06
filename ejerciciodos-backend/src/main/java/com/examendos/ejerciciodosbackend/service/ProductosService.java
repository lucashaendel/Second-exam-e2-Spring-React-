package com.examendos.ejerciciodosbackend.service;

import com.examendos.ejerciciodosbackend.model.Productos;
import com.examendos.ejerciciodosbackend.repository.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductosService {

    @Autowired
    private ProductosRepository productosRepository;

    public List<Productos> getProducts(){
        return productosRepository.findAll();
    }

    public Productos getProductById(Long idProducto){
        return productosRepository.findById(idProducto).orElse(null);
    }

    public Productos saveProduct(Productos producto){
        return productosRepository.save(producto);
    }

    public void deleteProduct(Long idProducto){
        productosRepository.deleteById(idProducto);
    }

    public Productos updateProduct(Long idProducto, Productos producto){
        Productos productExists = productosRepository.findById(idProducto).orElse(null);
        if(productExists !=null){
            producto.setIdProducto(idProducto);
            return productosRepository.save(producto);
        }else {
            return null;
        }
    }


}
