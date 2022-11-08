import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    locale: "en",
    loading: true,

    supportedLang: {
        en: "English",
        ar: "العربية",
    },

    translations: {},
}

export const setLangAsync = createAsyncThunk(
    "i18n/setLangAsync",
    async (locale, { getState, dispatch }) => {
        const resolvedLang = locale || getState().i18n.locale;
        const { data } = await axios.get("/lang/" + resolvedLang + ".json");
        await axios.post('/setLanguage', {
            userId: getState().user.userData.id,
            locale: resolvedLang
        });
        dispatch(i18nSlice.actions.setLanguage(resolvedLang));
        return data;
    },
);

export const i18nSlice = createSlice({
    name: "i18n",
    initialState,
    reducers: {
        setLanguage: (state, action) => {
            state.locale = action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(setLangAsync.pending, (state) => {
                state.loading = true;
            })
            .addCase(setLangAsync.fulfilled, (state, action) => {
                state.translations = action.payload;
                state.loading = false;
            })
    },

});



export const selectTranslations = (state) =>
  state.i18n.translations;
export default i18nSlice.reducer;

export const { setLanguage } = i18nSlice.actions;