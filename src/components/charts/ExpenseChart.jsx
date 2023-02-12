import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function ExpenseChart({ oldChartData }) {
  const names = oldChartData?.map((item) => item.name);
  let dataItem = [...new Set(names)];
  const addFunction = (nameArg) => {
    let arr = oldChartData?.filter((item) => item.name == nameArg);
    let arrNum = arr?.map((a) => {
      return parseInt(a.price);
    });
    const sum = arrNum.reduce((a, b) => a + b, 0);
    return sum;
  };
  dataItem = dataItem?.map((item) => ({
    name: item,
    amount: addFunction(item),
  }));
  const [newChartData, setNewChartData] = useState(null);
  useEffect(() => {
    setNewChartData({
      labels: dataItem?.map((data) => data.name),
      datasets: [
        {
          // label: dataItem.map((data) => data.name),
          // label: "Expenses",
          data: dataItem?.map((data) => data.amount),
          backgroundColor: [
            "rgb(172, 138, 255)",
            "#ecf0f1",
            "rgb(149, 205, 0)",
            "#f3ba2f",
            "rgb(61, 0, 0)",
            "gold",
          ],
          borderColor: "black",
          borderWidth: 2,
          hoverOffset: 4,
        },
      ],
    });
  }, [oldChartData]);
  return (
    <div className="w-96 h-64">
      {console.log(newChartData?.labels)}
      {newChartData && <Bar className="w-full" data={newChartData} />}
    </div>
  );
}

export default ExpenseChart;
