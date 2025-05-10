import React, { useState, useEffect, useRef } from "react";
import html2canvas from "html2canvas";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import { MiniCard } from "./MiniCard";
import Swal from "sweetalert2";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import GradeIcon from "@mui/icons-material/Grade";
import TodayIcon from "@mui/icons-material/Today";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import TimerIcon from "@mui/icons-material/Timer";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import IosShareIcon from "@mui/icons-material/IosShare";

export const Results = ({ startDate, setStartDate, setResultsView }) => {
  const resultsRef = useRef(null);
  const [results, setResults] = useState({
    formattedDate: "",
    correctYearsDiff: 0,
    correctMonthsDiff: 0,
    totalMonths: 0,
    daysDiff: 0,
    hoursDiff: 0,
    minutesDiff: 0,
    secondsDiff: 0,
  });
  const handleCalculate = () => {
    const selectedDate = new Date(startDate); // Fecha seleccionada
    const currentDate = new Date(); // Fecha actual

    // Diferencia en milisegundos
    const diffInMilliseconds = currentDate - selectedDate;

    // Calcular años, meses, días, horas, minutos y segundos
    const yearsDiff = currentDate.getFullYear() - selectedDate.getFullYear();
    const monthsDiff = currentDate.getMonth() - selectedDate.getMonth();
    const daysDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
    const hoursDiff = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
    const minutesDiff = Math.floor(diffInMilliseconds / (1000 * 60));
    const secondsDiff = Math.floor(diffInMilliseconds / 1000);

    // Ajustar años y meses si el mes o día actual es menor que el seleccionado
    let adjustedYears = yearsDiff;
    let adjustedMonths = monthsDiff;

    if (
      monthsDiff < 0 ||
      (monthsDiff === 0 && currentDate.getDate() < selectedDate.getDate())
    ) {
      adjustedYears -= 1;
      adjustedMonths += 12;
    }

    if (currentDate.getDate() < selectedDate.getDate()) {
      const previousMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        0
      );
      adjustedMonths -= 1;
    }

    // Guardar los resultados en el estado
    setResults({
      formattedDate: selectedDate.toISOString(),
      correctYearsDiff: adjustedYears,
      correctMonthsDiff: adjustedMonths,
      totalMonths: adjustedYears * 12 + adjustedMonths,
      daysDiff,
      hoursDiff,
      minutesDiff,
      secondsDiff,
    });
  };

  const handleReturn = () => {
    setStartDate(new Date());
    setResultsView(false);
  };

  useEffect(() => {
    // Ejecutar handleCalculate cada segundo
    const interval = setInterval(() => {
      handleCalculate();
    }, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(interval);
  }, [startDate]);

  return (
    <div
      ref={resultsRef}
      className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-lg"
    >
      <div className="relative">
        {/* Back Button */}
        <IconButton
          onClick={handleReturn}
          style={{ color: "#F87171" }}
          className="absolute top-0 left-0 hover:bg-gray-200 rounded-full"
        >
          <ArrowBackIosIcon />
        </IconButton>

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="80"
            fill="currentColor"
            className="text-red-400"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a1.5.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"
            />
          </svg>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-4">
        You've been together for:
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        <MiniCard
          icon={<EmojiEventsIcon />}
          value={results.correctYearsDiff}
          label="Years"
        />
        <MiniCard
          icon={<GradeIcon />}
          value={results.correctMonthsDiff}
          label="Months"
        />
        <MiniCard icon={<TodayIcon />} value={results.daysDiff} label="Days" />
        <MiniCard
          icon={<AccessTimeIcon />}
          value={results.hoursDiff}
          label="Hours"
        />
        <MiniCard
          icon={<TimerIcon />}
          value={results.minutesDiff}
          label="Minutes"
        />
        <MiniCard
          icon={<AvTimerIcon />}
          value={results.secondsDiff}
          label="Seconds"
        />
      </div>

      {/* Footer 
      <div className="mt-6 text-center">
        <Button
          sx={{ backgroundColor: "#F87171", fontWeight: "bold", width: "60%" }}
          variant="contained"
          endIcon={<IosShareIcon sx={{ fontSize: "2rem" }} />}
        >
          Share
        </Button>
      </div>
      */}
    </div>
  );
};
