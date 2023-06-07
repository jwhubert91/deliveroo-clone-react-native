import { configureStore } from "@reduxjs/toolkit"
import basketReducer from "./slices/baseketSlice"

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
})
