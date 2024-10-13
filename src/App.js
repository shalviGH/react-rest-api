

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { useState, useEffect } from 'react';
import { ListClientes } from './components/ListClientes';
import { Header } from './components/services/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AddClient } from './components/AddClient';
function App() {
  
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    estudio: false
  })
 
  function cambiarNombre(e){
      setDatos((valores)=>({
        ...valores, 
        nombre: e.target.value
      }))
  }

  function cambiarEdad(e){
    setDatos((valores)=>({
      ...valores, 
      edad: e.target.value
    }))
  }

  function cambiarEstudio(e){
    setDatos((valores)=>({
      ...valores, 
      estudio: !datos.estudio 
    }))
  }

  function procesar(e){
    e.preventDefault();
    alert('datos cargados: ' + datos.nombre+' '+ datos.edad+' ' + datos.estudio);
  }




 
  return (

<div>
    
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
             <Route exact path="/" element={ <ListClientes/>}></Route> 
             <Route path="/add-client" element={ <AddClient/>}></Route> 
             <Route path="/edit-client/:id" element={ <AddClient/>}></Route> 
          </Routes>
        </div>
        <Footer/>
      </BrowserRouter>
   
</div> 
      

    
  );
}

export default App;
