import { useState, useEffect } from "react";
import axios from "axios";

import React from 'react'

const Home = () => {
  
  const [livros, setLivros] = useState([])

  const getLivros = async() => {
    
  try{
    const response = await axios.get("https://parallelum.com.br/fipe/api/v1/carros/marcas/");
    const data = response.data;
    setLivros(data)
  }catch(error){
    console.log("error");
  }}
  useEffect(()=> {
    getLivros()
  }, [])

  return (
    <div>
    <h1>Marcas de carro</h1>  
    {livros.length === 0 ? (<p>Carregando...</p>) : (
      livros.map((livro) => (
        <div className="Marcas" key={livro.id}>
          <h2>{livro.nome}</h2>
        </div>
      ))
    )}
    </div>
  )
}

export default Home