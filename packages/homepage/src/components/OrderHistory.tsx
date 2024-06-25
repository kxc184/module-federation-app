import { useState } from "react";
export default function OrderHistory() {
  const [historyLength, setHistoryLength] = useState("");
  const [order, setOrder] = useState("");
  const rand = Math.round(Math.random() * 100);
  return (
    <div className="container mx-auto h-1/4 w-400px absolute bottom-0 bg-white shadow-2xl">
      <div className="h-1/3 bg-gray-400 flex flex-row items-center shadow-md">
        <p className="font-bold text-xl px-10 text-gray-700 w-56 ">
          Order History
        </p>
        <select
          onChange={(e) => {
            setHistoryLength(e.target.value);
          }}
          className="w-72 h-3/6"
          defaultValue={""}
        >
          <option value="" disabled></option>
          <option value="1mo">1 Month</option>
          <option value="2mo">2 Months</option>
          <option value="3mo">3 Months</option>
          <option value="4mo">6 Months</option>
          <option value="1yr">1 Year</option>
          <option value=">1yr"> {">"} 1 Year</option>
        </select>
        <select
          onChange={(e) => {
            setOrder(e.target.value);
          }}
          disabled={historyLength === ""}
          className="w-96 h-3/6 ml-12"
        >
          <option></option>
          <option value={1}>Order 1</option>
          <option value={2}>Order 2</option>
          <option value={3}>Order 3</option>
          <option value={4}>Order 4</option>
        </select>
        <button
          disabled={historyLength === ""}
          className="mx-5 w-48 bg-sky-500 disabled:bg-gray-200 text-lg font-semibold p-1 "
        >
          VIEW ORDER DETAIL
        </button>
      </div>
      <div className="container mx-auto h-2/3 white flex items-end text-gray-600 ">
        <p className="font-semibold text-xl ml-10 mb-8">
          {order !== "" && rand + " Items in this order"}
        </p>
      </div>
    </div>
  );
}
