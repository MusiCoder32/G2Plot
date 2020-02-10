import { Shape } from '@antv/g';
import { GeometryLabel, registerGeometryLabel } from '@antv/g2';
import _cloneDeep from '@antv/util/lib/clone';
import _each from '@antv/util/lib/each';
// import verticalShatter from '../../../../util/layout/verticalShatter';

const MARGIN = 10;

class LineElementLabels extends GeometryLabel {
  public showLabels(points: any, shapes: Shape[]) {
    const labelPoints = [];
    _each(shapes, (shape) => {
      const originData = shape.get('origin');
      const lastPoint = _cloneDeep(originData[originData.length - 1]);
      const bbox = shape.getBBox();
      lastPoint.x = bbox.maxX + MARGIN;
      labelPoints.push(lastPoint);
    });
    super.showLabels(labelPoints, shapes);
    const renderer = this.get('labelsRenderer');
    const field = this.get('labelOptions').fields[0];
    const labels = renderer.get('group').get('children');
    const view = this.get('element').get('view');
    _each(labels, (label) => {
      label.attr('textAlign', 'left');
      label.attr('textBaseline', 'middle');
      const origin = label.get('origin');
      const shapeId = this.get('element').getShapeId(origin);
      const color = this._adjustColor(shapeId, shapes);
      label.attr('fill', color);
    });
    view.get('canvas').draw();
  }

  public _adjustColor(shapeId, shapes) {
    let color;
    _each(shapes, (shape) => {
      const id = shape.id;
      if (id === shapeId) {
        color = shape.attr('stroke');
      }
    });
    return color;
  }
}

registerGeometryLabel('line', LineElementLabels);
