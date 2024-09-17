import { useSelector } from "react-redux";
import { selectTheme } from "../../features/themeSlice";
import Chart from "react-apexcharts";

const AreaChart = () => {
  const theme = useSelector(selectTheme);
  const isDarkMode = theme === "dark";

  const options = {
    chart: {
      type: "area",
      height: 350,
      stacked: false,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true,
        },
        autoSelected: "zoom",
      },
    },
    colors: isDarkMode
      ? ["#547AA5", "#8CC084", "#E39A9A"]
      : ["#4E79A7", "#76B041", "#E15759"],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      type: "category",
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        style: {
          colors: isDarkMode ? "#dddddd" : "#000000",
          fontSize: "10px",
        },
      },
    },
    yaxis: {
      title: {
        text: "Amount (USD)",
        style: {
          color: isDarkMode ? "#dddddd" : "#000000",
          fontSize: "14px",
          fontWeight: "bold",
        },
      },
      labels: {
        style: {
          colors: isDarkMode ? "#dddddd" : "#000000",
        },
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
    legend: {
      show: true,
      horizontalAlign: "center",
      labels: {
        colors: isDarkMode ? "#ddd" : "#000",
      },
    },
    tooltip: {
      theme: isDarkMode ? "dark" : "light",
      y: {
        formatter: (val) => `$${val.toLocaleString()}`,
      },
    },
  };

  const series = [
    {
      name: "Revenue",
      data: [
        45000, 47000, 52000, 58000, 61000, 63000, 68000, 72000, 75000, 77000,
        82000, 86000,
      ],
    },
    {
      name: "Expenses",
      data: [
        20000, 21000, 22000, 24000, 26000, 25000, 27000, 29000, 30000, 31000,
        32000, 34000,
      ],
    },
    {
      name: "Profit",
      data: [
        25000, 26000, 30000, 34000, 35000, 38000, 41000, 43000, 45000, 46000,
        50000, 52000,
      ],
    },
  ];

  return (
    <div>
      <Chart options={options} series={series} type="area" height={350} />
    </div>
  );
};

export default AreaChart;
