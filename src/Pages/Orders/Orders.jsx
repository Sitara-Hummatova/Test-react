import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { ordersThunk } from '../../APİ/reducer/getOrders';


const Orders = () => {

 const orderData=useSelector((state) => state.order.orders)


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(ordersThunk())
  }, [] )




  return (
    <div>

    </div>
  )
}

export default Orders