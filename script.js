// For bar chart

var chart = document.getElementById("graph").getContext("2d");
var graph = new Chart(chart, {
  type: "bar",
  data: {
    labels: ["HTML", "CSS", "JAVASCRIPT", "JQUERY", "BOOTSTRAP"],
    datasets: [
      {
        label: "Online Tutorial Subjects",
        data: [9, 8, 10, 6, 12],
        backgroundColor: ["yellow", "aqua", "pink", "red", "green"],
        borderColor: ["red", "blue", "fuchsia", "black", "black"],
        borderWidth: 2,
      },
    ],
  },
  options: {
    responsive: true,
    layout: {
      padding: {
        left: 40,
        right: 40,
      },
      // height: "10rem",
      // width: "10rem"
    },
    plugins: {
      title: {
        display: true,
        text: "Web Technologies",
        color: "blue",
        font: {
          size: 30,
          // weigth: 'bold'
        },
        fullSize: true,
      },
      legend: {
        display: true,
        position: "bottom",
        // align: 'center',
        labels: {
          font: {
            weight: "bold",
            size: 15,
            family: "Helvetica",
          },
        },
      },
    },
    animations: {
      tension: {
        duration: 750,
        //   delay: 500,
        easing: "linear",
        from: 1,
        to: 0,
        loop: true,
      },
    },
    scales: {
      // x:{
      //   display: false
      // },
      // y:{
      //   display: false
      // }
      y: {
        min: 0,
        max: 20,
      },
    },
    events: ["click"],
    interaction: {
      mode: "nearest",
    },
  },
});

// For doughnut chart

let doughnut = document.querySelector("#doughnut");
let graph2 = new Chart(doughnut, {
  type: "doughnut",
  data: {
    labels: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "BOOTSTRAP"],
    datasets: [
      {
        label: "online tutorial sujects",
        data: [20, 40, 10, 35, 27],
        backgroundColor: ["yellow", "blue", "red", "pink", "purple"],
      },
    ],
  },
  options: {
    repsonsive: false,
  },
});

// For line chart

let line = document.getElementById("line");
let graph3 = new Chart(line, {
  type: "line",
  data: {
    labels: ["HTML", "CSS", "JAVASCRIPT", "REACT JS", "BOOTSTRAP"],
    datasets: [
      {
        label: "online tutorial sujects",
        data: [20, 40, 10, 35, 27],
        borderColor: ["green"],
        pointRadius: 0,
      },
    ],
  },
  options: {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        min: 0,
        display: false,
      },
      x: {
        display: false,
      },
    },
  },
});

// For radial bar chart
const data1 = {
  // labels: ["Online Sales", "Offline Sales", "Returns"],
  datasets: [
    {
      label: "Online Sales",
      data: [18],
      backgroundColor: ["rgba(255, 26, 104, 0.2)"],
      borderColor: ["rgba(255, 26, 104, 1)"],
      borderWidth: 1,
      borderRadius: 10,
      circumference: (ctx)=>{
        return ctx.dataset.data[0] / 18 * 270
      }
    },
    {
      label: "Offline Sales",
      data: [12],
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)"],
      borderWidth: 1,
      borderRadius: 10,
      circumference: (ctx)=>{
        return ctx.dataset.data[0] / 18 * 270
      }
    },
    {
      label: "Returns",
      data: [6],
      backgroundColor: ["rgba(255, 206, 86, 0.2)"],
      borderColor: ["rgba(255, 206, 86, 1)"],
      borderWidth: 1,
      borderRadius: 10,
      circumference: (ctx)=>{
        return ctx.dataset.data[0] / 18 * 270
      }
    },
  ],
};

// config
const config1 = {
  type: "doughnut",
  data: data1,
  options: {
    plugins:{
      legend:{
        onClick: (evt, legendItem, legend)=>{
          // console.log("evt", evt);
          // console.log( legendItem.text);
          console.log("legend", legend);
          const datasets = legend.legendItems.map((dataset, index)=>{
            return dataset.text;
          })
          console.log("datasets", datasets);
          const index = datasets.indexOf(legendItem.text);
          console.log("index", index);

          if(legend.chart.isDatasetVisible(index) === true){
            legend.chart.hide(index);
          }else{
            legend.chart.show(index);
          }
        },
        labels:{
          generateLabels: (chart1)=>{
            let visibility = [];
            for(let i = 0; i < chart1.data.datasets.length; i++){
              if(chart1.isDatasetVisible(i) === false){
                visibility.push(true);
              }else{
                visibility.push(false);
              }
            }

            console.log("chart1", chart1);
            return chart1.data.datasets.map(
              (dataset, index)=>({
                text: dataset.label,
                fillStyle: dataset.backgroundColor,
                strokeStyle: dataset.borderColor,
                fontColor: dataset.borderColor,
                hidden: visibility[index]
            })
            )
          }
        }
      }
    },
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
  },
};

const graph4 = new Chart(document.getElementById("radialBar"), config1);

// setup for line chart with multiple datasets
const data = {
  labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  datasets: [
    {
      label: "Weekly Sales",
      data: [20, 15, 9, 10, 18, 6, 11],
      backgroundColor: ["rgba(255, 26, 104, 0.2)"],
      borderColor: ["rgba(255, 26, 104, 1)"],
      borderWidth: 1,
    },
    {
      label: "Yearly Sales",
      data: [18, 12, 6, 9, 12, 3, 9],
      backgroundColor: ["rgba(54, 162, 235, 0.2)"],
      borderColor: ["rgba(54, 162, 235, 1)"],
      borderWidth: 1,
    },
    {
      label: "Daily Sales",
      data: [15, 12, 25, 14, 5, 7, 12],
      backgroundColor: ["rgba(255, 206, 86, 0.2)"],
      borderColor: ["rgba(255, 206, 86, 1)"],
      borderWidth: 1,
    },
  ],
};

// config
const config = {
  type: "line",
  data,
  options: {
    tension: 0.4,
    plugins: {
      legend: {
        onClick: (evt, legendItem, legend) => {
          // console.log("evt", evt);
          // console.log(legendItem.text);
          console.log("legend", legend);
          const datasets = legend.legendItems.map((dataset, index) => {
            return dataset.text;
          });
          console.log("datasets", datasets);
          const index = datasets.indexOf(legendItem.text);
          console.log("index", index);

          if (legend.chart.isDatasetVisible(index) === true) {
            legend.chart.hide(index);
          } else {
            legend.chart.show(index);
          }
        },
        labels: {
          generateLabels: (chart) => {
            let visibility = [];
            for (let i = 0; i < chart.data.datasets.length; i++) {
              if (chart.isDatasetVisible(i) === false) {
                visibility.push(true);
              } else {
                visibility.push(false);
              }
            }
            console.log("chart", chart);
            return chart.data.datasets.map((dataset, index) => ({
              text: dataset.label,
              fillStyle: dataset.backgroundColor,
              strokeStyle: dataset.borderColor,
              fontColor: dataset.borderColor,
              hidden: visibility[index],
            }));
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 30,
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);
