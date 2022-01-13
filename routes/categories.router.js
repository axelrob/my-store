const express=require('express');
const router= express.Router();



router.get('/', (req, res) => {
  res.json({
    name: 'Radio',
    id: 124,
    nuero_parte: 'AS 25'
  })
})

module.exports=router;
