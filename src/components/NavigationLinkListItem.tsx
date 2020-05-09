import styled from "styled-components";
import React from "react";
import { useNavigationState } from "react-slot-navigation";

const NavigationLinkListItemContainer = styled.a`
  color: var(--text);
  height: 42px;
  border: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 1px 16px;
  position: relative;
  background: var(--card-background);
  font-weight: 400;
  font-size: 18px;

  &:focus {
    outline: none;
  }

  &:focus:not([data-active="true"]) {
    text-decoration: underline;
  }

  &:not(:first-child):not([data-active="true"])::after {
    content: " ";
    width: calc(100% - 16px);
    height: 1px;
    background-color: var(--gray5);
    position: absolute;
    top: 0px;
  }

  &[data-active="true"] {
    background-color: var(--blue);
    color: var(--gray6);
    pointer-events: none;
  }

  &:first-child {
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }

  &:last-child {
    border-bottom-left-radius: 12px;
    border-bottom-right-radius: 12px;
  }
`;

// React.AnchorHTMLAttributes<HTMLAnchorElement> & {
//   to: string;
//   from?: string;
// }

const NavigationLinkListItem: React.FC<any> = ({ children, ...props }) => {
  const navigationState = useNavigationState();

  return (
    <NavigationLinkListItemContainer {...props}>
      {children}
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
    </NavigationLinkListItemContainer>
  );
};

export default NavigationLinkListItem;
