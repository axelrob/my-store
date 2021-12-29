const express=require('express');
const app=express();
const port=12000;

app.get('/', (req, res)=>{
  res.send('A darle');
})

app.get('/nueva-ruta', (req, res) =>{
  res.send('Mi nueva ruta');
})

app.get('/Products', (req, res)=>{
  res.json([
    {
      name: 'Product 1',
      price: 500
    },
    {
      name: 'Product 2',
      price: 1000
    }
  ])
})

app.get('/products/:id', (req, res)=>{
  const {id} =req.params;
  res.json({
    id,
    name:'Product 3',
    price: 2500
  });
})

app.get('/products/:productsId/categories/:categoriesId', (req, res) =>{
  const {productsId,categoriesId} = req.params;
  res.json({
    productsId,
    categoriesId
  });
})
/*Ejemplos con Marca, Modelo*/
app.get('/marks/:marksId/models/:modelsId', (req, res)=>{
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

app.get('/categorias', (req, res) => {
  res.json({
    name: 'Radio',
    id: 123,
    nuero_parte: 'AS 25'
  })
})

app.listen(port, () => {
  console.log('Mi port' + port);
});




