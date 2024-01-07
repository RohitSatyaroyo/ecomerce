import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CartDisplay from './CartDisplay';
import './Cart.css'
import greentick from '../images/greentick.png'
export default function Cart() {
      
   const [cart,setcart]=useState([])
   let [count,setcount]=useState()
   let [price,setprice]=useState([])
   let to=0
   let [total,stotal]=useState(0)
   useEffect(()=>{

    async function getcart(){
        try{
            const response=await axios.get('http://localhost:8080/product/getcart')
            
             setcart(response.data)
              setcount(response.data.length)
              const price=cart.map((c)=>parseFloat(c.price.replace(' USD')))
              console.log(price)
              
              for(let x of price){
                to+=x

              }
              stotal(to.toFixed(2))
              console.log(total)

            
            
            
        }catch(e){
            console.log(e)
        }

    }
    getcart()
     
   
     
   })
   function calc(){

   }

  

  return (
    <>
        <div className='total' >
        <img src={greentick} width='18px' height='18px' style={{paddingLeft:'15px',paddingTop:'20px'}}></img>
        <b style={{fontSize:'14px',fontWeight:'700',color:'darkgreen',marginTop:'-18px',marginLeft:'37px',whiteSpace:'nowrap'}}> Your order is eligible for FREE Delivery. </b>
        <b style={{marginTop:'20px',marginLeft:'20px',fontSize:'25px',fontWeight:'500'}}>Subtotal ({count} items)$:<b>{total}</b></b><br/>
        <button style={{width:'258px',height:'29px',borderRadius:'8px',background:'#FFD814',borderColor:'#FCD200',marginLeft:'23px',marginTop:'15px'}}>Proceed to Buy</button>
      </div>
   
    <div style={{display:'flex',flexDirection:'column'}}>
        {cart.map((c)=><CartDisplay data={c} func={calc} ></CartDisplay>)}
    </div>

    
    </>
  )
}
