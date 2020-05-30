import React from "react";
import {
  NavigationProvider,
  Link,
  useNextAvailableSpaceFor as _useNextAvailableSpaceFor,
  __websiteSlots as reactSlotNavigationWebsiteSlots,
} from "react-slot-navigation";
import NavigationLinkListItemStyledComponent from "./components/NavigationLinkListItem";
import NavigationSlot from "components/NavigationSlot";

const allSlots = {
  Herman: React.lazy(() => import("./slots/Herman")),
  Links: React.lazy(() => import("./slots/Links")),
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

export const Root = () => (
  <NavigationProvider
    startWith={"Herman"}
    allSlots={allSlots}
    suspenseFallback={() => <div>Loading</div>}
    slotWidth={Math.min(400, window.innerWidth - 24)}
    slotComponent={NavigationSlot}
  />
);

export const useNextAvailableSpaceFor = (
  Component: SlotName,
  options: {
    from: SlotName;
  }
): void => _useNextAvailableSpaceFor(Component, options);

export const NavigationLinkListItem: React.FC<LinkProps> = (props) => {
  return <Link as={NavigationLinkListItemStyledComponent} {...props} />;
};
