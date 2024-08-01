import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    counter : 0
}
const saveCounter = JSON.parse(localStorage.getItem("counter"));
if(saveCounter){
    initialState.counter = saveCounter;
}
const CounterSlice = createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state) =>{
            state.counter = state.counter + 1;
            localStorage.setItem("counter", JSON.stringify(state.counter))
        }, 
        reset : (state, action) =>{
            state.counter = state.counter = action.payload;
            localStorage.setItem("counter", JSON.stringify(state.counter))
        },
        decrement:(state) =>{
            state.counter = state.counter - 1;
            localStorage.setItem("counter", JSON.stringify(state.counter))

        }, 
        dyninc : (state, action) =>{
            state.counter = state.counter + action.payload;
            localStorage.setItem("counter", JSON.stringify(state.counter));
        }
    }
})

export const {increment, reset, decrement, dyninc} = CounterSlice.actions;
export default CounterSlice.reducer;