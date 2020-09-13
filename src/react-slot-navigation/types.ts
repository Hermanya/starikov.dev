export type PushAction = {
  type: "push";
  payload: {
    to: string;
    from?: string;
    onlyIfThereIsRoom?: boolean;
  };
};

export type PopAction = {
  type: "pop";
  payload: string[];
};

export type NavigationAction =
  | PushAction
  | {
      type: "stackSizeChanged";
      payload: {
        newStackSize: number;
      };
    }
  | PopAction
  | {
      type: "overflowDetected";
    };

export type NavigationState = {
  stack: string[];
  stackSize: number;
  lastNavigationAction?: PushAction | PopAction;
};
