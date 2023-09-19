document.querySelector("#btn").addEventListener("click",function(){
    document.querySelector(".sidebar").classList.toggle("active");
    document.querySelector(".home-content").classList.toggle("active");
});

const xValues = ["Active Items", "Sold Items"];
const yValues = [79, 21];
const barColors = [
  "#2D4459",
  "#B9B4C7"
];

new Chart("donutChart", {
  type: "doughnut",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    title: {
      display: false,
      text: "Items"
    }
  }
});