import express from 'express';

const app = express()

//parametros de ruta
app.get('/game/:number', (req, res) => {
    // console.log(req.params.number)
    const number = req.params.number
    res.send(`El número es: ${number}`)
})

// Tarea: Juego adivinar: enviar parámetro y comparar con número aleatorio entre 1 y 3:
app.get('/azar/:numero', (req, res) => {
    const n = Math.floor(Math.random() * (4 - 1)) + 1;
    const numero = req.params.numero;
    numero == n
        ? res.send("Hoy estás de suerte")
        : res.send(`Buena suerte para la próxima, el número era: ${n}`);
});

// escuchar peticiones externas (routing)
app.get('/', (req, res) => {
    res.send("¡Bienvenido a mi sitio web!")
})

app.get('/about', (req, res) => {
    res.send("Soy un entusiasta de la programación y me encanta aprender nuevas tecnologías.");
});

//inventar 3 rutas más
app.get('/intento1', (req, res) => {
    res.send('intento 1')
})

app.get('/hello', (req, res) => {
    res.send('Hola mundo con express')
})


// objeto response
app.get('/pc', (req, res) => {
    res.redirect('https://www.pcfactory.cl/buscar?productos=47713,47714')
})

// 404 poner al final
app.get('*', (req, res) => {
    res.send("<h1>404 - Página no encontrada</h1><p>Lo siento, la página que buscas no existe.</p>");
});

//levantar un servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor andando en http://localhost:${PORT}`)
})