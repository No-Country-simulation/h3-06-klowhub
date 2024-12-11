import { TDataTable } from '@/_lib/actions/dashboard';
export function Table({ dataTable }: { dataTable: TDataTable }) {
  return (
    <>
      {dataTable.length == 0 ? (
        <p>no hay informacion</p>
      ) : (
        <table className="w-full table-auto text-sm">
          <thead>
            <tr className="text-gray-400 border-b border-gray-700">
              <th className="py-3 text-left">Nombre del cliente</th>
              <th className="py-3 text-left">Monto</th>
              <th className="py-3 text-left">Estado</th>
              <th className="py-3 text-left">Detalles</th>
            </tr>
          </thead>
          <tbody>
            {dataTable.map((row, index) => (
              <tr key={index} className="border-b border-gray-700">
                <td className="py-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        src="https://via.placeholder.com/40"
                        alt="Avatar"
                        className="w-10 h-10 rounded-full"
                      />
                    </div>
                    <div className="ml-3">
                      <span>{row.name}</span>
                    </div>
                  </div>
                </td>
                <td className="py-3">{row.amount}</td>
                <td className="py-3">
                  <span
                    className={`text-xs font-medium text-white py-1 px-3 rounded-full ${row.color}`}
                  >
                    {row.status}
                  </span>
                </td>
                <td className="py-3">
                  <button className="text-purple-400 hover:underline">
                    Ver más
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
}
