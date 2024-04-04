# Mi primer servidor con Express

1. Inicializar npm con `npm init -y`
2. Crear el `index.js`
3. Instalar express `npm i express`
4. Crear archivo `.gitignore` y en su interior `node_modules`

**Tip:** Para desinstalar un paquete utilice `npm uninstall nombre_paquete`

## Tipos de Dependencias
- dependencies de producción ej: `npm i nombre_paquete1 paquete2`
- devDependencias solo para el desarrollo `npm i -D nombre_paquete`

## Módulos en javascript

- ES6 modules (ES 2015): import y export
- CommonJS modules: por defecto en node.js

Para activar ES6 modules se necesita agregar al `package.json`

```json
"type": "module"
```

## Nodemon
Sirve para estar reiniciando el servidor cada vez que se ejecute un cambio.

`npm i -D nodemon`

Agregar al package.json
```json
"scripts": {
    "dev": "nodemon index.js"
},
```

Finalmente ejecutar en consola:
```sh
npm run dev
```