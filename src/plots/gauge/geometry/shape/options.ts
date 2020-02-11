/**
 * @author linhuiw
 * @description 存放仪表盘的配置项，比如指针的颜色、粗细等
 */
const basicPointerStyleDark = {
  color: '#CFCFCF',
  circleColorTop: '#2E364B',
  circleColorBottom: 'rgba(235,237,242,0.1)',
  thickness: 4.5,
};

export const getOptions = function(name: string, theme: string, colors: string[]) {
  const basicPointerStyle = basicPointerStyleDark;
  const ringBackground = '#f0f0f0';
  const common = {
    color: '#F6445A',
    thickness: 24,
    radius: 1,
    angle: 240,
    textPosition: '100%',
    bottomRatio: 7,
  };

  switch (name) {
    case 'standard':
      return {
        ringStyle: {
          ...common,
          background: ringBackground,
          axis: {
            amount: 21,
            offset: -35,
            length: 5,
            thickness: 2,
            color: 'rgba(255,255,255,0.4)',
          },
        },
        pointerStyle: {
          ...basicPointerStyle,
          radius: 0.5,
        },
      };
    case 'meter':
      return {
        ringStyle: {
          ...common,
          background: ringBackground,
          axis: {
            amount: 25,
            offset: -35,
            length: 2,
            thickness: 1,
            color: 'rgba(255,255,255,0.4)',
          },
        },
        pointerStyle: {
          ...basicPointerStyle,
          radius: 0.5,
        },
      };
    case 'fan':
      return {
        ringStyle: {
          color: '#F6445A',
          background: ringBackground,
          thickness: 70,
          radius: 1,
          angle: 120,
          textPosition: '125%',
          bottomRatio: 3.5,
          axis: {
            amount: 10,
            offset: 5,
            length: 3,
            thickness: 3,
            color: 'rgba(255,255,255,0.6)',
          },
        },
        pointerStyle: {
          ...basicPointerStyle,
          radius: 0.6,
        },
      };
    default:
      break;
  }
};
