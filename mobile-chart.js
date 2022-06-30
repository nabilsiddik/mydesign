// for chart graph
let ctx_mobile = document.getElementById('myChart_mobile').getContext('2d')

// gradient fill
let gradient_mobile = ctx.createLinearGradient(0,0,0, 500)
gradient.addColorStop(0,'rgba(59, 208, 81, 1)')
gradient.addColorStop(1, 'rgba(59, 208, 81, 0)')

const labels_mobile = [
    'Apr 01',
    'Apr 02',
    'Apr 03',
    'Apr 01',
    'Apr 04',
    'Apr 05',
]


const data_mobile = {
    labels_mobile,
    datasets:[{
        data:[300, 100, 300, 250, 300, 200, 300, 450],
        label: 'Product Sales',
        fill: true,
        backgroundColor: gradient_mobile,
        borderColor: '#3CCC5B',
        pointBackgroundColor: 'rgba(59, 208, 81, 1)',
        tension: .5,
    }]
}



const myChart_mobile = new Chart(ctx_mobile, config)

