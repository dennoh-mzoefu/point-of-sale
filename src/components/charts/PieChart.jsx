import React, { useEffect, useState } from "react";
import { Bar, Doughnut, Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart({ oldChartData }) {
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
          label: "Expenses",
          data: dataItem?.map((data) => data.amount),
          backgroundColor: ["rgb(149, 205, 0)", "red"],
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
      {newChartData && <Doughnut className="w-full" data={newChartData} />}
    </div>
  );
}

export default PieChart;
