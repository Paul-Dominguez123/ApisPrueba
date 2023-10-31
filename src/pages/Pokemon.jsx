import { useEffect, useState } from "react"

export const Pokemon = () => {
  const [datos, setDatos] = useState({})

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
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
          <h1> { e.name } </h1>
        </>
      )
     }) 
      :
      'No tienes nada que mostrar'}

    </div>
  )

}

