import {configureStore} from '@reduxjs/toolkit'
import Reducer from './CartSlice'
const store = configureStore({
    reducer: {
        userLog : Reducer
    }
})

export default store