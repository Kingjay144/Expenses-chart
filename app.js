const data = [
  {
    day: "monday",
    amount: 175.45,
  },
  {
    day: "tuesday",
    amount: 300.91,
  },
  {
    day: "wednesday",
    amount: 520.36,
  },
  {
    day: "thursday",
    amount: 390.07,
  },
  {
    day: "friday",
    amount: 230.39,
  },
  {
    day: "saturday",
    amount: 430.28,
  },
  {
    day: "sunday",
    amount: 250.48,
  },
];
function generateChart() {
  const info = {
    labels: data.map((chart) => chart.day),
    datasets: [
      {
        data: data.map((chart) => chart.amount),
        backgroundColor: ["hsl(10, 79%, 65%)"],
        borderRadius: 5,
        hoverBackgroundColor: "hsl(10, 79%, 75%)",
      },
    ],
  };
  const titleTooltip = (e) => `$${e[0].formattedValue}`;
  const labelTooltip = (e) => "";
  const options = {
    scales: {
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        yAlign: "bottom",
        displayColors: false,
        callbacks: {
          title: titleTooltip,
          label: labelTooltip,
        },
      },
    },
  };
  const config = {
    type: "bar",
    data: info,
    options,
  };
  const myChart = new Chart(document.getElementById("myChart"), config);
}
generateChart();
