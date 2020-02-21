import { deepMix } from '@antv/util';
import BasePlot, { PlotConfig } from '../../base/plot';
import ScatterLayer, { ScatterViewConfig } from './layer';

export interface ScatterConfig extends ScatterViewConfig, PlotConfig {}

export default class Scatter extends BasePlot<ScatterConfig> {
  public static getDefaultOptions: typeof ScatterLayer.getDefaultOptions = ScatterLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = deepMix({}, props);
    layerProps.type = 'scatter';
    super.createLayers(layerProps);
  }
}
