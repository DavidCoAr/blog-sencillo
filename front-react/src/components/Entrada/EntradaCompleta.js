import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

function EntradaCompleta() {
  
  const [post, setPost] = useState(null);

  //Cojo el id_entrada de la url <Route path="/post/:id_entrada" element={<WebEntrada/>} />
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
        setPost(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id_entrada]);


  const borrarPost = () => {
    fetch(`http://localhost:3000/posts/${id_entrada}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Redireccionar a la página principal después de borrar el post
          window.location.href = '/';
        } else {
          throw new Error('Error al borrar el post');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

  const editarPost = () => {
    window.location.href = `/editpost/${id_entrada}`;
  };
  
  if (!post) {
    return <div>Cargando...</div>;
  }
  const fechaPublicacion = new Date(post.fecha_publicacion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <img src={post.img_entrada} className="card-img-top" alt="Imagen del post" />
            <div className="card-body">
              <h1 className="card-title">{post.encabezado}</h1>
              <p className="card-text">{fechaPublicacion}</p>
              <p className="card-text">{post.contenido}</p>
              <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={editarPost}>
                    <FontAwesomeIcon icon={faEdit} /> Editar
                </button>
                
                <button className="btn btn-danger" onClick={borrarPost}>
                    <FontAwesomeIcon icon={faTrash} /> Eliminar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EntradaCompleta;

