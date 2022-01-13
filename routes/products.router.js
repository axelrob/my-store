const express=require('express');
const res = require('express/lib/response');
const faker=require('faker');
//Necesitamos un router para poder usar las rutas en diferentes archivos
const router= express.Router();



router.get('/', (req, res)=>{
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

router.get('/filter', (req, res)=>{
  res.send('Este es un filter')
})

router.get('/:id', (req, res)=>{
  const {id} =req.params;
  if(id==='999'){
    res.status(404).json({
      message:'not found'
    });
  }else{
    res.status(200).json({
    id,
    name:'Product 3',
    price: 2500
    });
  }



});

//METODO POST siempre viene en un atributo llamado body

router.post('/', (req, res)=>{
  const body=req.body;
  //haciendo un response dinamico con un json
  res.status(201).json({
    message: 'Created',
    data: body
  });
})

//METODO PATCH ACTUALIZAR, IGUALMENTE SE USA UN BODY

router.patch('/:id', (req, res) =>{
  //Necesita recibir un id
  const {id}=req.params;
  const body=req.body;
  res.json({
    massage: "Update",
    data: body,
    id
  });
});


//METODO PUT HACE LO MISMO ACTUALIZAR, IGUALMENTE SE USA UN BODY

router.put('/:id', (req, res) =>{
  //Necesita recibir un id
  const {id}=req.params;
  const body=req.body;
  res.json({
    massage: "Update",
    data: body,
    id
  });
});

//METODO delete lleva el mismo codigo que los anteriores
// no tiene body
router.delete('/:id', (req, res) =>{
  //Necesita recibir un id
  const {id}=req.params;
  res.json({
    massage: "Delete",
    id
  });
});


module.exports=router;
