//Creación del servidor en el puerto 3000
const express = require("express");
const app = express();

// Middleware para analizar el cuerpo de la solicitud como JSON
app.use(express.json());

// Middleware para analizar el cuerpo de la solicitud como datos de formulario codificados en URL
app.use(express.urlencoded({ extended: true }));

// Configurar la ruta estática para servir los archivos (imágenes, por ejemplo) desde la carpeta "public"
app.use(express.static('public'));

//Importanción del módulo de conexión a nuestra base de datos
const sequelize = require("./conexion_bd");

// Uso de Cors para que el servidor responda a solicitudes de diferentes orígenes
const cors = require('cors');
app.use(cors());

//Necesario para trabajar con fecha/hora de una manera sencilla
const moment = require("moment");


//CREACIÓN DE ENDPOINTS

//01- Definir el endpoint para obtener todos los posts
app.get('/allposts', async (req, res) => {
    try {
      // Ejecutar una consulta SELECT para seleccionar todos los campos de la tabla "posts" en orden descendente de id_entrada, así muestro 1º la entrada más nueva en el feed
      const posts = await sequelize.query('SELECT * FROM posts ORDER BY id_entrada DESC', { type: sequelize.QueryTypes.SELECT });
  
      // Responder con los posts encontrados
      res.json(posts);
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  });

//02- Definir el endpoint para crear un nuevo post
app.post('/newpost', async (req, res) => {
    try {
      // Obtener los datos del nuevo post desde el cuerpo de la solicitud
      const {img_entrada, encabezado, fecha_publicacion, contenido } = req.body;
  
      // Ejecutar una consulta INSERT para crear un nuevo registro en la tabla "posts"
      await sequelize.query(
        `INSERT INTO posts (img_entrada, encabezado, fecha_publicacion, contenido)
         VALUES (?, ?, ?, ?)`,
        {
          replacements: [img_entrada, encabezado, fecha_publicacion, contenido],
          type: sequelize.QueryTypes.INSERT
        }
      );
  
      // Enviar una confirmación de éxito como respuesta
      res.json({ message: "Post creado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  });
  
//03- Definir el endpoint para editar un post existente
app.put('/post/:id_entrada', async (req, res) => {
    try {
      // Obtener el ID del post a editar de los parámetros de la ruta
      const id_entrada = req.params.id_entrada;
  
      // Obtener los datos actualizados del post desde el cuerpo de la solicitud
      const { img_entrada, encabezado, fecha_publicacion, contenido } = req.body;
  
      // Ejecutar una consulta UPDATE para editar el registro en la tabla "posts"
      const updatePost = await sequelize.query(
        `UPDATE posts
         SET img_entrada = ?, encabezado = ?, fecha_publicacion = ?, contenido = ?
         WHERE id_entrada = ?`,
        {
          replacements: [img_entrada, encabezado, fecha_publicacion, contenido, id_entrada],
          type: sequelize.QueryTypes.UPDATE
        }
      );
  
      // Enviar una confirmación de éxito como respuesta
      res.json({ message: "Post editado exitosamente" });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error interno del servidor');
    }
  });
  
//04- Definir el endpoint para eliminar un post
app.delete('/posts/:id_entrada', async (req, res) => {
  try {
    // Obtener el ID del post a eliminar de los parámetros de la ruta
    const id_entrada = req.params.id_entrada;

    // Ejecutar una consulta DELETE para eliminar el registro de la tabla "posts"
    const deletePost = await sequelize.query(
      `DELETE FROM posts
       WHERE id_entrada = ?`,
      {
        replacements: [id_entrada],
        type: sequelize.QueryTypes.DELETE
      }
    );

    // Enviar una confirmación de éxito como respuesta
    res.json({ message: "Post eliminado exitosamente" });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error interno del servidor');
  }
});

//05- Define la ruta para obtener un post específico
app.get('/post/:id_entrada', async (req, res) => {
  const id_entrada = req.params.id_entrada;

  try {
    // Obtiene el post utilizando la id_entrada proporcionada
    const post = await sequelize.query(
      `SELECT * FROM posts WHERE id_entrada = :id_entrada`,
      {
        replacements: { id_entrada },
        type: sequelize.QueryTypes.SELECT
      }
    );

    if (post.length > 0) {
      // Si se encuentra el post, envía los datos al cliente
      res.json(post[0]);
    } else {
      // Si no se encuentra el post, envía un mensaje de error
      res.status(404).json({ error: 'El post no existe' });
    }
  } catch (error) {
    // Si ocurre algún error, envía un mensaje de error
    res.status(500).json({ error: 'Error en el servidor' });
  }
});
  
//Iniciar el servidor tras en el puerto 3000 
app.listen(3000, function(){
    console.log("Sistema funcionando en el puerto 3000");
});