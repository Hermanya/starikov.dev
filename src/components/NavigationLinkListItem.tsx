import styled from "styled-components";

const NavigationLinkListItem = styled.a`
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

export default NavigationLinkListItem;
