const express = require('express');

const router = express.Router();




module.exports =()=>{
    router.get('/',(req, res)=>{
        return res.send('Al Speakers');
    });
    router.get('/:name',(req, res)=>{
        return res.send(`speakers detal page ${req.params.name}`);
    });
  return router  
};