const express=require('express');
const faker = require('faker')
const app=express();
const port=12000;

app.get('/', (req, res)=>{
  res.send('A darle');
})

app.get('/nueva-ruta', (req, res) =>{
  res.send('Mi nueva ruta');
})

app.get('/products', (req, res)=>{
  const products =[];
  const {size}=req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });

  }
  res.json(products)
})

app.get('/products/filter', (req, res)=>{
  res.send('Este es un filter')
})

app.get('/products/:id', (req, res)=>{
  const {id} =req.params;
  res.json({
    id,
    name:'Product 3',
    price: 2500
  });
})



/*Query params */

app.get('/users', (req, res) =>{
  const {limit, offset} = req.query;
  if(limit && offset){
    res.json({
      limit,
      offset
    });
  } else{
    res.send('No hay parametros')
  }
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




