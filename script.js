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
// let dataset1 = {
//   label: "Offline sales",
//   data: [12],
//   backgroundColor: ["salmon"],
//   borderColor: ["white"],
//   borderWidth: 5,
//   borderRadius: 10,
//   circumference: (e)=>{
//     console.log(e);
//     console.log(e.dataset.data[0]);
//     return e.dataset.data[0] / 12 * 270;
//   }
// };

// let dataset2 = {
//   label: "Online sales",
//   data: [9],
//   backgroundColor: ["lightblue"],
//   borderColor: ["white"],
//   borderRadius: 10,
//   borderWidth: 5,
//   circumference: (ctx)=>{
//     console.log(ctx);
//     console.log(ctx.dataset.data[0]);
//     return ctx.dataset.data[0] / 12 * 270;
//   }
// };

// let dataset3 = {
//   label: "Returns",
//   data: [6],
//   backgroundColor: ["lightgreen"],
//   borderColor: ["white"],
//   borderRadius: 10,
//   borderWidth: 5,
//   circumference: (ctx)=>{
//     console.log(ctx.dataset.data[0]);
//     return ctx.dataset.data[0] / 12 * 270;
//   }
// };

// let data = {
//   labels: ["Offline sales", "Online sales", "Returns"],
//   datasets: [dataset1,dataset2,dataset3]
// };

let radialBarChart = document.getElementById("radialBar");
let graph4 = new Chart(radialBarChart, {
  type: "doughnut",
  data:{
    labels: ['OnlineSales', 'OfflineSales', 'Returns'],
    datasets:[
    {
       label: 'OnlineSales',
       data: [12],
       backgroundColor: ['red'],
       
    },
    {
      label: 'OfflineSales',
      data: [9],
      backgroundColor: ['blue']
    },
    {
      label: 'Returns',
      data: [6],
      backgroundColor: ['green']
    }
    // {
    //   data:[12,9,6],
    //   backgroundColor:['red', 'green', 'blue']
    // }
  ]
  },
  options:{
    responsive: true,
  }
});
