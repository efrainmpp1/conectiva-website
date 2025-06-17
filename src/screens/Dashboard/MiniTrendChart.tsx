import React from "react";
import { ResponsiveContainer, LineChart, Line, AreaChart, Area } from "recharts";

interface MiniTrendChartProps {
  /** Data points with numeric value */
  data: { value: number }[];
  /** CSS color of the chart line/area */
  color?: string;
  /** If true, renders an area chart instead of a line */
  area?: boolean;
  /** Accessible label */
  ariaLabel?: string;
}

const MiniTrendChart: React.FC<MiniTrendChartProps> = ({
  data,
  color = "#8884d8",
  area = false,
  ariaLabel,
}) => (
  <ResponsiveContainer width="100%" height={50}>
    {area ? (
      <AreaChart data={data} aria-label={ariaLabel}>
        <Area
          type="monotone"
          dataKey="value"
          stroke={color}
          fill={color}
          strokeWidth={2}
          dot={false}
        />
      </AreaChart>
    ) : (
      <LineChart data={data} aria-label={ariaLabel}>
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={2}
          dot={false}
        />
      </LineChart>
    )}
  </ResponsiveContainer>
);

export default MiniTrendChart;
