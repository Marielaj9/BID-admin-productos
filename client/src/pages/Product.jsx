import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

export const Product = () => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const getProduct = () =>{
    axios.get('http://127.0.0.1:9000/api/producto')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  useEffect(() => {
    getProduct();
  }, []);
  console.log(data);

  const eliminar= (id) =>{
    axios.delete('http://127.0.0.1:9000/api/producto/'+ id)
      getProduct();
}


  return (
    <div>
      <h1>All Products</h1>
      {data ? (
        <ul>
          {data.map(item => (
            
              <li key={item._id} className= "lista">
                <Link to={`/products/${item._id}`} className="text1" >{item.titulo}</Link>
              
                <Link to={`/products/${item._id}/edit`} className="text2" >Editar</Link>
              
                <button onClick={() => eliminar(item._id)} className="btn"  >Eliminar</button>
              </li>
            

          ))}
        </ul>
      ) : (
        <p>Cargando datos...</p>
      )}
    </div>
  )
}
