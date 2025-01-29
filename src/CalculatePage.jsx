import React, { useState } from "react";

const CalculatePage = () => {
  const [buyPrice, setBuyPrice] = useState("");
  const [rate, setRate] = useState("");
  const [quantity, setQuantity] = useState("");
  const [sellDetails, setSellDetails] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Convert input values to float
    const buyPriceFloat = parseFloat(parseFloat(buyPrice).toFixed(2));
    const rateFloat = parseFloat(parseFloat(rate).toFixed(2));
    const quantityInt = parseInt(quantity, 10); // Ensure base 10 parsing

    if (isNaN(buyPriceFloat) || isNaN(rateFloat) || isNaN(quantityInt)) {
      alert("Please enter valid numerical values.");
      return;
    }

    // Calculate sell price
    const sellPrice = parseFloat(
      (buyPriceFloat + (buyPriceFloat * rateFloat) / 100).toFixed(2)
    );

    const differenceBetweenSellAndBuy = parseFloat(
      (sellPrice - buyPriceFloat).toFixed(2)
    );

    // Calculate profit
    const profit = parseFloat(
      (differenceBetweenSellAndBuy * quantityInt).toFixed(2)
    );

    // Update state
    setSellDetails({
      buyPrice: buyPriceFloat,
      sellPrice,
      profit,
      differenceBetweenSellAndBuy,
      sellRate: rateFloat,
    });

    setBuyPrice("");
    setRate("");
    setQuantity("");
  };

  return (
    <div className="p-8">
      <div className="w-full rounded-md border border-gray-300 p-8 bg-white">
        <h2 className="mb-4 text-2xl font-semibold">Aim of Achieve Rate:</h2>

        <form
          className="flex w-full flex-row flex-wrap items-start justify-between gap-4"
          onSubmit={handleSubmit}
        >
          {/* Buy Price Input */}
          <div className="w-full p-1 md:w-64">
            <label
              htmlFor="buy_price"
              className="mb-1 block font-semibold text-gray-700"
            >
              Buy Price
            </label>
            <input
              type="text"
              id="buy_price"
              placeholder="Enter Buy Price"
              name="buy_price"
              required
              value={buyPrice}
              onChange={(e) => {
                const cleanedValue = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dots
                setBuyPrice(cleanedValue);
              }}
              className="w-full rounded border border-gray-300 p-1 font-normal"
            />
          </div>

          {/* Target Rate Input */}
          <div className="w-full p-1 md:w-64">
            <label
              htmlFor="rate"
              className="mb-1 block font-semibold text-gray-700"
            >
              Target Rate:
            </label>
            <input
              type="text"
              id="rate"
              placeholder="Enter Target Rate"
              name="rate"
              required
              value={rate}
              onChange={(e) => {
                const cleanedValue = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dots
                setRate(cleanedValue);
              }}
              className="w-full rounded border border-gray-300 p-1 font-normal"
            />
          </div>

          {/* Quantity Input */}
          <div className="w-full p-1 md:w-64">
            <label
              htmlFor="quantity"
              className="mb-1 block font-semibold text-gray-700"
            >
              Quantity
            </label>
            <input
              type="text"
              id="quantity"
              placeholder="Enter Quantity"
              name="quantity"
              required
              value={quantity}
              onChange={(e) => {
                const cleanedValue = e.target.value.replace(/[^0-9.]/g, ""); // Allow only numbers and dots
                setQuantity(cleanedValue);
              }}
              className="w-full rounded border border-gray-300 p-1 font-normal"
            />
          </div>

          {/* Submit Button */}
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
      {sellDetails !== null ? (
        <div className="w-full rounded-md border border-gray-300 p-8 bg-white mt-4">
          <h2 className="mb-4 text-2xl font-semibold text-blue-600">
            Aim to sell price:
          </h2>

          <div className="flex w-full flex-row flex-wrap items-start justify-between gap-4">
            <div className="w-full p-1 md:w-64">
              <p className="mb-1 block font-semibold text-gray-700">
                Buy Price:
              </p>
              <p className="w-full rounded border border-gray-300 p-1 font-normal">
                {sellDetails.buyPrice}
              </p>
            </div>
            <div className="w-full p-1 md:w-64">
              <p className="mb-1 block font-semibold text-gray-700">
                Sell Rate:
              </p>
              <p className="w-full rounded border border-gray-300 p-1 font-normal">
                {sellDetails.sellRate}
              </p>
            </div>
            <div className="w-full p-1 md:w-64">
              <p className="mb-1 block font-semibold text-gray-700">
                Sell Price:
              </p>
              <p className="w-full rounded border border-gray-300 p-1 font-normal">
                {sellDetails.sellPrice}
              </p>
            </div>
            <div className="w-full p-1 md:w-64">
              <p className="mb-1 block font-semibold text-gray-700">Gain:</p>
              <p className="w-full rounded border border-gray-300 p-1 font-normal">
                {sellDetails.differenceBetweenSellAndBuy}
              </p>
            </div>
            <div className="w-full p-1 md:w-64">
              <p className="mb-1 block font-semibold text-gray-700">Profit:</p>
              <p className="w-full rounded border border-gray-300 p-1 font-normal">
                {sellDetails.profit}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CalculatePage;
