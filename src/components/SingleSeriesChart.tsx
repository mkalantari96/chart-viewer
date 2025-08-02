import { useRef, useEffect } from "react";
import * as d3 from "d3";

interface Props {
  data: [number, number | null][];
}

const width = 600;
const height = 300;

export default function SingleSeriesChart({ data }: Props) {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3
      .select(ref.current)
      .attr("viewBox", `0 0 ${width} ${height}`)
      .attr("preserveAspectRatio", "xMidYMid meet");

    svg.selectAll("*").remove();

    const points = data.map(([x, y]) => ({ x, y })).filter((d) => d.y != null);

    const xScale = d3
      .scaleLinear()
      .domain(d3.extent(points, (d) => d.x) as [number, number])
      .range([40, width - 20]);

    const yScale = d3
      .scaleLinear()
      .domain(d3.extent(points, (d) => d.y as number) as [number, number])
      .nice()
      .range([height - 30, 10]);

    const line = d3
      .line<{ x: number; y: number | null }>()
      .defined((d) => d.y != null)
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y!));

    svg
      .append("g")
      .attr("transform", `translate(0,${height - 30})`)
      .call(d3.axisBottom(xScale).ticks(6));

    svg
      .append("g")
      .attr("transform", `translate(40,0)`)
      .call(d3.axisLeft(yScale).ticks(6));

    svg
      .append("path")
      .datum(points)
      .attr("fill", "none")
      .attr("stroke", "#3b82f6")
      .attr("stroke-width", 2)
      .attr("d", line);
  }, [data]);

  return <svg ref={ref} className="w-full h-auto" />;
}
