import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    userData: {},
    token: "",
    loading: false,
    isAuthorized: false,
    notifyToken: ""
};

export const getUserData = createAsyncThunk('user/getUserData', async () => {
    const { data: { data } } = await axios.get('/checkAuth');
    return data;
});

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        sign: (state, action) => {
            state.userData = action.payload;
            state.isAuthorized = true;
        },
        logout: (state) => {
            state.userData = {};
            state.token = "";
            state.loading = false;
            state.isAuthorized = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserData.pending, (state) => {
                state.loading = true;
            })
            .addCase(getUserData.fulfilled, (state, action) => {
                state.loading = false;
                state.isAuthorized = true;
                state.userData = action.payload;
            })
            .addCase(getUserData.rejected, (state) => {
                state.loading = false;
                state.isAuthorized = false;
            });
    },

});
export const { sign, logout } = userSlice.actions;
export default userSlice.reducer;
export const selectUser = (state) => state.user.value;