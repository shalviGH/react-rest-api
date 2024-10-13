import axios from 'axios';

const CLIENTE_BASE_REST_API_URL= "http://localhost:8095/api/clientes/";

class ClienteServices{
    
    getAllClient(){
        return axios.get(CLIENTE_BASE_REST_API_URL+'findAll');
    }

    createClient(client){
        console.log("Ejecutando funcion de agregacion de datos" + client);
        return axios.post(CLIENTE_BASE_REST_API_URL+'save', client);
    }

    getClient(id){
        console.log("Ejecutando funcion obtencion de datos del cliente de datos" + id);
        return axios.get(CLIENTE_BASE_REST_API_URL+'find/'+id);
    }

    updateClient(cliente){
        console.log("Ejecutando funcion obtencion de datos del cliente de datos" + cliente);
        return axios.put(CLIENTE_BASE_REST_API_URL+'update',cliente);
    }

    deleteClient(id){
        console.log("Ejecutando funcion para eliminacionn de datos" + id);
        return axios.delete(CLIENTE_BASE_REST_API_URL+'update/'+ id);
    }
}

export default new ClienteServices();