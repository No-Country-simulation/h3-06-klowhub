'use client';
import { TDataDashBoard, getSales } from '@/_lib/actions/dashboard';
import { BarChartMultiple } from '@/components/dashboard/BarChartMultiple';
import { Card } from '@/components/dashboard/Card';
import { PieChartDonut } from '@/components/dashboard/PieChartDonut';
import { Table } from '@/components/dashboard/Table';
import { useState } from 'react';

export const Dashboard = ({ data }: { data: TDataDashBoard }) => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(data);

  const handleClick = async () => {
    setLoading(true); // Mostrar estado de carga
    try {
      const result = await getSales(); // Llama a la acción del servidor
      if (result && result.data !== null) {
        setResponse(result.data); // Maneja la respuesta
      } else {
        // Handle the case when result is null
        console.error('Error: result is null');
      }
    } catch (error) {
      console.error('Error al ejecutar la acción:', error);
    } finally {
      setLoading(false); // Detiene el estado de carga
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Primera fila con 3 columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Primera columna */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md flex flex-col">
          <h3 className="text-lg font-semibold mb-4">
            Saldo disponible para uso
          </h3>
          <p className="text-4xl font-bold text-green-500 mb-4">170,00 US$</p>
          <button
            onClick={() => handleClick()}
            className="bg-white text-purple-600 font-semibold py-2 px-4 rounded-lg mb-2 shadow-sm hover:bg-gray-100 transition"
          >
            Retirar fondos
          </button>
          <button className="border border-gray-500 text-gray-300 font-semibold py-2 px-4 rounded-lg shadow-sm hover:bg-gray-700 transition">
            Administrar métodos de cobro
          </button>
        </div>

        {/* Segunda columna */}
        <div className="grid grid-cols-1 gap-4">
          <Card
            title="Ganancias hasta la fecha"
            amount="272,00 US$"
            color="text-green-500"
          />
          <Card
            title="Pagos en proceso de liquidación"
            amount="300,80 US$"
            color="text-yellow-500"
          />
        </div>

        {/* Tercera columna */}
        <div className="grid grid-cols-1 gap-4">
          <Card
            title="Gastos hasta la fecha"
            amount="62,00 US$"
            color="text-red-400"
          />
          <Card
            title="Retirados hasta la fecha"
            amount="208,00 US$"
            color="text-red-400"
          />
        </div>
      </div>

      {loading ? (
        'Cargando...'
      ) : (
        <>
          {/* Segunda fila con 2 columnas y la primera ocupando el 70% */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 mt-4">
            {/* Columna 1 ocupa el 70% */}
            <div className="lg:col-span-2 bg-gray-700 p-4">
              <div className="overflow-x-auto">
                {/* Contenedor con altura definida y scroll vertical */}
                <div className="max-h-[300px] overflow-y-auto">
                  <Table dataTable={response.dataTable} />
                </div>
              </div>
            </div>

            {/* Columna 2 con el gráfico */}
            <div className="bg-gray-600">
              <PieChartDonut
                chartData={response.chartDataPie}
                chartConfig={response.chartConfigPie}
              />
            </div>
          </div>

          {/* Última fila con 1 columna */}
          <div className="grid grid-cols-1 gap-4 mt-4">
            <div className="bg-gray-700 pr-4">
              <BarChartMultiple
                chartData={response.chartData}
                chartConfig={response.chartConfig}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};
