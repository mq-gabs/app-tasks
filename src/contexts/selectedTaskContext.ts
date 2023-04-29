import React, { createContext, ReactComponentElement, ReactHTMLElement, ReactNode, useState } from "react";

type TAppContext = {
  selectedTaskID: number;
  setSelectedTaskID: Function;
}

export const AppContext = createContext<TAppContext>({} as TAppContext);