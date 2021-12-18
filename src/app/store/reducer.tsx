import { AnyAction, ReducersMapObject } from "@reduxjs/toolkit";
import { RootState } from "types/store";
import AppReducer from "features/app/slice";

const reducer: ReducersMapObject<RootState, AnyAction> = {
  app: AppReducer
};

export default reducer