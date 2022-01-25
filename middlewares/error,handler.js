//Estructura de un middleware de tipo error
function logErrors(err, req, res, next){
    console.log('logErrors')
    console.error(err);
  //  no damos cuenta que ejecutamos un midd de tipo error con next
    next(err);
}

//vA A DETECTAR UN ERROR PERO VA A CREAR UN FORMATO PARA DEVOLVERSELO AL CLIENTE
// Los midd se deben realizar despues de definir el routing

function errorHandler(err, req, res, next){
    console.log('errorhandler')
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    })

}
// Crear una funcion tipo boom para identificar que el error es de tipo boom
// Toda la informacion del error esta en el output
function boomErrorHandler(err, req, res, next){
  if(err.isBoom){
    const {output}= err;
    res.status(output.statusCode).json(output.payload);
  }
  next(err);
}


module.exports={logErrors, errorHandler, boomErrorHandler};
