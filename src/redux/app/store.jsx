import { configureStore } from "@reduxjs/toolkit";
import userReducer from '../feature/userSlice';
import localReducer from '../feature/i18nSlice';


const store = configureStore({
    reducer: {
        user: userReducer,
        i18n: localReducer,
        devTools: true
    }
})

export default store;