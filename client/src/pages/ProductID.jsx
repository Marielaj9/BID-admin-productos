import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'

export const ProductID = () => {

  const {id}= useParams();
  const [data, setData] = useState(null);

  const CargarDatos = () => {
    axios.get('http://localhost:9000/api/producto/' + id)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    CargarDatos()
  }, []);

  return (
    <div>
      <h1>{data?.titulo}</h1>
      <p>Precio:$ {data?.precio}</p>
      <p>Descripción: {data?.descripcion}</p>
    </div>
  )
}
