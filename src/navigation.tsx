import React, { useState, useLayoutEffect } from "react";
import {
  NavigationProvider,
  Link,
  useNextSlotFor as _useNextSlotFor,
  __websiteSlots as reactSlotNavigationWebsiteSlots,
} from "react-slot-navigation";
import NavigationLinkListItemStyledComponent from "./components/NavigationLinkListItem";
import NavigationSlot from "components/NavigationSlot";
import Loading from "components/Loading";
import { fetchUserData } from "api/amplify";

const allSlots = {
  Login: React.lazy(() => import("./slots/Login")),
  Profile: {
    component: React.lazy(() => import("./slots/Profile")),
    data: ([username]: string[]) => fetchUserData(username, `PersonalInfo`),
  },
  Links: React.lazy(() => import("./slots/Links")),
  Notes: {
    component: React.lazy(() => import("./slots/Notes")),
    data: ([username]: string[]) => fetchUserData(username, `Notes`),
  },
  Counter: React.lazy(() => import("./slots/Counter/Counter")),
  Counters: {
    component: React.lazy(() => import("./slots/Counter/Counters")),
    data: ([username]: string[]) => fetchUserData(username, `Counters`),
  },
  CounterDashboard: {
    component: React.lazy(() => import("./slots/Counter/CounterDashboard")),
    data: ([username, countee]: string[]) => fetchUserData(username, countee),
  },
  PrivacyPolicy: React.lazy(() => import("./slots/Legal/PrivacyPolicy")),
  TermsOfService: React.lazy(() => import("./slots/Legal/TermsOfService")),

  ...reactSlotNavigationWebsiteSlots,
};

export type SlotName = keyof typeof allSlots;
type LinkProps = {
  to: SlotName;
  toArgs?: string[];
  from: SlotName;
  fromArgs?: string[];
  renderIfActive?: boolean;
};

export const getSlotWidth = () =>
  document.documentElement.clientWidth > 600 &&
  document.documentElement.clientWidth < 1000
    ? document.documentElement.clientWidth - 24
    : Math.min(420, document.documentElement.clientWidth - 24);

export const Root = () => {
  const [slotWidth, setSlotWidth] = useState(getSlotWidth());

  useLayoutEffect(() => {
    const handler = () => {
      setSlotWidth(getSlotWidth());
    };
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  });

  return (
    <NavigationProvider
      startWith={"Herman_Profile"}
      allSlots={allSlots}
      suspenseFallback={Loading}
      slotWidth={slotWidth}
      slotComponent={NavigationSlot}
    />
  );
};
export const useNextSlotFor = (
  Component: SlotName,
  options: {
    toArgs?: string[];
    from: SlotName;
    fromArgs?: string[];
  }
): void => _useNextSlotFor(Component, options);

export const NavigationLinkListItem: React.FC<LinkProps> = (props) => {
  return <Link as={NavigationLinkListItemStyledComponent} {...props} />;
};
