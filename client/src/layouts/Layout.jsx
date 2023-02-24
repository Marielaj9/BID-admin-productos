import React from 'react'
import { useState } from 'react';
import { Outlet } from 'react-router-dom'
import axios from 'axios'

const Layout = () => {
  const [formData, setFormData] = useState({
    titulo: '',
    precio: '',
    descripcion: ''
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) =>{
    event.preventDefault();
    console.log(formData);
    axios.post('http://127.0.0.1:9000/api/producto', formData)
  }

  return (

    <>

      <div className="container mt-5">
        <h1>Product Manager</h1>
        <form onSubmit={handleSubmit} className="form">
          <div>
            <label htmlFor="titulo">Titulo:</label>
            <input
              type="text"
              id="titulo"
              name="titulo"
              value={formData.titulo}
              onChange={handleChange}
              className="form-control"  readonly
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
              className="form-control"  readonly
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
              className="form-control"  readonly
            />
          </div>
          <button className='btn'>crear</button>

        </form>
        <Outlet />
      </div>
    </>
  )
}

export default Layout