import { useRef, useEffect } from "react";
import * as d3 from "d3";

interface Props {
  data: [number, (number | null)[]][];
}

const width = 600;
const height = 300;
const COLORS = ["#3b82f6", "#10b981", "#ef4444"];

export default function MultiSeriesChart({ data }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg.selectAll("*").remove();

    const seriesCount = data[0][1].length;

    const series = Array.from({ length: seriesCount }, (_, i) =>
      data.map(([x, arr]) => ({ x, y: arr[i] }))
    );

    const allX = data.map(([x]) => x);
    const allY = series.flatMap((s) =>
      s.map((d) => d.y).filter((v) => v != null)
    ) as number[];

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(allX) as [number, number])
      .range([40, width - 20]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(allY) as [number, number])
      .nice()
      .range([height - 30, 10]);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - 30})`)
      .call(d3.axisBottom(xScale).ticks(6));

    svg
      .append("g")
      .attr("transform", `translate(40,0)`)
      .call(d3.axisLeft(yScale).ticks(6));

    const line = d3
      .line<{ x: number; y: number | null }>()
      .defined((d) => d.y != null)
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y!));

    series.forEach((s, i) => {
      svg
        .append("path")
        .datum(s)
        .attr("fill", "none")
        .attr("stroke", COLORS[i])
        .attr("stroke-width", 2)
        .attr("d", line);
    });
  }, [data]);

  return <svg ref={ref} className="w-full h-auto" />;
}
