import React, { useEffect } from 'react'
import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom'
import axios from 'axios'

const EditarProductos = () => {

  const {id}= useParams();

  const [formData, setFormData] = useState({
    titulo: '',
    precio: '',
    descripcion: ''
  });

  useEffect(() => {
    axios.get('http://127.0.0.1:9000/api/producto/' + id)
      .then(response => {
        setFormData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    axios.put('http://127.0.0.1:9000/api/producto/' + id, formData)
  }

  return (

    <>

      <div className="container mt-5">
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="titulo">Titulo:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="precio">Precio:</label>
            <input
              type="number"
              id="precio"
              name="precio"
              value={formData.precio}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="descripcion">Descripcion:</label>
            <input
              type="text"
              id="descripcion"
              name="descripcion"
              value={formData.descripcion}
              onChange={handleChange}
            />
          </div>
          <button className='btn'>Editar</button>

        </form>
        <Outlet />
      </div>
    </>
  )
}

export default EditarProductos