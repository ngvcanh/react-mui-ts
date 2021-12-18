import { RootState } from "types/store";

export const getAuthRoutes = (state: RootState) => state.app.navigation.auth;

export const getSidebarRoutes = (state: RootState) => state.app.navigation.sidebar;