export interface ChartDataPoint {
  label: string;
  value: number;
}

export interface TimeSeriesDataPoint {
  date: string;
  value: number;
}

export interface ChartSeries {
  dataKey: string;
  name: string;
  color?: string;
}
