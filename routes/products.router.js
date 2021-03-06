const express=require('express');
const res = require('express/lib/response');

// Se realiza la improtacion de nuestro servicios
const ProductsService=require('./../services/product.service');
// Vamos a importar desde middleware el validator handler
const validatorHandler = require('./../middlewares/validator.handler');
// nos traemos los schemas
const {createProductSchema, updateProductSchema, getProductSchema}= require('./../schemas/product.schema');


//Necesitamos un router para poder usar las rutas en diferentes archivos
const router= express.Router();

// Se crea una instancia del servicio

const service = new ProductsService();



router.get('/', async (req, res)=>{
 // Tenemos la lista de producto y la vamos a obtener del servicio
 const products=await service.find();
  res.json(products)
});

router.get('/filter', (req, res)=>{
  res.send('Este es un filter')
})

router.get('/:id',
validatorHandler(getProductSchema, 'params'),
  async (req, res, next)=>{
  try {
    const {id} =req.params;
    const product= await service.findOne(id);
    res.json(product);

  } catch (error) {
  next(error);
  }
});

//METODO POST siempre viene en un atributo llamado body

router.post('/',
validatorHandler(createProductSchema, 'body'),
  async (req, res)=>{
  const body=req.body;
  const newProduct=await service.create(body);
  //haciendo un response dinamico con un json
  res.status(201).json(newProduct);
})

//METODO PATCH ACTUALIZAR, IGUALMENTE SE USA UN BODY

router.patch('/:id',
validatorHandler(getProductSchema, 'params'),
validatorHandler(updateProductSchema, 'body'),

  async (req, res, next) =>{
  try {
    const {id}=req.params;
  const body=req.body;
  const product=await service.update(id, body);
  res.json(product);
  } catch (error) {
    next(error);
  }



  //Necesita recibir un id
  const {id}=req.params;
  const body=req.body;
  const product=await service.update(id, body);
  res.json(product);
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
router.delete('/:id', async (req, res) =>{
  //Necesita recibir un id
  const {id}=req.params;
  const rta=await service.delete(id);
  res.json(rta);
});


module.exports=router;
