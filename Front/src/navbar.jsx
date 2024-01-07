import React, { useEffect, useState } from 'react'
import './navbar.css'
import royologo from '../images/logo.png'
import locationlogo from '../images/location.png'
import search from '../images/search.png'
import cartstore from '../images/cart.png' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import products from './Products'
export default function navbar({data,func}) {
   const nav=useNavigate()
  
   const[count,setcount]=useState(data)
   const[name,setname]=useState()
   console.log(data)
     
   useEffect(()=>{
   async function carts(){
         
      const response=await axios.get('http://localhost:8080/product/getcart')
    
      console.log(response.data.length)
      setcount(response.data.length)

    }
    carts()

   },[data])
   
   
   
   
   function go(){
        nav('/cart')
        
     }
     function handlechange(e){
      func(e.target.value)
     
       
     }

  return (
    <>
    <div className='navbar'>
      <div className='logo' onClick={()=>nav('/')}>
      <img src={royologo} height='50px' width='100%'></img>
      </div>
      <div className='location'>
        <b >Delievering to Chennai</b>
        
        <div className='l2'>
       
         
        <b>Update Location</b>

        </div>
        <div className='location_logo'>
          <img src={locationlogo} height='26px'></img>
        </div>
        
     
      </div>
      <div className='search'>
        <input type='text' placeholder='Search Royofist.in' style={{width:'1100px',height:'40px',borderRadius:'5px',paddingLeft:'20px',fontSize:'15px',fontWeight:'600'}} value={name} onChange={(e)=>handlechange(e)}></input>
        <div className='sb'>
          <img src={search} height='23px' style={{paddingLeft:'8px',paddingTop:'7px'}}></img>
        </div>
      </div>
      <div className='sign'>
        <b >Hello,Sign In</b>
      </div>
      <div className='orders'>
        <b >Your Orders</b>
      </div>
      <div className='cart'>
        <img src={cartstore} height='50px' onClick={go}></img>
        <div className='cartcount'><b style={{color:'red',fontSize:'28px'}}>{count}</b></div>
        <p style={{marginLeft:'50px',fontSize:'20px',marginTop:'2px',fontWeight:'500'}} onClick={go} >Cart</p>
        

      </div>
     

    </div>
   
    </>
  )
}
