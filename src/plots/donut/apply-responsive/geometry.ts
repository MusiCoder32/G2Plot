import { getCoordinate } from '@antv/coord';
import VariableNodes from '../../../util/responsive/node/variable-node';
import Responsive from '../../../util/responsive/responsive';
import RingLayer from '../layer';

export default function responsiveRing(layer: RingLayer) {
  const props = layer.options;
  const responsiveTheme = layer.getResponsiveTheme();
  const padding = props.padding;
  const radius = props.radius ? props.radius : 1;
  const { width, height } = layer;
  /** 创建坐标系 */
  const polar = getCoordinate('polar');
  const coord = new polar({
    radius,
    start: { x: padding[3], y: padding[0] },
    end: { x: width - padding[1], y: height - padding[2] },
  });
  const region = {
    radius,
    coord,
  };
  const nodes = new VariableNodes({
    nodes: [{ name: 'innerRadius', value: 0 }],
  });

  const { constraints } = responsiveTheme.ring;
  new Responsive({
    nodes,
    constraints,
    region,
    plot: layer,
    onEnd: () => {
      props.innerRadius = nodes.nodes[0].value;
    },
  });
}
