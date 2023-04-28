import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
        addUser(state,action){
            console.log(action.payload);
            state.push(action.payload);
        },
        removeUser(state,action){
            state.splice(action.payload,1);
        },
        deleteUsers(state,action){
            return [];
        }
    },
});

export default  UserSlice.reducer;
export const {addUser,removeUser,deleteUsers} = UserSlice.actions;