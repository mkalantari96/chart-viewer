import SingleSeriesChart from "./SingleSeriesChart";
import MultiSeriesChart from "./MultiSeriesChart";
import type { ChartData } from "../types";

export default function Chart({ config }: { config: ChartData }) {
  const first = config.data?.[0]?.[1];
  const isMulti = Array.isArray(first);

  return (
    <div className="w-full overflow-x-auto bg-gray-50 border border-gray-200 rounded-md p-4">
      <div className="min-w-[300px] max-w-full">
        {isMulti ? (
          <MultiSeriesChart
            data={config.data as [number, (number | null)[]][]}
          />
        ) : (
          <SingleSeriesChart data={config.data as [number, number | null][]} />
        )}
      </div>
    </div>
  );
}
