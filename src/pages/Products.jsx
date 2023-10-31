import { useEffect, useState } from "react"

export const Products = () => {
  const [datos, setDatos] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((data) => data.json())
      .then((productos) => setDatos(productos))
  }, [])

  return (
    <div>
      {datos.map((datos) => {
        return (
          <>
            <h1> {datos.title} </h1>
            <h3> {datos.description}</h3>
            <img src={datos.image} />
          </>
          )
      })}
    </div>
  )

}
