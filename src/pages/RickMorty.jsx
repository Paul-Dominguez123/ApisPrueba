import { useState, useEffect } from 'react'
import styled from 'styled-components';

export const RickMorty = () => {
  const [datos, setDatos] = useState({})

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((data) => data.json())
      .then((productos) => setDatos(productos))

  }, [])

  const { results } = datos


  return (

    <Contenedor>

     { results ? results.map( (e, i)  => {
      return (
        <>
          <h2> { e.name } </h2>
          <img src={e.image} alt="" />
        </>
      )
     }) 
      :
      'No tienes nada que mostrar'}

    </Contenedor>
  )
}
const Contenedor=styled.div`
  margin-left:250px;
  
`;