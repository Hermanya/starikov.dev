//  const dayMs = 1000 * 60 * 60 * 24;
// const daysSinceBeginning = new Array(
//   Math.floor((Date.now() - countRecords[0].timestamp) / dayMs)
// )
//   .fill(1)
//   .map((_, index) => new Date(Date.now() - dayMs * index).toLocaleDateString());

type Record = {
  timestamp: number;
  count: number;
};

export const average = (records: Record[]): number =>
  records.reduce((sum, x) => sum + x.count, 0) / records.length;

export const todaysRecords = (records: Record[]): Record[] =>
  records.filter(
    (_) =>
      new Date(_.timestamp).toLocaleDateString() ===
      new Date(Date.now()).toLocaleDateString()
  );
export const todaysCounts = (records: Record[]): number[] =>
  todaysRecords(records).map((_) => _.count);

type CountsPerDay = {
  date: string;
  counts: number[];
  timestamps: number[];
  total: number;
};

export const perDay = (records: Record[]): CountsPerDay[] =>
  records.reduce((days, item) => {
    const date = new Date(item.timestamp).toLocaleDateString();

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
