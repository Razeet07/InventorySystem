import { createSlice } from "@reduxjs/toolkit";
 
export const initialState = {
    token:'',
    fullName:'Ram',
    phoneNumber:'',
    email: '',

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
                userDetails
            }
    //code here
        },
    },
 })
 
export const { setUserDetails } = usersSlice.actions;
export default usersSlice.reducer;