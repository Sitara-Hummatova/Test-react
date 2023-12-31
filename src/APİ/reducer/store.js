import React from 'react'
import getSlice from './reducer/getSlice'
import orderSlice from './reducer/getOrders'


export const store = configureStore (
    {
        reducer: {

            get: getSlice,
            order: orderSlice
        }
    }
)

