import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "@mui/material/Button";
import { Results } from "./Results";

export const PrimaryView = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [resultsView, setResultsView] = useState(false);

  return (
    <div className="w-full min-h-screen bg-red-400 flex items-center justify-center px-6 sm:px-12 lg:px-24 py-8">
      {resultsView ? (
        <Results
          startDate={startDate}
          setStartDate={setStartDate}
          setResultsView={setResultsView}
        />
      ) : (
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-full max-w-md sm:max-w-lg lg:max-w-xl">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              fill="currentColor"
              className="text-red-400 sm:w-20 sm:h-20"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l3.103-3.104a.5.5 0 1 1 .708.708L4.5 12.207V14a.5.5 0 0 1-.146.354l-1.5 1.5ZM16 3.5a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182A23.825 23.825 0 0 1 5.8 12.323L8.31 9.81a.5.5 0 0 0-2.122-2.122L3.657 10.22a8.827 8.827 0 0 1-1.039-1.57c-.798-1.576-.775-2.997-.213-4.093C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3Z"
              />
            </svg>
          </div>

          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-700 mb-4">
            Relationship Time Tracker
          </h1>

          {/* Subtitle */}
          <h2 className="text-base sm:text-lg text-center text-gray-600 mb-6">
            Select your anniversary
          </h2>

          {/* Selected date */}
          <div className="mb-6 bg-gray-200 p-4 rounded-lg shadow-inner">
            <h3 className="text-lg sm:text-xl font-bold text-gray-700 text-center mb-2">
              Selected Date
            </h3>
            <p className="text-lg sm:text-2xl font-bold text-red-400 text-center">
              {new Date(startDate).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* DatePicker */}
          <div className="flex justify-center mb-6">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="dd-MM-yyyy"
              showYearDropdown
              showMonthDropdown
              useShortMonthInDropdown
              dropdownMode="select"
              showPreviousMonths={false}
              inline
              className="w-full text-center border border-gray-300 rounded-md p-2"
            />
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <Button
              variant="contained"
              style={{
                backgroundColor: "#F87171",
                color: "white",
                fontWeight: "bold",
              }}
              onClick={() => setResultsView(true)}
              className="w-full sm:w-[80%]"
            >
              Calculate
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
