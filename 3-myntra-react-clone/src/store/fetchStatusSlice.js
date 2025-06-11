import {createSlice} from "@reduxjs/toolkit";

const itemsSlice= createSlice({
    name:'fetchStatus',
    initialState:{
        fetchDone:false,  //if my fetching is done //Pending(false) and 'Done' (true)
        currentlyFetching:false,  //if server is called or not so that we can call loader //dometimes trueor sometimes false
    },
    reducers:{
        markFetchDone:(state)=>{
            return state.fetchDone=true;
        },
        markFetchingStarted:(state)=>{
           return state.currentlyFetching=true;
        },
        markFetchingFinished:(state)=>{
            return state.currentlyFetching=false;
        }
    }
});

export const fetchStatusActions = fetchStatusSlice.actions; //named export

export default fetchStatusSlice;    //default export

