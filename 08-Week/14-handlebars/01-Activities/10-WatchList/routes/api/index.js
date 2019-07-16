const express = require('express');
const router = express.Router();


router.get('/:movie', function (req,res){
    let movie = req.params.movie
    if(movie){
        
    }else{

    }
});

//api prepended 
router.post('/', function (req,res){
    
});

router.put('/', function (req,res){
    
});

router.delete('/', function (req,res){
    
});

module.exports = router;