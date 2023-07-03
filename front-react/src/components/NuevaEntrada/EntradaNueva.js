import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave } from '@fortawesome/free-solid-svg-icons';

const EntradaNueva = () => {
  const [img_entrada, setImgEntrada] = useState('');
  const [encabezado, setEncabezado] = useState('');
  const [fecha_publicacion, setFechaPublicacion] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    /*const formattedDate = currentDate.toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });*/
    /*const newPost = {
      img_entrada: imgEntrada,
      encabezado: encabezado,
      fecha_publicacion: fechaPublicacion,
      contenido: contenido
    };*/

    // Enviar la solicitud POST al endpoint /newpost
    fetch('http://localhost:3000/newpost', {
      method: 'POST',
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
      <button type="submit" className="btn btn-primary">
        <FontAwesomeIcon icon={faSave} /> Guardar
      </button>
    </form>
  );
};

export default EntradaNueva;

