const express=require('express')
const controller=require('../Controller/Controller')
const router=express.Router()

router.post('/cart',controller.createcart)
router.get('/getcart',controller.getcart)


module.exports=router