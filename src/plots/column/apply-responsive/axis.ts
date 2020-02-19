import ApplyResponsiveAxis from '../../../util/responsive/apply/axis';
import ColumnLayer from '../layer';

export default function responsiveAxis(layer: ColumnLayer) {
  const responsiveTheme = layer.getResponsiveTheme();
  const canvas = layer.canvas;
  // x-axis
  const x_responsiveAxis = new ApplyResponsiveAxis({
    plot: layer,
    responsiveTheme,
    dim: 'x',
  });
  // y-axis
  const y_responsiveAxis = new ApplyResponsiveAxis({
    plot: layer,
    responsiveTheme,
    dim: 'y',
  });

  canvas.draw();
}
