'use client'
import { configureStore } from '@reduxjs/toolkit'
import basketReducer from '@/app/basketSlice'

//global store setup
export const store =  configureStore({
  reducer: {
     basket: basketReducer,
  },
})