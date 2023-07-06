import { createContext } from "react";

let now = new Date();
export const DateContext = createContext(now);

export const PeriodContext = createContext("Daily");
