import React, { useEffect, useState } from 'react';
//Importo FontAwesomeIcon y faTrash, para poder usar el icono tipo borrar faTrash
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';


function EntradaHome() {
  // Estado para almacenar los posts obtenidos
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Realizar la solicitud fetch al endpoint /allposts al cargar el componente
    fetch('http://localhost:3000/allposts')
      .then(response => response.json()) // Convertir la respuesta a formato JSON
      .then(data => setPosts(data)) // Almacenar los posts en el estado
      .catch(error => console.error(error)); // Manejar errores en la consola
  }, []);

  const handleDelete = async (id) => {
    try {
      // Envía una solicitud DELETE al servidor utilizando el ID del post
      await fetch(`http://localhost:3000/posts/${id}`, {
        method: 'DELETE',
      });
      // Actualiza el estado de los posts excluyendo el post eliminado
      setPosts(posts.filter(post => post.id_entrada !== id));
      // Captura y muestra cualquier error que ocurra durante la eliminación
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        {posts.map(post => { //Utiliza el método map para iterar sobre el array de posts y generar un elemento JSX para cada post.
          // Formatear la fecha con Date (no uso moment porque al parecer está descontinuado su soporte)
          const fechaPublicacion = new Date(post.fecha_publicacion).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });
  
          // Obtener los primeros 50 caracteres del contenido con slice, añadiendo "..." a la vista preliminar del contenido si > 50 caracteres(si false, devuelve "")
          const contenidoCorto = post.contenido.slice(0, 50) + (post.contenido.length > 50 ? '...' : '');
  
          return (
            // Crea un contenedor <div> para cada post y le asigna una clave única key utilizando el valor de id_entrada del post
            <div className="col-md-6 col-lg-4 mb-4" key={post.id_entrada}>
              <div className="card">
                <a href={`/post/${post.id_entrada}`}>
                  <img src="logo192.png" className="card-img-top" alt="Imagen provisional" />
                </a>  
                <a href={`/post/${post.id_entrada}`}>
                  <img src={post.img_entrada} className="card-img-top" alt="Imagen de entrada" />
                </a>
                <div className="card-body">
                  <a href={`/post/${post.id_entrada}`}><h2 className="card-title">{post.encabezado}</h2></a>
                  <p className="card-text">{fechaPublicacion}</p>
                  <p className="card-text">{contenidoCorto}</p>
                  <button className="btn btn-danger" onClick={() => handleDelete(post.id_entrada)}>
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
  
}



export default EntradaHome;


