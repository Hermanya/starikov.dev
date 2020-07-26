export type CountRecord = {
  timestamp: number;
  count: number;
};

export type Counter = {
  name: string;
  lastUpdatedAt?: number;
  group: string;
};

export type Group = {
  name: string;
  counters: Counter[];
};
