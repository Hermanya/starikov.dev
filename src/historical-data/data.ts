export const dayMs = 1000 * 60 * 60 * 24;
export const formatDate = (ts: number) => {
  const date = new Date(ts);
  return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
};

type Record = {
  timestamp: number;
  count: number;
};

export const average = (records: Record[]): number =>
  records.reduce((sum, x) => sum + x.count, 0) / records.length;

export const todaysRecords = (records: Record[]): Record[] =>
  records.filter((_) => formatDate(_.timestamp) === formatDate(Date.now()));

export const yesterdaysRecords = (records: Record[]): Record[] =>
  records.filter(
    (_) => formatDate(_.timestamp) === formatDate(Date.now() - dayMs)
  );
export const todaysCounts = (records: Record[]): number[] =>
  todaysRecords(records).map((_) => _.count);

export type CountsPerDay = {
  date: string;
  counts: number[];
  timestamps: number[];
  total: number;
};

export const perDay = (records: Record[]): CountsPerDay[] =>
  records.reduce((days, item) => {
    const date = formatDate(item.timestamp);

    const day = days.find((_) => _.date === date);

    if (day) {
      day.counts.push(item.count);
      day.timestamps.push(item.timestamp);
      day.total += item.count;
      return days;
    } else {
      return [
        ...days,
        {
          date,
          counts: [item.count],
          timestamps: [item.timestamp],
          total: item.count,
        },
      ];
    }
  }, [] as CountsPerDay[]);

export const maxRepsPerDay = (records: Record[]) =>
  Math.max(...perDay(records).map((day) => day.total));

export const todaysTotal = (records: Record[]) =>
  todaysCounts(records).reduce((a, b) => a + b, 0);
