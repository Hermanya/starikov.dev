import createPersistedState from "use-persisted-state";

if (localStorage.counter) {
  localStorage.PushUps = localStorage.counter;
  delete localStorage.counter;
}
export const useCountRecords = createPersistedState("PushUps");
export type CountRecord = {
  timestamp: number;
  count: number;
};
