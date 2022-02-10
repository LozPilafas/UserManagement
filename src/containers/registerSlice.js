import { createSlice } from "@reduxjs/toolkit";



export const registerSlice=createSlice({
    name:'register',
    initialState:{
        password1:'',
        password2:'',
        errors:[]
    },
    reducers:{
        updatePassword1:(state,action)=>
        {
            state.password1=action.payload

        },

        updatePassword2:(state,action)=>
        {
            state.password2=action.payload
            
        },
        resetState:(state,action)=>
        {
            state.password2=""
            state.password1=""
            

        }

    }
})


export const {updatePassword1,updatePassword2,resetState} = registerSlice.actions