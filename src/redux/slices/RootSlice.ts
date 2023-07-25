import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: "Name",
        brand: "Brand",
        age: "Age",
        price: "Price",
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseBrand: (state, action) => { state.brand = action.payload},
        chooseAge: (state, action) => { state.age = action.payload},
        choosePrice: (state, action) => { state.price = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseName, chooseBrand, chooseAge, choosePrice } = rootSlice.actions