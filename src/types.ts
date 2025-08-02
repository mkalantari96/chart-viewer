export type SingleSeries = {
  title: string;
  data: [number, number | null][];
};

export type MultiSeries = {
  title: string;
  data: [number, (number | null)[]][];
};


export type ChartData = SingleSeries | MultiSeries;