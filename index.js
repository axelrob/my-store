const express=require('express');

//Importar los modulos routes
const routerApi=require('./routes');

// Importar los middlewares
const {logErrors, errorHandler, boomErrorHandler }= require('./middlewares/error,handler');


const app=express();
const port=12000;

app.use(express.json());

app.get('/', (req, res)=>{
  res.send('A darle');
})

app.get('/nueva-ruta', (req, res) =>{
  res.send('Mi nueva ruta');
})

//Llamamos y pasamos la plicacion

routerApi(app);

//Vamos a usar los middlewares
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Mi port' + port);
});
