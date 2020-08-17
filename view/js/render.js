// initialize echarts instance with prepared DOM
var myChart = echarts.init(document.getElementById('echarts'));

// draw chart
myChart.setOption({
    title: {
        text: 'Test {a0|Style}',
        textStyle: {
            fontFamily: 'Kokila',
            rich: {
                a0: {
                    fontWeight: 'bold'
                }
            } 
        }
    }
});