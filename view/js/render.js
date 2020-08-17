// initialize echarts instance with prepared DOM
var myChart = echarts.init(document.getElementById('echarts'));

// draw chart
myChart.setOption({
    title: {
        text: 'Test'
    },
    tooltip: {},
    xAxis: {
        data: ['shirt', 'cardign', 'chiffon shirt', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [{
        name: 'sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
});