import * as React from "react";
import { useWindowWidth } from "../hooks/useWindowWidth";
import { NavigationStateContext, NavigationDispatchContext } from "../context";
import { navigationReducer } from "../reducer";
import {
  NavigationAction,
  NavigationState,
  PushAction,
} from "react-slot-navigation/types";

const fromUrlFragment = (fragment: string): [string, string[]] => {
  const parts = fragment.split("_");
  const slotArgs = parts.slice(0, -1);
  const componentName = parts.slice(-1)[0];
  return [componentName, slotArgs];
};

export const signatureForNavigationProvider = `React.FC<{
  startWith: string;
  allSlots: {
    [slotName: string]:
      React.ComponentType<{
        slotArgs?: string[]
      }>
  };
  suspenseFallback: 
    React.ComponentType;
  slotWidth: number;
  slotComponent: React.ComponentType<
    React.HTMLAttributes<HTMLElement>
  >;
}>`;

type SlotComponent =
  | React.ComponentType<
      React.HTMLAttributes<HTMLElement> & { slotArgs?: string[] }
    >
  | React.LazyExoticComponent<
      React.FC<
        React.HTMLAttributes<HTMLElement> & {
          slotArgs: string[];
        }
      >
    >;

type SlotComponentWithData = {
  component: SlotComponent;
  data: (slotArgs: string[]) => any;
};

export const NavigationProvider: React.FC<
  {
    startWith: string;
    allSlots: {
      [slotName: string]: SlotComponent | SlotComponentWithData;
    };
    suspenseFallback: React.ComponentType;
    notFoundFallback?: React.ComponentType;
    slotWidth: number;
    slotComponent: React.ComponentType<
      React.HTMLAttributes<HTMLElement> & {
        prefetchData?: (slotArgs: string[]) => any;
      }
    >;
  } & React.HTMLAttributes<HTMLElement>
> = React.memo(
  ({
    startWith: ComponentToStartWith,
    allSlots,
    suspenseFallback: FallbackComponent,
    notFoundFallback: NotFoundComponent,
    slotWidth: SLOT_WIDTH,
    slotComponent: Slot,
    ...props
  }) => {
    const stackSize = Math.max(Math.floor(useWindowWidth() / SLOT_WIDTH), 1);

    const [state, dispatch] = React.useReducer<
      (state: NavigationState, action: NavigationAction) => NavigationState
    >(navigationReducer, {
      stack:
        // TODO: instead start with empty state and dispatch push onlyIfThereIsRoom if on root
        window.location.pathname !== "/" &&
        window.location.pathname !== "/index.html"
          ? window.location.pathname
              .slice(1)
              .split("/")
              .filter((_) => _)
          : [],
      stackSize,
    });

    React.useLayoutEffect(() => {
      if (window.location.pathname === "/") {
        dispatch({
          type: "push",
          payload: {
            onlyIfThereIsRoom: true,
            to: ComponentToStartWith,
          },
        });
      }
    }, [ComponentToStartWith]);

    const stackOverflow = state.stack.length - stackSize;

    React.useLayoutEffect(() => {
      dispatch({
        type: "stackSizeChanged",
        payload: {
          newStackSize: stackSize,
        },
      });
    }, [stackSize]);

    React.useLayoutEffect(() => {
      const newStack: string[] = state.stack.slice(
        stackOverflow > 0 ? -stackOverflow : 0
      );
      let newUrl = "/" + newStack.join("/");

      if (newUrl === window.location.pathname) {
        return;
      }

      console.log("push stating", newUrl);

      // @ts-ignore
      if (typeof gtag !== "undefined") {
        // @ts-ignore
        gtag("event", "page_view", {
          page_path: newUrl,
        });
      }

      if (
        (state.lastNavigationAction as PushAction)?.payload.onlyIfThereIsRoom
      ) {
        window.history.replaceState(
          newStack,
          state.stack[state.stack.length - 1],
          newUrl
        );
      } else {
        window.history.pushState(
          newStack,
          state.stack[state.stack.length - 1],
          newUrl
        );
      }
    }, [stackOverflow, state]);

    React.useLayoutEffect(() => {
      window.onpopstate = function (event: any) {
        if (event.state) {
          dispatch({
            type: "pop",
            payload: event.state,
          });
        }
      };
    });

    React.useLayoutEffect(() => {
      if (stackOverflow > 0) {
        window.setTimeout(() => {
          dispatch({
            type: "overflowDetected",
          });
        }, 500);
      }
    });

    React.useLayoutEffect(() => {
      window.onpageshow = function (event: any) {
        if (event.persisted) {
          alert("persisted");
        }
      };
    });

    return (
      <div {...props}>
        <NavigationStateContext.Provider value={state}>
          <NavigationDispatchContext.Provider value={dispatch}>
            {state.stack.map((urlFragment, index) => {
              const [componentName, slotArgs] = fromUrlFragment(urlFragment);
              let Component: SlotComponent =
                (allSlots[componentName] as SlotComponentWithData)?.component ||
                (allSlots[componentName] as SlotComponent) ||
                NotFoundComponent ||
                (() => `Add "${componentName}" to "allSlots"`);
              let prefetchData;
              if (
                (allSlots[componentName] as SlotComponentWithData | undefined)
                  ?.data
              ) {
                prefetchData = () =>
                  (allSlots[componentName] as SlotComponentWithData).data(
                    slotArgs
                  );
              }

              return (
                <Slot
                  key={urlFragment}
                  style={{
                    transform: `translateX(${
                      SLOT_WIDTH * index -
                      (stackOverflow > 0 ? stackOverflow * SLOT_WIDTH : 0)
                    }px)`,
                    width: `${SLOT_WIDTH}px`,
                    zIndex: state.stack.length - index,
                  }}
                  prefetchData={prefetchData}
                >
                  <React.Suspense fallback={<FallbackComponent />}>
                    <Component slotArgs={slotArgs} />
                  </React.Suspense>
                </Slot>
              );
            })}
          </NavigationDispatchContext.Provider>
        </NavigationStateContext.Provider>
      </div>
    );
  }
);

NavigationProvider.defaultProps = {
  slotComponent: (props) => <div className="NavigationStackItem" {...props} />,
};
