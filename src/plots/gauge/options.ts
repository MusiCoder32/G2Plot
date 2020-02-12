import { ViewConfig } from '../../base/view-layer';

interface GaugeStyle {
  fontColor?: string;
  fontOpacity?: number;
  fontSize?: number;
  borderOpacity?: number;
  borderWidth?: number;
  size?: number;
  tickLabelOffset?: number[];
}

export interface GaugeViewConfig extends ViewConfig {
  startAngle?: number;
  endAngle?: number;
  min?: number;
  max?: number;
  value?: number;
  showValue?: boolean;
  format?: (...args: any[]) => string;
  gaugeStyle?: GaugeStyle;
  range: number[];
  styleMix?: any;
  valueText?: string;
  statistic: any; // todo: 指标卡类型定义
}

/**
 * 仪表盘默认配置
 */
export const DEFAULT_GAUGE_CONFIG = {
  style: 'standard',
  startAngle: -7 / 6,
  endAngle: 1 / 6,
  range: [0, 25, 50, 75, 100],
  gaugeStyle: {
    tickLineColor: 'rgba(0,0,0,0)',
    pointerColor: '#bfbfbf',
    statisticPos: ['50%', '100%'],
  },
};