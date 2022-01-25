const faker=require('faker');
const boom= require('@hapi/boom');

class ProductsService {

//Constructor que va a manejar una fuente de datos en memoria

constructor(){
  this.products=[];
  // se van a generar los 20 productos llevando al constructor
  this.generate();
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

async find(){
// Para el find se realiza un return del array
// Se realiza una Promesa
  return new Promise((resolve, reject)=> {
    setTimeout(()=>{
      resolve(this.products);
    }, 5000);
  })
return this.products;

}

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
