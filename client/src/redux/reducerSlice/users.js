import { createSlice } from "@reduxjs/toolkit";
 
export const initialState = {
    token:'',
    fullName:'Ram',
    userDetails:{},
    isLoggedIn:false

};
 
const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUserDetails(state, actions) {
        debugger;
        const {token, userDetails} = actions.payload
            return{
                ...state,
                token,
                userDetails,
                isLoggedIn:true

            }
    //code here
        },
    },
 })
 
export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;