const boom =require('@hapi/boom');

function validatorHandler(schema, property){
  return (req, res, next) => {
    const data=req[property];
    // abort early sirve para que si tenemos mas validaciones joi las pueda reconocer  no una por una
    const {error}=schema.validate(data, { abortEarly: false} );
    if(error){
      next(boom.badRequest(error));
    }
    next();
  }
}

module.exports=validatorHandler;
