const express = require('express');
const router = express.Router();
const apiRoutes =require('./api');
const controller = require('../controlers/UsersController')


router.use('/api', apiRoutes);

//homepage get function
router.get("/", async function(req, res) {
    res.render("main");
    
  });


module.exports = router