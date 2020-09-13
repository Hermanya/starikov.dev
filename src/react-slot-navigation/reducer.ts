import { NavigationState, NavigationAction } from "./types";

export const navigationReducer = (
  state: NavigationState,
  action: NavigationAction
) => {
  switch (action.type) {
    case "push": {
      const {
        to: toComponent,
        from: fromComponent,
        onlyIfThereIsRoom,
      } = action.payload;
      if (!onlyIfThereIsRoom || state.stack.length < state.stackSize) {
        return {
          ...state,
          lastNavigationAction: action,
          stack: fromComponent
            ? [
                ...state.stack.slice(0, state.stack.indexOf(fromComponent) + 1),
                toComponent,
              ]
            : // .slice(-state.stackSize)
              [toComponent],
        };
      }
      return state;
    }
    case "stackSizeChanged": {
      const { newStackSize } = action.payload;
      return {
        ...state,
        stackSize: newStackSize,
        // stack: state.stack.slice(-newStackSize),
      };
    }
    case "overflowDetected": {
      return {
        ...state,
        stack: state.stack.slice(-state.stackSize),
      };
    }
    case "pop": {
      const newStack = action.payload;
      console.log(newStack);
      return {
        ...state,
        stack: newStack,
        lastNavigationAction: action,
      };
    }
    default: {
      throw new Error(`Unhandled action type`);
    }
  }
};
