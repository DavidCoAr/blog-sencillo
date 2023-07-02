import React, { useEffect, useState } from 'react';

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

  return (
    <div className="container">
      <div className="row justify-content-center">
        {posts.map(post => ( //Utiliza el método map para iterar sobre el array de posts y generar un elemento JSX para cada post.
        // Crea un contenedor <div> para cada post y le asigna una clave única key utilizando el valor de id_entrada del post
          <div className="col-md-6 col-lg-4 mb-4" key={post.id_entrada}>  
            <div className="card">
              <img src={`img-entrada/${post.img_entrada}`} className="card-img-top" alt="Imagen de entrada" />
              <div className="card-body">
                <h2 className="card-title">{post.encabezado}</h2>
                <p className="card-text">{post.fecha_publicacion}</p>
                <p className="card-text">{post.contenido}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EntradaHome;


