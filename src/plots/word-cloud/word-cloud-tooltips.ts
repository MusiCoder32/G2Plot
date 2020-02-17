/**
 * Create By Bruce Too
 * On 2020-02-14
 */
import * as _ from '@antv/util';
import HtmlTooltip from '@antv/component/lib/tooltip/html';
import { TooltipCfg } from '@antv/component/lib/tooltip/interface';

export default class WordCloudTooltips extends HtmlTooltip {
  constructor(cfg: TooltipCfg) {
    const newCfg = _.deepMix({}, cfg, {
      itemTpl: `<div data-index={index}>
        <span style="background-color:{color};" class="g2-tooltip-marker"></span>
        {name}<span class="g2-tooltip-value">{value}</span></div>`,
    });
    super(newCfg);
  }
}