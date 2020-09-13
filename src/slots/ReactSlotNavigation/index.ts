import React from "react";

export const slots = {
  useNextSlotFor: React.lazy(() => import("./api/useNextSlotFor")),
  useNavigationState: React.lazy(() => import("./api/UseNavigationStateSlot")),
  Link: React.lazy(() => import("./api/LinkSlot")),
  NavigationProvider: React.lazy(() => import("./api/NavigationProviderSlot")),
  About: React.lazy(() => import("./About")),
  Exports: React.lazy(() => import("./Exports")),
  Installation: React.lazy(() => import("./Installation")),
  ReactSlotNavigation: React.lazy(() => import("./ReactSlotNavigation")),
  DynamicSlot: React.lazy(() => import("./DynamicSlot")),
};
