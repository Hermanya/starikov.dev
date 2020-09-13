import * as React from "react";
import { NavigationState, NavigationAction } from "./types";

export const NavigationStateContext = React.createContext<NavigationState>({
  stack: [],
  stackSize: 0,
});
export const NavigationDispatchContext = React.createContext<
  (action: NavigationAction) => void
>(() => {});

export const useNavigationStateSignature = `() => NavigationState`;
export function useNavigationState() {
  const context = React.useContext(NavigationStateContext);
  if (context === undefined) {
    throw new Error(
      "useNavigationState must be used within a NavigationProvider"
    );
  }
  return context;
}
export function useNavigationDispatch() {
  const context = React.useContext(NavigationDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useNavigationDispatch must be used within a NavigationProvider"
    );
  }
  return context;
}
