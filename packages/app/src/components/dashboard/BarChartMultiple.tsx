'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/shadcn/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/shadcn/chart';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export function BarChartMultiple({
  chartData,
  chartConfig,
}: {
  chartData: unknown[];
  chartConfig: ChartConfig;
}) {
  return (
    <Card className="border-none">
      <CardContent className="p-0">
        <CardHeader>
          <CardTitle>Ventas</CardTitle>
        </CardHeader>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickCount={3}
            />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="apps" fill="var(--color-apps)" radius={4} />
            <Bar dataKey="courses" fill="var(--color-courses)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
