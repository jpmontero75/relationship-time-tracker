import React from "react";

export const MiniCard = ({ icon, value, label }) => {
  // Formatear el valor con comas
  const formattedValue = new Intl.NumberFormat().format(value);

  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center justify-center text-center">
      {/* Icon */}
      <div className="text-red-400 mb-4">
        {React.cloneElement(icon, { fontSize: "large", style: { fontSize: "2rem" } })}
      </div>

      {/* Value */}
      <p className="text-xl sm:text-2xl font-bold text-gray-800 break-words overflow-hidden text-ellipsis max-w-full">
        {formattedValue}
      </p>

      {/* Label */}
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );
};