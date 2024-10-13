import { useState , React, useEffect} from 'react';
import { useNavigate, Link, useParams  } from 'react-router-dom';
import ClienteServices from './services/ClienteServices';

export const AddClient = () => {
    const [name, setName] = useState();
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(()=>{
        console.log("==================================>  "+ id);

        ClienteServices.getClient(id).then((response) =>{
            setName(response.data.name);
            setLastName(response.data.last_name);
            setEmail(response.data.email);
        }).catch(error =>{
            console.log(error);
        })
    }, [])
    
    const saveClient = (e) => {
        e.preventDefault();
            if(id){
                const client = {id, name, last_name, email};
                ClienteServices.updateClient(client).then((response)=>{
                navigate('/');

                }).catch(error => {
                    console.log(error);
                })

            }else{
                const client = {name, last_name, email};
                ClienteServices.createClient(client).then((response)=>{
                navigate('/');

                }).catch(error => {
                    console.log(error);
                })
            }
            
    }

    
    const title = ()=>{
        if(id){
            return <h2 className='text-center'>Actualizar cliente</h2>
        }else{
            return <h2 className='text-center'>Registrar cliente</h2>
        }
    }

  return ( 
    <div>
        <br></br>
    <div className='container'>
    <div className='row'>
    <div className='card col-md-6 offset-md-3 offset-md-3'>
       {
        title()
       }

        <div className="card-body">
            <form>
                <div className='form-group mb-2'>
                    <label className='form-label'>Nombre</label>
                    <input type='text' 
                    placeholder='Digite su nombre' 
                    name='name' className='form-control'
                    value={name}
                    onChange={ (e) => setName(e.target.value)} /> 

                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Apellido</label>
                    <input type='text' 
                    placeholder='Digite su apellido' 
                    name='last_name' className='form-control'
                    value={ last_name }
                    onChange={ (e) => setLastName(e.target.value)} /> 

                </div>

                <div className='form-group mb-2'>
                    <label className='form-label'>Email</label>
                    <input type='text' 
                    placeholder='Digite su nombre' 
                    name='email' className='form-control'
                    value={email}
                    onChange={ (e) => setEmail(e.target.value)} /> 

                </div>
                <button className='btn btn-success' onClick={ (e) => saveClient(e) }>Save</button>
                    &nbsp;&nbsp;
                  <Link to="/" className='btn btn-danger'>Cancelar</Link>  

            </form>

        </div>


    </div>
    </div>
    </div>
    </div>
  )
}
