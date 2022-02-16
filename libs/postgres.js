//Libreria pg y vamops a imprtar la libreria
const {Client}=require('pg');

async function getConnection(){
  //Creamos una constante cliente con una instancia de client
  const client=new Client({
    host:'localhost',
    port: 5432,
    user: 'axelrob',
    password: 'admin123',
    database: 'my_store'
  });
  await client.connect();
  return client;




}

module.exports= getConnection;
