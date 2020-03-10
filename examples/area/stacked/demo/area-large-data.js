import { StackedArea } from '@antv/g2plot';

fetch('../data/emissions.json')
  .then((res) => res.json())
  .then((data) => {
    const plot = new StackedArea(document.getElementById('container'), {
      title: {
        visible: true,
        text: 'The causes of CO2 emissions',
      },
      padding: 'auto',
      data,
      xField: 'year',
      yField: 'value',
      seriesField: 'category',
      xAxis: {
        type: 'time',
        mask: 'YYYY',
      },
      yAxis: {
        label: {
          // 数值格式化为千分位
          formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`),
        },
      },
      responsive: true,
    });

    plot.render();
  });
