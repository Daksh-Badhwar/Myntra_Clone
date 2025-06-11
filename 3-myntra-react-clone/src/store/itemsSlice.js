import {createSlice} from "@reduxjs/toolkit";

const itemsSlice= createSlice({
    name:'items',
    initialState:[],    //data folder deleted,fetching from server
    reducers:{
        addInitialItems:(state,action)=>{
           //console.log("reducer",state,action); 
            return action.payload;
        }
    }
});

export const itemsActions =itemsSlice.actions; //named export

export default itemsSlice;    //default export

