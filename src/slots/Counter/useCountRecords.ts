import createPersistedState from "use-persisted-state";
export const useCountRecords = createPersistedState("counter");
export type CountRecord = {
  timestamp: number;
  count: number;
};
