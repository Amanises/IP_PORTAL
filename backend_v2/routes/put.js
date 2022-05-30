const express = require('express') ; 

const router = express.Router();

const ip_data_schema = require('../models/ip_data'); // fetch ip_data schema



router.put('/cert',async (req,res) => {
    // res.send('inside the cert route')
    // _id: '628d7add43d4e2110c8c5050'
    // in req there will be cert-go user,stage,id of object to be updated
    // to validate the entered data use save method. in updateOne method the validation is not there.
    const timestamp =  Date.now();
    data = await ip_data_schema.updateOne({"_id":req.body.id},{$set : {'add_req.apprv_req_cert_go.cert_go_user' : req.body.user,'add_req.apprv_req_cert_go.date' : timestamp,'stage':req.body.stage}})
    res.json(data);
})



//this is the way.
router.put('/csk', async (req,res) => {
    const timestamp = Date.now();
    data = await ip_data_schema.updateOne({"_id":req.body.id},{$set : {'add_req.apprv_req_csk.csk_user':req.body.user,'add_req.apprv_req_csk.date':timestamp,'stage':req.body.stage}})
    res.json(data);
})

router.put('/test',(req,res) => {
    res.send('put testing');
})



module.exports = router ;



// don't use this type of updation when there are multiple branch objects and you are updating
// one branch. This resets all other branch values of parent.
// router.put('/csk2',async (req,res) => {
//     const timestamp = Date.now();
//     data = await ip_data_schema.updateOne({"_id":req.body.id},{$set : {
//         add_req : {
//                 apprv_req_csk : {
//                                     csk_user : req.body.user,
//                                     date : timestamp,
//                                     },
//                     },
//         stage : req.body.stage
//         }})
//     res.json(data);

// })