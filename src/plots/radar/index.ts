/**
 * Create By Bruce Too
 * On 2020-02-14
 */
import { deepMix } from '@antv/util';
import BasePlot, { PlotConfig } from '../../base/plot';
import RadarLayer, { RadarViewConfig } from './layer';

export interface RadarConfig extends RadarViewConfig, PlotConfig {}

export default class Radar extends BasePlot<RadarConfig> {
  public static getDefaultOptions: typeof RadarLayer.getDefaultOptions = RadarLayer.getDefaultOptions;

  public createLayers(props) {
    const layerProps = deepMix({}, props);
    layerProps.type = 'radar';
    super.createLayers(layerProps);
  }
}
