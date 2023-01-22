Highcharts.chart('colcontainer', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Mangos', 'Grapefruit', 'Apples', 'Grapes', 'Bananas']
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'Tyson',
        data: [10, -5, 8, 7, 9]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});