const express = require('express');

const router = express.Router();




module.exports =()=>{
    router.get('/',(req, res)=>{
        return res.send('Feedback');
    });
    router.post('/',(req, res)=>{
        return res.send(`form sent`);
    });
  return router  
};