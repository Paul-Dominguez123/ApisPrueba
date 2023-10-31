import { useState, useEffect } from 'react'

export const RickMorty = () => {
  const [datos, setDatos] = useState({})

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
      .then((data) => data.json())
      .then((productos) => setDatos(productos))

  }, [])

  const { results } = datos


  return (

    <div>

     { results ? results.map( (e, i)  => {
      return (
        <>
          <h1> { e.name } </h1>
          <img src={e.image} alt="" />
        </>
      )
     }) 
      :
      'No tienes nada que mostrar'}

    </div>
  )
}
