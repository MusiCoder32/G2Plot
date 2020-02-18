import { assign } from '@antv/util';
import { EVENT_MAP, IEventmap, onEvent } from '../../util/event';

const SHAPE_EVENT_MAP: IEventmap = {
  onColumnClick: 'interval:click',
  onColumnDblclick: 'interval:dblclick',
  onColumnMousemove: 'interval:mousemove',
  onColumnMousedown: 'interval:mousedown',
  onColumnMouseup: 'interval:mouseup',
  onColumnMouseenter: 'interval:mouseenter',
  onColumnMouseleave: 'interval:mouseleave',
  onColumnContextmenu: 'interval:contextmenu',
};

assign(EVENT_MAP, SHAPE_EVENT_MAP);

export { EVENT_MAP, onEvent };
