const express=require('express');

//Importar los modulos routes
const routerApi=require('./routes');



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



app.listen(port, () => {
  console.log('Mi port' + port);
});
