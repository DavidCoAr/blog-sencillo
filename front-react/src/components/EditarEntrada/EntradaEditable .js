import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const EntradaEditable  = () => {
  const [img_entrada, setImgEntrada] = useState('');
  const [encabezado, setEncabezado] = useState('');
  const [fecha_publicacion, setFechaPublicacion] = useState('');
  const [contenido, setContenido] = useState('');
  
  const { id_entrada } = useParams();
  useEffect(() => {
    fetch(`http://localhost:3000/post/${id_entrada}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Error al obtener el post');
        }
      })
      .then(data => {
        setImgEntrada(data.img_entrada);
        setEncabezado(data.encabezado);
        setFechaPublicacion(data.fecha_publicacion);
        setContenido(data.contenido);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id_entrada]);

  const handleSubmit = (event) => {
    event.preventDefault();
   
    fetch(`http://localhost:3000/post/${id_entrada}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        img_entrada,
        encabezado,
        fecha_publicacion,
        contenido,
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log('Respuesta del servidor:', data);
        // Realizar alguna acción adicional después de guardar los valores
      })
      .catch(error => {
        console.error('Error al enviar la solicitud:', error);
        // Realizar alguna acción adicional en caso de error
      });
  };

  const editadoPost = () => {
    window.location.href = "/";
  };
  return (
    <form onSubmit={handleSubmit} className="mx-auto col-lg-6">
      <div className="mb-3">
        <label htmlFor="imgEntrada" className="form-label">Imagen de entrada:</label>
        <input
          type="text"
          id="imgEntrada"
          name="imgEntrada"
          className="form-control"
          value={img_entrada}
          onChange={event => setImgEntrada(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="encabezado" className="form-label">Encabezado:</label>
        <input
          type="text"
          id="encabezado"
          name="encabezado"
          className="form-control"
          value={encabezado}
          onChange={event => setEncabezado(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="fechaPublicacion" className="form-label">Fecha de publicación:</label>
        <input
          type="text"
          id="fechaPublicacion"
          name="fechaPublicacion"
          className="form-control"
          value={fecha_publicacion}
          onChange={event => setFechaPublicacion(event.target.value)}
        />
      </div>
      <div className="mb-3">
        <label>Fecha de publicación:</label>
        <p>{new Date().toLocaleDateString()}</p> {/* Mostrar la fecha actual */}
      </div>
      <div className="mb-3">
        <label htmlFor="contenido" className="form-label">Contenido:</label>
        <textarea
          id="contenido"
          name="contenido"
          className="form-control"
          value={contenido}
          onChange={event => setContenido(event.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary" onClick={editadoPost}>
        <FontAwesomeIcon icon={faSave} /> Guardar
      </button>
    </form>
  );
};

export default EntradaEditable ;
