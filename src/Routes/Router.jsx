import React from 'react'
import Home from '../Components/Home'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
     <Route element={<Home/>} path="/"/>
     <Route element={<Basket/>} path="/basket"/>
     <Route element={<Login/>} path="/login"/>
     <Route element={<Product/>} path="/product"/>

    </Routes>
     

    

    </BrowserRouter>
  )
}

export default Router