import { createSlice } from "@reduxjs/toolkit";


const initialState: string[] = []

const customerSlice = createSlice({
    name: "customersActions",
    initialState,
    reducers: {
        addCustomer: (state, action) => {            
            state.push(action.payload);
            // return [...state, action.payload]; // This also work

            /* 
            When you use return, you're essentially telling Redux
             to replace the current state with the new one you provide. 
             This is how Redux knows that the state has changed and can 
             trigger re-renders in your components.
            */
        },
        
        removeCustomer: (state, action) => {
            state.splice(action.payload, 1);

            // return state.filter((_, i) => i !== action.payload); 
            // This also work

            // state = state.filter((_, i) => i !== action.payload); 
            // This will not work, 
            // In Redux, state is immutable, which means you
            // cannot directly reassign the state variable.

            
        },
    },
});

export const { addCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;