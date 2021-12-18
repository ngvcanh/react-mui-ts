import { IAppState } from "types/app";
import AuthRoutes from "app/navigations/auth";
import SidebarRoutes from "app/navigations/sidebar";
import { createSlice } from "@reduxjs/toolkit";

const initialState: IAppState = {
  navigation: {
    auth: AuthRoutes,
    sidebar: SidebarRoutes
  }
}

const AppSlice = createSlice({
  name: '@@app',
  initialState,
  reducers: {}
});

const AppReducer = AppSlice.reducer;
export default AppReducer;