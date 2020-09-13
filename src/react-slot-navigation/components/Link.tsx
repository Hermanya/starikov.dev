import React from "react";
import { useNavigationState, useNavigationDispatch } from "../context";

export const signatureForLink = `React.FC<
  {
    as?: React.ComponentType<
      React.AnchorHTMLAttributes<
        HTMLAnchorElement
      >
    >;
    to: string;
    toArgs?: string[];
    from?: string;
    fromArgs?: string[];
    after?: React.ReactNode;
    renderIfActive?: boolean;
  } & React.AnchorHTMLAttributes<
    HTMLAnchorElement
  >
>`;

export type LinkProps = {
  as?: React.ComponentType<React.AnchorHTMLAttributes<HTMLAnchorElement>>;
  to: string;
  toArgs?: string[];
  from: string;
  fromArgs?: string[];
  after?: React.ReactNode;
  renderIfActive?: boolean;
  onTransition?: () => () => void;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export const toUrlFragment = (component: string, args?: string[]) =>
  args ? [...args, component].join("_") : component;

export const Link: React.FC<LinkProps> = ({
  as: Component = "a",
  children,
  to,
  toArgs = [],
  from,
  fromArgs = [],
  after,
  renderIfActive,
  onTransition = (f: () => void) => f(),
  ...props
}) => {
  const navigationState = useNavigationState();
  const dispatchNavigation = useNavigationDispatch();
  const isActive = navigationState.stack.includes(toUrlFragment(to, toArgs));
  if (!renderIfActive && isActive) {
    return null;
  }
  return (
    <Component
      data-active={isActive}
      tabIndex={isActive ? -1 : undefined}
      onClick={(event) => {
        event.preventDefault();
        onTransition(() => {
          dispatchNavigation({
            type: "push",
            payload: {
              to: toUrlFragment(to, toArgs),
              from: toUrlFragment(from, fromArgs),
            },
          });
        });
      }}
      href={toUrlFragment(to, toArgs)}
      {...props}
    >
      {children}
      {after}
    </Component>
  );
};
