const faker=require('faker');
const boom= require('@hapi/boom');
const pool= require('../libs/postgres.pool');

// Nos traemos a sequelize

const sequelize= require('../libs/sequelize');


class ProductsService {

//Constructor que va a manejar una fuente de datos en memoria

constructor(){
  this.products=[];
  // se van a generar los 20 productos llevando al constructor
  this.generate();
/*// LE DECIMOS AL CONSTRUCTOR QUE QUEREMOS UN POOL
  this.pool=pool;
  // por si hya errores en la conexion
  this.pool.on('error', (err)=> console.error(err));*/
}
// Metodo para generar todos los productos

generate(){
  const limit = 5;
  for (let index = 0; index < limit; index++) {
    this.products.push({
      id: faker.datatype.uuid(),
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    });
}
}


async create(data){
  const newProduct={
    id: faker.datatype.uuid(),
    ...data
  }
  this.products.push(newProduct);
  return newProduct;
}

/*async find(){ // haciendo find con un pool
  const query = 'SELECT * FROM tasks';
  const rta= await this.pool.query(query);
  return rta.rows;

//return this.products;

}*/

async find(){ // haciendo find con un pool
  const query = 'SELECT * FROM tasks';
  const [data]= await sequelize.query(query);
  return data;

//return this.products;

};




async findOne(id){
  //const name=this.getTotal() para el ejemplo de midd;
const product= this.products.find(item => item.id === id);
if(!product){
  throw boom.notFound('Product nof found');
}
  return product;
}

async update(id, changes){
// Vamos a retornar la posicion del arreglo
const index=this.products.findIndex(item => item.id===id);
if(index=== -1){
  throw boom.notFound('Product not found');
}
// EN LA POSICION DEL OBJETO APLIQUE LOS CAMBIOS
const product=this.products[index];
this.products[index]={
  ...product,
  ...changes
};
return this.products[index];

}

async delete(id){
  const index=this.products.findIndex(item => item.id===id);
  if(index=== -1){
    throw boom.notFound('Product not found');
  }// Splice permite enviar una posicion para poder eliminar esa posicion
  this.products.splice(index, 1);
  return {id};

}

}

module.exports=ProductsService;
