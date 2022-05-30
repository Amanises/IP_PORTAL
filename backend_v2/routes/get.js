const express = require('express') ; 

const router = express.Router();




router.get('/test',(req,res) => {
    // res.send('In update route: ip '+req.body.ip+' by user '+req.body.add_req.user);
    res.send('inside get home url')
})

module.exports = router ;