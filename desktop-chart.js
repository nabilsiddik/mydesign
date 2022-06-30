// media screes with js


let graphType = '';
let query = window.matchMedia("(max-width: 767px)");
if(query.matches){
    graphType = 'line'
}else{
    graphType = 'line'
}


// for chart graph
let ctx = document.getElementById('myChart').getContext('2d')

// gradient fill
let gradient = ctx.createLinearGradient(0,0,0, 500)
gradient.addColorStop(0,'rgba(59, 208, 81, 1)')
gradient.addColorStop(1, 'rgba(59, 208, 81, 0)')

const labels = [
    'Apr 01',
    'Apr 02',
    'Apr 03',
    'Apr 01',
    'Apr 04',
    'Apr 05',
]


const data = {
    labels,
    datasets:[{
        data:[300, 100, 300, 250, 300, 200, 300, 450],
        label: 'Product Sales',
        fill: true,
        backgroundColor: gradient,
        borderColor: '#3CCC5B',
        pointBackgroundColor: 'rgba(59, 208, 81, 1)',
        tension: .5,
    }]
}


const config = {
    type: graphType,
    data: data,
    options: {
      plugins: {
        legend: {
            display: false,
        },
      },
      radius: 3,
      hitRadius: 90,
      hoverRadius: 6,
      responsive: true,
      animation: {
        onComplete: () => {
            delayed = true;
        },
        delay: (context) => {
            let delay = 0;
            if(context.type === "data" && context.mode === "default" && !delay){
                delay = context.dataIndex * 300 + context.datasetIndex * 100;
            }
            return delay;
        },
      },
      scales:{
        X:{
            grid: {
                display: false,
                drawTicks: false,
                drawOnChartArea: false,
            },
        },
        y:{
            grid: {
                display: false,
                drawTicks: false,
                drawOnChartArea: false,
            },
            ticks:{
                // callback: function(value){
                //     return '$' + value
                // },
                display: false,
            },
        }
      }
    },
  };

const myChart = new Chart(ctx, config)

