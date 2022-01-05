const express=require('express');
const faker = require('faker')
//Importar los modulos routes
const routerApi=require('./routes');



const app=express();
const port=12000;

app.get('/', (req, res)=>{
  res.send('A darle');
})

app.get('/nueva-ruta', (req, res) =>{
  res.send('Mi nueva ruta');
})

//Llamamos y pasamos la plicacion

routerApi(app);





/*


app.get('/products/:productsId/categories/:categoriesId', (req, res) =>{
  const {productsId,categoriesId} = req.params;
  res.json({
    productsId,
    categoriesId
  });
})
/*Ejemplos con Marca, Modelo*/
/*app.get('/marks/:marksId/models/:modelsId', (req, res)=>{
  const {marksId,modelsId}=req.params;
  res.json([
    {
      marksId,
    },
    {
      modelsId,
    }
  ])
})


*/
app.listen(port, () => {
  console.log('Mi port' + port);
});
