import createPersistedState from "use-persisted-state";

if (localStorage.counter) {
  localStorage.PushUpCounter = localStorage.counter;
  localStorage.counter = undefined;
}
export const useCountRecords = createPersistedState("PushUpCounter");
export type CountRecord = {
  timestamp: number;
  count: number;
};
