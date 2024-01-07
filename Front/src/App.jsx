import { useState } from 'react'
import Products from './Products'
import Cart from './Cart'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import royologo from '../images/logo.png'
import locationlogo from '../images/location.png'
import search from '../images/search.png'
import './App.css'
import cartstore from '../images/cart.png' 
import Navbar from './navbar'
import Sample from './sample'
function App() {

   
  const[count,setcount]=useState()

  const products=[
    {
      name:'Hervomatin',
      category:'Oil',
      price:'5.66 USD',
      image:'https://images.pexels.com/photos/672051/pexels-photo-672051.jpeg?auto=compress&cs=tinysrgb&w=600',
      count:1
    },
    {
      name:'Canon-Dslr',
      category:'Camera',
      price:'500.66 USD',
      image:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600',
      count:2
    },
    {
      name:'LipStick-Pink',
      category:'Cosmetics',
      price:'120.26 USD',
      image:'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
      count:3
    },
    {
      name:'Jumper-Sneakers',
      category:'Shoe',
      price:'260.16 USD',
      image:'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHN8ZW58MHx8MHx8fDA%3D',
      count:3
    },
    {
      name:'Dove-FaceWash',
      category:'Cosmetics',
      price:'12.66 USD',
      image:'https://images.unsplash.com/photo-1625772452859-1c03d5bf1137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
    {
      name:'WhiteBand-Watch',
      category:'Watch',
      price:'26.66 USD',
      image:'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
    {
      name:'Grey-RunningShoe',
      category:'Shoe',
      price:'300.62 USD',
      image:'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
    {
      name:'Apple-Watch',
      category:'Watch',
      price:'1000.16 USD',
      image:'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
    {
      name:'CalvinKlein-Perfume',
      category:'Perfumes',
      price:'370.66 USD',
      image:'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
    {
      name:'Martin-Perfumes',
      category:'Perfumes',
      price:'400.66 USD',
      image:'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
    {
      name:'DSLR-Lens',
      category:'Camera',
      price:'350.66 USD',
      image:'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
    {
      name:'Red Athletic-Shoe',
      category:'Shoe',
      price:'0.66 USD',
      image:'https://images.unsplash.com/photo-1609250291996-fdebe6020a8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTV8fHByb2R1Y3RzfGVufDB8fDB8fHww',
      count:3
    },
  ]

  const [row1,sr1]=useState(products.slice(0,6))
  const [row2,sr2]=useState(products.slice(6,12))

   function getcount(e){
       setcount(e)
     
   }
   function getname(e){
       
   
   
     
      if(e!==''){
       
        console.log(e+2)
    
   
        sr1(products.slice(0,6).filter((p)=>p.name.toLowerCase().startsWith(e)))
        sr2(products.slice(6,12).filter((p)=>p.name.toLowerCase().startsWith(e)))

      }
      else{
        sr1(products.slice(0,6))
        sr2(products.slice(6,12))

      }

      

   }

  return (
    <>
    
    
   
    <BrowserRouter>
    <Navbar data={count} func={getname}/>
    <Routes>
      <Route path='/' element={<>
        <div className='s' style={{display:'flex',flexDirection:'row'}}>
    {row1.map((p)=><Products data={p} func={getcount}/>)}
    </div>
    <div className='s' style={{display:'flex',flexDirection:'row'}}>
    {row2.map((p)=><Products data={p} func={getcount}/>)}
    </div></>}></Route>
      <Route path='/cart' element={<Cart />}></Route>
    </Routes>
    </BrowserRouter>
   
   
 
     
    </>
  )
}

export default App
