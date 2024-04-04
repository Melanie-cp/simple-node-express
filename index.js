import express from 'express';

const app = express()

// escuchar peticiones externas (routing)
app.get('/', (req, res) => {
    res.send('Respondiendo a la ruta raiz o')
})

//levantar un servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})