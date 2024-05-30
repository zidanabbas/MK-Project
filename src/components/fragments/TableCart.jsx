import React from "react";

export default function TableCart() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider md:px-5 md:py-3">
              No
            </th>
            <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider md:px-5 md:py-3">
              Product
            </th>
            <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider md:px-5 md:py-3">
              Price
            </th>
            <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider md:px-5 md:py-3">
              Quantity
            </th>
            <th className="px-3 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider md:px-5 md:py-3">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-3 py-4 border-b border-gray-200 bg-white text-sm md:px-5 md:py-5">
              1
            </td>
            <td className="px-3 py-4 border-b border-gray-200 bg-white text-sm md:px-5 md:py-5">
              Product 1
            </td>
            <td className="px-3 py-4 border-b border-gray-200 bg-white text-sm md:px-5 md:py-5">
              $10.00
            </td>
            <td className="px-3 py-4 border-b border-gray-200 bg-white text-sm md:px-5 md:py-5">
              2
            </td>
            <td className="px-3 py-4 border-b border-gray-200 bg-white text-sm md:px-5 md:py-5">
              $20.00
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
