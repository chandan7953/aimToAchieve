import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";

const DataTable = ({ data, aimData }) => {
  const tableRef = useRef();

  const formatRupees = (value) => {
    return new Intl.NumberFormat("en-IN", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const handlePrint = useReactToPrint({
    content: () => tableRef.current,
    pageStyle: `
      @page {
        size: A4;
        padding: 2cm;
      }
      @media print {
        body {
          margin: 1;
          padding: 0;
        }
        .no-print {
          display: none; /* Hide elements with the class 'no-print' */
        }
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid black;
          padding: 8px;
        }
      }
    `,
  });

  return (
    <div>
      <div className="flex justify-end">
        <button
          onClick={handlePrint}
          className="mt-4 mb-4 w-24 h-10 rounded-lg bg-blue-600 text-white"
        >
          Download
        </button>
      </div>

      <div className="w-full overflow-auto sm:flex-1 " ref={tableRef}>
        <table className="relative w-full min-w-max border border-slate-800  bg-white text-center   sm:min-w-full">
          <thead className="sticky top-0">
            <tr className="z-10 divide-x-[1px] divide-gray-400 border border-gray-400 bg-sky-100">
              <th className="px-4 py-1 text-sm font-bold uppercase md:py-2">
                S. No
              </th>
              <th className="px-4 py-1 text-sm font-bold uppercase md:py-2">
                Princple Amount
              </th>
              <th className="px-4 py-1 text-sm font-bold uppercase md:py-2">
                Profit
              </th>
              <th className="px-4 py-1 text-sm font-bold uppercase md:py-2">
                Total Amount
              </th>
              <th className="px-4 py-1 text-sm font-bold uppercase md:border-r md:py-2">
                Achieve
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length === 0 ? (
              <tr className="text-nowrap p-1">
                <td>No record found</td>
              </tr>
            ) : (
              data?.map((item, index) => (
                <tr key={index}>
                  <td className="border-b border-l border-r border-gray-400 px-4 py-1 md:py-2">
                    {index + 1}
                  </td>
                  <td className="border-b border-l border-r border-gray-400 px-4 py-1 md:py-2">
                    {formatRupees(item.principle)}
                  </td>
                  <td className="border-b border-l border-r border-gray-400 px-4 py-1 md:py-2">
                    {formatRupees(item.profit)}
                  </td>

                  <td className="border-b border-l border-r border-gray-400 px-4 py-1 md:py-2">
                    {formatRupees(item.amount)}
                  </td>

                  <td className="border-b border-l border-r border-gray-400 px-4 py-1 md:py-2">
                    {""}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
