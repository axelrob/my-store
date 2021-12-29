const express=require('express');
const app=express();
const port=12000;

app.get('/', (req, res)=>{
  res.send('A darle');


})
app.listen(port, () => {
  console.log('Mi port' + port);
});



