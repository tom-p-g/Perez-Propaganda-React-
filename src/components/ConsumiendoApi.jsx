import React from 'react'
import { useState, useEffect } from 'react'
import PresentacionApi from './PresentacionApi'

const ConsumiendoApi = () => {
  const getObjetos = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json()
    return data

  }
  const [objetos, setObjetos] = useState([])


  useEffect(() => {
    getObjetos().then((objetos) => setObjetos(objetos))
  }, [])

  return (
    <div>
      <h1>PRESENTACION DE INFORMACION DE API JSONPLACEHOLDER</h1>
      {objetos.map((objeto) => {
      return (
        <PresentacionApi
          key={objeto.id}
          title={objeto.title}
        />
      )

    }



    )}


    </div>

  )
}

export default ConsumiendoApi