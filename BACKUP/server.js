const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

let conductores = [
    {
        id: 1,
        nombre: 'Conductor de prueba',
        estado: 'Activo'
    },
    {
        id: 2,
        nombre: 'Segundo conductor',
        estado: 'Activo'
    }
];


app.get('/', (req, res) =>{
    res.send('Servidor funcionando correctamente');
});


//ruta consultar api-conductores
app.get('/api/conductores', (req, res) => {
    res.json(conductores);
});


app.post('/api/conductores', (req, res) =>{
    const {nombre} = req.body;
    
        if(!nombre || !nombre.trim()){
        return res.status(400).json({
            error: 'El nombre del conductor es obligatorio'
        });
    }

    const nuevoConductor = {
        id: conductores.length + 1,
        nombre: nombre.trim(),
        estado: 'Activo'
    };

    conductores.push(nuevoConductor);

    res.status(201).json({
        mensaje: 'Conductor registrado correctamente',
        conductor: nuevoConductor
    });    
});


//primera ruta a la API (estado)
// app.get('/api/estado', (req, res) => {
//     res.json({
//         mensaje: 'api estado funcionando',
//         estado: 'activo'
//     })
// });


app.listen(PORT, () => {
    console.log(`Servidor iniciado en puerto ${PORT}`);
});