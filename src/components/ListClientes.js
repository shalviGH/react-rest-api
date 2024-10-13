import React, { useEffect, useState } from 'react'
import ClienteServices from './services/ClienteServices';
import { Link } from 'react-router-dom'; 

export const ListClientes = () => {
    const [clients, SetClients] = useState([]);
    
    useEffect(()=>{
        listClient();
    },[]);

    const listClient = () => {
        console.log('listClient llamada =============== ==============================');
        ClienteServices.getAllClient().then(response=>{
            SetClients(response.data);
            
        }).catch(error =>{
            console.log(error);
        })
    }


    



    const deleteClient = (id) => {
       
            ClienteServices.deleteClient(id).then(response=>{
                console.log(response.data);
                listClient();
            }).catch(error =>{
                console.log(error);
            })
        }
        

  return (
    <div className='container'>
        <h2 className='text-center'>Listado de clientes</h2>
       <Link to="add-client" className="btn btn-primary mb2">Agregar cliente</Link>  

        <table class="table">
        <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Last name</th>
            <th scope="col">Handle</th>
            <th scope="col">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {
                
                clients.map(client =>
                    <tr key={client.id}>
                        <th scope="row">1</th>
                        <td>{client.name}</td>
                        <td>{client.last_name}</td>
                        <td>{client.email}</td>
                        <td>
                            <Link className='btn btn-primary' to={`/edit-client/${client.id}` }>Actualizar</Link>
                            <button style={{marginLeft:5}} className='btn btn-danger' onClick={ () => deleteClient(client.id ) }>Eliminar</button>

                        </td>
                    </tr>
                )
            }
           
            
        </tbody>
        </table>

    </div>
  )
}
