import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { getFakeUsers } from '../app/mockDB'





 export const asyncGetUsers=createAsyncThunk('users/fetchAsync',
async (payload,thunkAPI)=>{

    const response=await getFakeUsers
    .then(response=>response)
    

    return response
}
) 

export const UsersSlice=createSlice({
    name:'users',
    initialState:{users:[],
        filterString:'',
        selectedUserID:'',
        isLoading:false,
        rejected:false
    },
    reducers:{
        getAllUsers:(state,action)=>
        {
            return state
        },
        updateFilterString:(state,action)=>
        {
            state.filterString=action.payload
        },
        toggleActive:(state,action)=>
        {
            state.users.forEach(item=>item.id===action.payload.id?item.active=action.payload.value:"")
        },
        toggleAdmin:(state,action)=>
        {
            state.users.forEach(item=>item.id===action.payload.id?item.admin=action.payload.value:"")
        },
        selectUser:(state,action)=>
        {
            state.selectedUserID=action.payload
        }
     
    },
    extraReducers:{
        [asyncGetUsers.pending]:(state,action)=>
        {
            state.isLoading=true
        },
        [asyncGetUsers.fulfilled]:(state,action)=>
        {
            state.isLoading=false

            state.users=action.payload
            
        },
        [asyncGetUsers.rejected]:(state,action)=>
        {
            state.rejected=true
            state.isLoading=true
        }
    }
})





export const {getAllUsers,updateFilterString,toggleActive,toggleAdmin,selectUser}=UsersSlice.actions







