import createPersistedState from "use-persisted-state";

if (localStorage.counter) {
  localStorage.PushUps = localStorage.counter;
  localStorage.counter = undefined;
}
export const useCountRecords = createPersistedState("PushUps");
export type CountRecord = {
  timestamp: number;
  count: number;
};
