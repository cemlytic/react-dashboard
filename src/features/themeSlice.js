import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("theme") || "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      localStorage.setItem("theme", state.mode);
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.mode;

export default themeSlice.reducer;
