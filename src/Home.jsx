import React, { useState, useRef } from "react";
import DataTable from "./DataTable";
import logic from "./logic";

const Home = () => {
  const [principalAmount, setPrincipalAmount] = useState("");
  const [rate, setRate] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [data, setData] = useState([]);

  const inputRef = useRef(null);

  const formatRupees = (value) => {
    // Remove commas and other non-digit characters from the value
    const cleanedValue = value.replace(/\D/g, "");
    // Parse the cleaned value as an integer
    const parsedValue = parseInt(cleanedValue, 10);
    // Format the parsed value as Indian Rupees without decimals
    return new Intl.NumberFormat("en-IN", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(parsedValue);
  };

  function handleAddData(e) {
    e.preventDefault(); // Prevent default form submission behavior

    const newData = logic(principalAmount, rate, targetAmount);
    setData(newData);
    setPrincipalAmount("");
    setRate("");
    setTargetAmount("");
  }

  return (
    <div className="p-8">
      <div className="w-full rounded-md border border-gray-300 p-8 bg-white">
        <h2 className="mb-4 text-2xl font-semibold">Aim of Achieve:</h2>

        <form
          className="flex w-full flex-row flex-wrap items-start justify-between gap-4"
          onSubmit={handleAddData}
        >
          <div className="w-full p-1 md:w-64">
            <label
              htmlFor="principle_input_data"
              className="mb-1 block font-semibold text-gray-700"
            >
              Principle Amount:
            </label>
            <input
              type="text"
              id="principle_input_data"
              placeholder="Principle Amount"
              name="principle_input_data"
              required
              value={
                principalAmount !== "" ? formatRupees(principalAmount) : ""
              }
              onChange={(e) => {
                // Remove commas and other non-digit characters from the input value
                const cleanedValue = e.target.value.replace(/\D/g, "");
                // Update the state with the cleaned numeric value
                setPrincipalAmount(cleanedValue);
              }}
              className="w-full rounded border border-gray-300 p-1 font-normal"
              ref={inputRef}
            />
          </div>

          <div className="w-full p-1 md:w-64">
            <label
              htmlFor="rate_input_data"
              className="mb-1 block font-semibold text-gray-700"
            >
              Rate:
            </label>
            <input
              type="text"
              id="rate_input_data"
              placeholder="Rate Amount"
              name="rate_input_data"
              required
              value={rate}
              onChange={(e) => setRate(e.target.value)}
              className="w-full rounded border border-gray-300 p-1 font-normal"
            />
          </div>

          <div className="w-full p-1 md:w-64">
            <label
              htmlFor="target_input_data"
              className="mb-1 block font-semibold text-gray-700"
            >
              Target Amount:
            </label>
            <input
              type="text"
              id="target_input_data"
              placeholder="Target Amount"
              name="target_input_data"
              required
              value={targetAmount !== "" ? formatRupees(targetAmount) : ""}
              onChange={(e) => {
                // Remove commas and other non-digit characters from the input value
                const cleanedValue = e.target.value.replace(/\D/g, "");
                // Update the state with the cleaned numeric value
                setTargetAmount(cleanedValue);
              }}
              className="w-full rounded border border-gray-300 p-1 font-normal"
            />
          </div>

          <div className="w-full p-1 md:w-24">
            <button
              type="submit"
              className="w-full h-10 rounded-lg bg-blue-600 text-white"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      <DataTable data={data} />
    </div>
  );
};

export default Home;
