package com.examendos.ejerciciodosbackend.service;

import com.examendos.ejerciciodosbackend.model.Clientes;
import com.examendos.ejerciciodosbackend.repository.ClientesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {
    @Autowired
    private ClientesRepository clientesRepository;

    public List<Clientes> getClients(){
        return clientesRepository.findAll();
    }

    public Clientes getClientById(Long idClientes){
        return clientesRepository.findById(idClientes).orElse(null);
    }

    public Clientes saveClient (Clientes cliente){
        return clientesRepository.save(cliente);
    }

    public void deleteClient(Long idCliente){
         clientesRepository.deleteById(idCliente);
    }

    public Clientes updateClient(Long idCliente, Clientes cliente){
        Clientes clientExists = clientesRepository.findById(idCliente).orElse(null);
        if(clientExists !=null){
            cliente.setIdClientes(idCliente);
            return clientesRepository.save(cliente);
        }else {
            return null;
        }
    }
}
