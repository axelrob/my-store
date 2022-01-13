const express = require("express");

const router=express.Router();

router.get('/', (req, res)=> {
  res.status(200).send({
    data: [
      {
        name: 'The best',
        description: 'Sample robot, made in China',
        model: 2020
      },
      {
        name: 'The last Don',
        description: 'A future ryder, made in Ecuador',
        model: 2022
      }
    ]
  });

});
module.exports=router;
