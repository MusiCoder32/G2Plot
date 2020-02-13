import * as _ from '@antv/util';
import { registerPlotType } from '../../base/global';
import { LayerConfig } from '../../base/layer';
import { ElementOption, Label } from '../../interface/config';
import BaseBarLayer, { BarViewConfig } from '../bar/layer';
import StackBarLabel from './component/label';

export interface StackBarViewConfig extends BarViewConfig {
  stackField: string;
}

export interface StackBarLayerConfig extends StackBarViewConfig, LayerConfig {}

export default class StackBarLayer<T extends StackBarLayerConfig = StackBarLayerConfig> extends BaseBarLayer<T> {
  public static getDefaultOptions() {
    return _.deepMix({}, super.getDefaultOptions(), {
      xAxis: {
        visible: true,
        autoHideLabel: false,
        autoRotateLabel: false,
        autoRotateTitle: false,
        grid: {
          visible: true,
        },
        line: {
          visible: false,
        },
        tickLine: {
          visible: true,
        },
        label: {
          visible: true,
        },
        title: {
          visible: true,
          offset: 12,
        },
      },
      yAxis: {
        visible: true,
        autoHideLabel: false,
        autoRotateLabel: false,
        autoRotateTitle: true,
        grid: {
          visible: false,
        },
        line: {
          visible: false,
        },
        tickLine: {
          visible: false,
        },
        label: {
          visible: true,
        },
        title: {
          visible: false,
          offset: 12,
        },
      },
      legend: {
        visible: true,
        position: 'top-left',
        offsetY: 0,
      },
    });
  }

  public type: string = 'stackBar';

  protected adjustBar(bar: ElementOption) {
    bar.adjust = [
      {
        type: 'stack',
      },
    ];
  }

  protected renderLabel(){
    if (this.options.label && this.options.label.visible) {
      const label = new StackBarLabel({
        view: this.view,
        plot: this,
        ...this.options.label,
      });
      label.render();
    }
  }

}

registerPlotType('stackBar', StackBarLayer);
