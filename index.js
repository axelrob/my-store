const express=require('express');
const cors=require('cors');

//Importar los modulos routes
const routerApi=require('./routes');

// Importar los middlewares
const {logErrors, errorHandler, boomErrorHandler }= require('./middlewares/error,handler');


const app=express();
const port=12000;

app.use(express.json());

//Vamos a permitir el acceso a api a estos domnios
const whiteList = ['http://localhost:5500', 'https://myapp.ec'];
const options = {
  origin: ()=> {
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    } else {
      callback(new Error('no permintido'));
    }
  }
}

//usar la libreria cors que funciona como un middeleware
app.use(cors());


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
