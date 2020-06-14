import React, { useState, useEffect } from "react";
import {
  NavigationProvider,
  Link,
  useNextAvailableSpaceFor as _useNextAvailableSpaceFor,
  __websiteSlots as reactSlotNavigationWebsiteSlots,
} from "react-slot-navigation";
import NavigationLinkListItemStyledComponent from "./components/NavigationLinkListItem";
import NavigationSlot from "components/NavigationSlot";
import Loading from "components/Loading";

const allSlots = {
  Herman: React.lazy(() => import("./slots/Herman")),
  Links: React.lazy(() => import("./slots/Links")),
  Counter: React.lazy(() => import("./slots/Counter/Counter")),
  CounterDashboard: React.lazy(() =>
    import("./slots/Counter/CounterDashboard")
  ),
  PrivacyPolicy: React.lazy(() => import("./slots/Legal/PrivacyPolicy")),
  TermsOfService: React.lazy(() => import("./slots/Legal/TermsOfService")),

  ...reactSlotNavigationWebsiteSlots,
};

export type SlotName = keyof typeof allSlots;
type LinkProps = {
  to: SlotName;
  from: SlotName;
  renderIfActive?: boolean;
};

const getSlotWidth = () =>
  document.documentElement.clientWidth > 600 &&
  document.documentElement.clientWidth < 1000
    ? document.documentElement.clientWidth - 24
    : Math.min(420, document.documentElement.clientWidth - 24);

export const Root = () => {
  const [slotWidth, setSlotWidth] = useState(getSlotWidth());

  useEffect(() => {
    const handler = () => {
      setSlotWidth(getSlotWidth());
    };
    window.addEventListener("resize", handler);

    return () => window.removeEventListener("resize", handler);
  });

  return (
    <NavigationProvider
      startWith={"Herman"}
      allSlots={allSlots}
      suspenseFallback={Loading}
      slotWidth={slotWidth}
      slotComponent={NavigationSlot}
    />
  );
};
export const useNextAvailableSpaceFor = (
  Component: SlotName,
  options: {
    from: SlotName;
  }
): void => _useNextAvailableSpaceFor(Component, options);

export const NavigationLinkListItem: React.FC<LinkProps> = (props) => {
  return <Link as={NavigationLinkListItemStyledComponent} {...props} />;
};
