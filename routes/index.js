const express=require('express');
const productRouter=require('./products.router');
const userRouter=require('./users.router');
const categoriesRouter=require('./categories.router');
const producCateroriesRouter=require('./products_categories.router');
const robotsRouter=require('./robots.router');



function routerApi(app){

  //Realizando una ruta maestra
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productRouter);
  router.use('/users', userRouter);
  router.use('/categories', categoriesRouter);
  router.use('/robots', robotsRouter);
}


module.exports = routerApi;
