import React from "react";
import {
  NavigationProvider,
  Link as NavigationLink,
  useNextAvailableSpaceFor as _useNextAvailableSpaceFor,
  useNavigationState,
} from "react-slot-navigation";
import "./navigation.css";

const allSlots = {
  Herman: React.lazy(() => import("./slots/Herman")),

  //   ReactSlotNavigation: React.lazy(() =>
  //     import("./slots/Projects/ReactSlotNavigation")
  //   ),
};

type AllPages = typeof allSlots;
export type PageName = keyof AllPages;
type LinkProps = {
  to: PageName;
  from: PageName;
  renderIfActive?: boolean;
};

export const Root = () => (
  <NavigationProvider
    startWith={"ReactSlotNavigation"}
    allSlots={allSlots}
    suspenseFallback={() => <div>Loading</div>}
    slotWidth={Math.min(400, window.innerWidth - 24)}
  />
);

export const useNextAvailableSpaceFor = (
  Component: PageName,
  options: {
    from: PageName;
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
