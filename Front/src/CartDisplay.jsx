import React from 'react'
import './CartDisplay.css'
import axios from 'axios'
export default function CartDisplay({data,func}) {





  return (
    <>
    <div className='pros' style={{display:'flex',flexDirection:'column'}}>
        <img src={data.image} width='100%' height='300px' ></img>   
        <b style={{marginLeft:'90px',paddingTop:'5px'}}>{data.name}</b>
         <b style={{marginLeft:'90px'}}>{data.price}</b>
         <b style={{marginLeft:'90px'}}>Category:{data.category}</b>
       
         <select style={{width:'50px',marginLeft:'100px',marginTop:'5px'}} >
          
          <option >1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
         </select>
         <b style={{marginLeft:'200px',marginTop:'-20px',color:'blue'}}>Delete</b>
  
    </div>
   
    
    </>
  )
}
