'use client';
import { Pie, PieChart } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/shadcn/chart';

export function PieChartDonut({
  chartData,
  chartConfig,
}: {
  chartData: unknown;
  chartConfig: ChartConfig;
}) {
  return (
    <ChartContainer
      config={chartConfig}
      className="mx-auto aspect-square md:h-[300px] sm:h-[300px] "
    >
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={chartData as string[]}
          dataKey="sales"
          nameKey="resources"
          innerRadius={60}
          outerRadius={100}
          paddingAngle={2}
        />

        <ChartLegend
          content={<ChartLegendContent nameKey="resources" />}
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
}
