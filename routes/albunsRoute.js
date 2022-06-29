const express = require('express');
const albunsController = require('../controller/albunsController');

const router =  express.Router();

router.get('/', albunsController.getAll);

router.get('/:id', (req,res)=>{res.status(200).send('rota getById')});

module.exports = router;