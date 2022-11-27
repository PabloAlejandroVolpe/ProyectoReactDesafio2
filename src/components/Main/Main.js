import React from 'react'
import ItemListContainer from '../ItemListContainer/ItemListContainer'
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer'
import { Route, Routes } from "react-router-dom"
import "./Main.css"
import CartOverview from '../CartOverview/CartOverview'
import Checkout from '../Checkout/Checkout'
import OrderConfirmation from '../OrderConfirmation/OrderConfirmation'

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/products' element={<ItemListContainer />} />
        <Route path='/categories/:catId' element={<ItemListContainer />} />
        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<CartOverview />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/order-confirmation' element={<OrderConfirmation />} />
      </Routes>
    </main>
  )
}

export default Main