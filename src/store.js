import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./features/themeSlice";
import sidebarReducer from "./features/sidebarSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    sidebar: sidebarReducer,
  },
});
