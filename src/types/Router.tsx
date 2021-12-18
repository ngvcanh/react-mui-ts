import { ReactNode } from "react";
import { ComponentType } from "react";

export interface IBadge{
  color: string;
  value: string;
  bgcolor: string;
}

export interface IRoute{
  path: string;
  element: ComponentType<any> | null;
  icon: ReactNode;
  iconText: string;
  name: string;
  badge: IBadge;
  children: IRoute[];
  isRoute: boolean;
}