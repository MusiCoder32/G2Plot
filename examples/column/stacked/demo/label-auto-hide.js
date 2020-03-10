import { StackedColumn } from '@antv/g2plot';

const data = [
  {
    year: '1991',
    value: 3,
    type: 'Lon',
  },
  {
    year: '1992',
    value: 4,
    type: 'Lon',
  },
  {
    year: '1993',
    value: 7,
    type: 'Lon',
  },
  {
    year: '1994',
    value: 0.5,
    type: 'Lon',
  },
  {
    year: '1995',
    value: 4.9,
    type: 'Lon',
  },
  {
    year: '1996',
    value: 6,
    type: 'Lon',
  },
  {
    year: '1997',
    value: 7,
    type: 'Lon',
  },
  {
    year: '1998',
    value: 9,
    type: 'Lon',
  },
  {
    year: '1999',
    value: 0.5,
    type: 'Lon',
  },
  {
    year: '1991',
    value: 0.3,
    type: 'Bor',
  },
  {
    year: '1992',
    value: 4,
    type: 'Bor',
  },
  {
    year: '1993',
    value: 0.5,
    type: 'Bor',
  },
  {
    year: '1994',
    value: 5,
    type: 'Bor',
  },
  {
    year: '1995',
    value: 4.9,
    type: 'Bor',
  },
  {
    year: '1996',
    value: 6,
    type: 'Bor',
  },
  {
    year: '1997',
    value: 0.5,
    type: 'Bor',
  },
  {
    year: '1998',
    value: 9,
    type: 'Bor',
  },
  {
    year: '1999',
    value: 13,
    type: 'Bor',
  },
  {
    year: '1991',
    value: 1,
    type: 'Wiz',
  },
  {
    year: '1992',
    value: 2,
    type: 'Wiz',
  },
  {
    year: '1993',
    value: 5,
    type: 'Wiz',
  },
  {
    year: '1994',
    value: 4,
    type: 'Wiz',
  },
  {
    year: '1995',
    value: 6,
    type: 'Wiz',
  },
  {
    year: '1996',
    value: 2,
    type: 'Wiz',
  },
  {
    year: '1997',
    value: 10,
    type: 'Wiz',
  },
  {
    year: '1998',
    value: 12,
    type: 'Wiz',
  },
  {
    year: '1999',
    value: 3,
    type: 'Wiz',
  },
];

const columnPlot = new StackedColumn(document.getElementById('container'), {
  forceFit: true,
  title: {
    visible: true,
    text: '堆叠柱状图：label自动隐藏',
  },
  description: {
    visible: true,
    text:
      '在堆叠柱状图中，如果label的位置被设定为middle，即显示在柱形中间。在对应柱形大小不够摆放label的情况下，label会被自动隐藏。',
  },
  data,
  xField: 'year',
  yField: 'value',
  yAxis: {
    min: 0,
  },
  stackField: 'type',
  label: {
    visible: true,
    position: 'middle',
  },
});

columnPlot.render();
