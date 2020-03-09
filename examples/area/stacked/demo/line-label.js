import { StackedArea } from '@antv/g2plot';

fetch('../data/oil.json')
  .then((res) => res.json())
  .then((data) => {
    const areaPlot = new StackedArea(document.getElementById('container'), {
      title: {
        visible: true,
        text: '堆叠面积图 - lineLabel',
      },
      description: {
        visible: true,
        text: '当label类型设置为line时，label与面积区域尾端顶部对齐。',
      },
      padding: [20, 100, 100, 50],
      data,
      xField: 'date',
      yField: 'value',
      stackField: 'country',
      xAxis: {
        type: 'dateTime',
        tickCount: 5,
      },
      label: {
        visible: true,
        type: 'line',
      },
      legend: {
        visible: false,
      },
      responsive: true,
    });
    areaPlot.render();
  });
