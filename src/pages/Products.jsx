import { useEffect, useState } from "react"
import styled from 'styled-components';

export const Products = () => {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((productos) => setDatos(productos))
  }, [])

  return (
    <Contenedor>
      {datos.map((datos) => {
        return (
          <>
            <h2> {datos.title} </h2>
            <p> {datos.description}</p>
            <img src={datos.image} />
          </>
          )
      })}
</Contenedor>    
  )

}
const Contenedor=styled.div`
  margin-left:250px;
`;