const cartmodel=require('../Models/CartModel')

const createcart=async(req,res)=>{

       const data=await cartmodel.create(req.body)
       res.json(data)
       console.log(data)

}

const getcart=async(req,res)=>{

    const data=await cartmodel.find()
    res.json(data)
}


module.exports={createcart,getcart}