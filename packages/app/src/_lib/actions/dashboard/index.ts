'use server';

function delay(ms: number | undefined) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export type TChartConfig = {
  [key: string]: {
    label: string;
    color: string;
  };
};
export type TChartDataItem = {
  month: string;
  apps: number;
  courses: number;
};

export type TChartData = TChartDataItem[];

export type TChartDataPieItem = {
  resources: string;
  sales: number;
  fill: string;
};

export type TChartDataPie = TChartDataPieItem[];
export type TChartConfigPieItem = {
  label: string;
};

export type TChartConfigPie = {
  [key: string]: TChartConfigPieItem;
};

export type TDataTableItem = {
  name: string;
  amount: string;
  status: string;
  color: string;
};

export type TDataTable = TDataTableItem[];

export type TDataDashBoard = {
  chartConfig: TChartConfig;
  chartData: TChartData;
  chartConfigPie: TChartConfigPie;
  chartDataPie: TChartDataPie;
  dataTable: TDataTable;
};
export type TResponseData = {
  status: string;
  message: string;
  data: TDataDashBoard;
};

export type TErrorResponse = {
  status: 'error';
  message: string;
  data: null;
};

export async function getSales(filters?: {
  startDate?: string;
  endDate?: string;
}) {
  try {
    // const session = await getSession();
    console.log('filters', filters);
    // Configuración de gráficos
    const chartConfig = {
      courses: {
        label: 'Cursos',
        color: 'rgba(var(--chart-1))',
      },
      apps: {
        label: 'Aplicaciones',
        color: 'rgba(var(--chart-2))',
      },
    };

    const chartData = [
      { month: 'January', apps: 186, courses: 80 },
      { month: 'February', apps: 305, courses: 200 },
      { month: 'March', apps: 237, courses: 120 },
      { month: 'April', apps: 73, courses: 190 },
      { month: 'May', apps: 209, courses: 130 },
      { month: 'June', apps: 214, courses: 140 },
      { month: 'July', apps: 214, courses: 140 },
      { month: 'August', apps: 214, courses: 140 },
    ];

    // Datos para gráfico de dona
    const chartDataPie = [
      { resources: 'cursos', sales: 200, fill: 'rgba(var(--chart-1))' },
      { resources: 'aplicaciones', sales: 187, fill: 'rgba(var(--chart-2))' },
      { resources: 'proyectos', sales: 275, fill: 'rgba(var(--chart-3))' },
      { resources: 'mentorias', sales: 173, fill: 'rgba(var(--chart-4))' },
    ];

    const chartConfigPie = {
      sales: {
        label: 'Ventas',
      },
      cursos: {
        label: 'Cursos',
      },
      aplicaciones: {
        label: 'Aplicaciones',
      },
      mentorias: {
        label: 'Mentorías',
      },
      proyectos: {
        label: 'Proyectos',
      },
    };

    const dataTable = [
      {
        name: 'Nombre del cliente',
        amount: '$650',
        status: 'Pendiente',
        color: 'bg-red-500',
      },
      {
        name: 'Nombre del cliente',
        amount: '$650',
        status: 'En curso',
        color: 'bg-yellow-500',
      },
      {
        name: 'Nombre del cliente',
        amount: '$650',
        status: 'En curso',
        color: 'bg-yellow-500',
      },
      {
        name: 'Nombre del cliente',
        amount: '$650',
        status: 'Terminado',
        color: 'bg-green-500',
      },
      {
        name: 'Nombre del cliente',
        amount: '$650',
        status: 'Terminado',
        color: 'bg-green-500',
      },
      {
        name: 'Nombre del cliente',
        amount: '$650',
        status: 'Terminado',
        color: 'bg-green-500',
      },
    ];

    await delay(2000);
    return {
      status: 'success',
      message: 'Sales data retrieved successfully',
      data: { chartConfig, chartData, chartConfigPie, chartDataPie, dataTable },
    };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        status: 'error',
        message: error.message || 'Failed to retrieve sales data',
        data: null,
      };
    } else {
      return {
        status: 'error',
        message: 'An unknown error occurred',
        data: null,
      };
    }
  }
}
