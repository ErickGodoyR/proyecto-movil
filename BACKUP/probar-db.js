
const pool = require('./db');

async function probarConexion() {
  try {
    const resultado = await pool.query(
      'SELECT NOW() AS fecha_servidor, version() AS version_postgresql'
    );

    console.log('¡Conexión con Neon exitosa!');
    console.log('Fecha del servidor:', resultado.rows[0].fecha_servidor);
    console.log('Base de datos:', resultado.rows[0].version_postgresql);
  } catch (error) {
    console.error('Error al conectar con Neon:', error.message);
  } finally {
    await pool.end();
  }
}

probarConexion();
