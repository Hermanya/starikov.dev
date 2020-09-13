import * as React from "react";
import { useNavigationDispatch, useNavigationState } from "../context";
import { toUrlFragment } from "react-slot-navigation/components/Link";

export const signatureForuseNextSlotFor = `(component: string, {
  from: NextToComponent
}: { 
  from: string
}) => void`;

export const useNextSlotFor = (
  component: string,
  {
    toArgs,
    from: NextToComponent,
    fromArgs,
  }: { toArgs?: string[]; from: string; fromArgs?: string[] }
) => {
  const dispatchNavigation = useNavigationDispatch();
  const navigationState = useNavigationState();

  React.useEffect(() => {
    if (
      navigationState.stack[navigationState.stack.length - 1] ===
      toUrlFragment(NextToComponent, fromArgs)
    ) {
      dispatchNavigation({
        type: "push",
        payload: {
          to: toUrlFragment(component, toArgs),
          from: toUrlFragment(NextToComponent, fromArgs),
          onlyIfThereIsRoom: true,
        },
      });
    }
  }, [
    NextToComponent,
    component,
    dispatchNavigation,
    fromArgs,
    navigationState.stack,
    toArgs,
  ]);
};
