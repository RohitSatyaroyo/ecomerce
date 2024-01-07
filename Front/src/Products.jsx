import React from "react";
import axios from 'axios'
import './products.css'
function products({data,func}){
    let e='10px';
  if(data.count!=1){
        e='20px'
}
    async function cart(){
       
      
        try{
          const response=await axios.post('http://localhost:8080/product/cart',{name:data.name,category:data.category,price:data.price,image:data.image})
          const count=await axios.get('http://localhost:8080/product/getcart')
         
          func(count.data.length)
          

        }catch(e){
            console.log(e)
        }
        


       

    }

    return(
        <>
        <div className="pro" style={{display:'flex',flexDirection:'column',marginLeft:`${e}`}}>
         <img src={data.image} width='100%' height='300px'></img>   
        <b style={{marginLeft:'90px',paddingTop:'5px'}}>{data.name}</b>
         <b style={{marginLeft:'90px'}}>{data.price}</b>
         <b style={{marginLeft:'90px'}}>Category:{data.content}</b>
         <button className="b1" onClick={cart}>Add to Cart</button>
         <button className="b2">Buy Now</button>
        </div>
         
        </>
    )

}

export default products