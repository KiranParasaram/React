import React from 'react'

import { BrowserRouter as Router , Routes , Route , Navigate , Link } from 'react-router-dom'

import About from './Routing/About'
import Contact from './Routing/Contact'
import Detailspage from './Routing/Detailspage'
import Footer from './Routing/Footer'
import Header from './Routing/Header'
import Home from './Routing/Home'
import Laptoplist from './Routing/Laptoplist'
import Mobilelist from './Routing/Mobilelist'
import Pagenotfound from './Routing/Pagenotfound'
import Product from './Routing/Product'
import ProductDescript from './Routing/ProductDescript'
import './Routing/style.css'

const App = () => {
  return (

    <Router>
          <Header/>  //header and footer are common to every page so we are coding them inside router only
         <Routes>

           <Route path='/'  element={ <Navigate to ='/home'/> }/>
           <Route path='/Home' element={ <Home/> }/>   
           <Route path='/about' element={ <About/> }/>
           <Route path='/Contact' element={ <Contact/> }/>
           <Route path='/*'  element={ <Pagenotfound/> }/>

     //***Nested Routing ****/

           <Route path='/' element={ <Home/> }/>


             <Route path='/products' element={ <Product/> }>

               <Route path='mobile' element={ <Mobilelist/> }>
                  <Route path=':mymobileitem' element={ <ProductDescript/> }/>  //***so we are giving like this //instead mobileitem we can write anything***
               </Route>

             <Route path='laptop' element={ <Laptoplist/> }/>
                     
           </Route>
           <Route path='/details' element={ <Detailspage/> }/>        

         </Routes>
          <Footer/> 
    </Router>
    
  )
}

export default App

//whenever we type /home in url then home component will come in DOM 


{/* <div>
<Header/>
<Home/>
<About/>
<Contact/>
<Footer/>
</div> */}

 {/* <Route path='/products' element={ <Product/> }/>   //******instead of getting products and mobile/laptops siblings ,we are making products as parent to mobili/laptop*******
           
           <Route path='/products/mobile' element={ <Mobilelist/> }/>
           <Route path='/products/laptop' element={ <Laptoplist/> }/> */}

   {/* <Route path='apple' element={ <ProductDescript/> }/>  //giving this kind of child to line: 38 is bad approach
                  <Route path='mi' element={ <ProductDescript/> }/>
                  <Route path='samsung' element={ <ProductDescript/> }/> */}