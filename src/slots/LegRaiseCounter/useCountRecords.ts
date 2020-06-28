import createPersistedState from "use-persisted-state";
export const useCountRecords = createPersistedState("LegRaises");
export type CountRecord = {
  timestamp: number;
  count: number;
};
