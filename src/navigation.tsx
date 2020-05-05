import React from "react";
import {
  NavigationProvider,
  Link as NavigationLink,
  useNextAvailableSpaceFor as _useNextAvailableSpaceFor,
  useNavigationState,
  __websiteSlots as reactSlotNavigationWebsiteSlots,
} from "react-slot-navigation";

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
    // slotComponent={NavigationSlot}
  />
);

export const useNextAvailableSpaceFor = (
  Component: SlotName,
  options: {
    from: SlotName;
  }
): void => _useNextAvailableSpaceFor(Component, options);

export const NavigationLinkListItem: React.FC<LinkProps> = (props) => {
  const navigationState = useNavigationState();
  return (
    <NavigationLink
      className="NavigationLinkListItem"
      after={
        <svg
          height="12px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4.53657 8.69699"
          style={{
            marginLeft: "8px",
            transform:
              props.from &&
              navigationState.stack.indexOf(props.to) !== -1 &&
              navigationState.stack.indexOf(props.to) <
                navigationState.stack.indexOf(props.from)
                ? "rotate(180deg)"
                : undefined,
            color: "var(--gray3)",
          }}
        >
          <path
            d="
      M.18254,8.697a.18149.18149,0,0,1-.12886-.31034L4.09723,4.34126.05369.29954a.18149.18149,
      0,0,1,.2559-.2559L4.4838,4.21785a.18149.18149,0,0,1,0,.2559L.30958,8.648A.18149.18149,
      0,0,1,.18254,8.697Z
    "
            stroke="currentColor"
            strokeWidth="1px"
            strokeLinecap="round"
          ></path>
        </svg>
      }
      {...props}
    />
  );
};
