import { IRoute } from "./Router";

export interface INavigation{
  sidebar: Partial<IRoute>[];
  auth: Partial<IRoute>[];
}

export interface IAppState{
  navigation: INavigation;
}