import createPersistedState from "use-persisted-state";

export const useCountRecords = createPersistedState("PushUps");
export type CountRecord = {
  timestamp: number;
  count: number;
};
