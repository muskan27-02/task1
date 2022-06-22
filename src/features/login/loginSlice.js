import {createSlice} from '@reduxjs/toolkit'

export const loginSlice = createSlice({
    name : 'login',
    initialState : {
        isAuthorized : false
    },
    reducers : {
        login: state =>{
            state.isAuthorized= true
        },
        logout: state => {
            state.isAuthorized= false
        }
    } 
})

export const { login, logout }= loginSlice.actions
export default loginSlice.reducer