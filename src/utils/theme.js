let baseSpacing = 20;
let scale = 6;
if (baseSpacing === 0) {
  baseSpacing = 10;
}

if (scale === 0) {
  scale = 6;
}

// eslint-disable-next-line import/no-mutable-exports
let colors = {};

const colorArray = function colorArray(array, prefix) {
  return array.forEach((color, index) => {
    colors[`${prefix}-${index + 1}`] = color;
  });
};

const borderSize = '2px';

const themeHeights = {
  small: '160px',
  medium: '320px',
  large: '640px',
};
const themeWidths = {
  small: '160px',
  medium: '320px',
  large: '640px',
};

const brandColor = '#555';
const accentColors = ['#6FFFB0', '#FD6FFF', '#81FCED', '#FFCA58'];
const neutralColors = ['#00873D', '#3D138D', '#00739D', '#A2423D'];
const statusColors = {
  critical: '#FF4040',
  error: '#FF4040',
  warning: '#FFAA15',
  ok: '#00C781',
  unknown: '#CCCCCC',
  disabled: '#CCCCCC',
};
const brandRgba = 'rgba(61, 61, 61, 1)';
const greenColorsRgba = 'rgba(108, 184, 141, 1)';
const orangeColorsRgba = 'rgba(245, 137, 76, 1)';
const blueColorsRgba = 'rgba(126, 196, 237, 1)';

const rgbaColors = {
  brand: brandRgba,
  green: greenColorsRgba,
  orange: orangeColorsRgba,
  blue: blueColorsRgba,
};
const greenColors = ['#EEFAF3', '#C8EBD7', '#9BD5B4', '#6CB88D', '#439A69'];
const orangeColors = ['#FFBB94', '#FFAA7A', '#FF9C64', '#F5894C', '#FA7930'];
const blueColors = ['#FFFFFF', '#DBF3FC', '#ABDEF1', '#7EC4ED', '#55A3C1'];
const darkColors = [
  '#333333',
  '#555555',
  '#777777',
  '#999999',
  '#999999',
  '#999999',
];
const lightColors = [
  '#F8F8F8',
  '#F2F2F2',
  '#EDEDED',
  '#DADADA',
  '#DADADA',
  '#DADADA',
];

colors = {
  black: '#000000',
  white: '#FFFFFF',
  brand: brandColor,
  text: {
    dark: '#f8f8f8',
    light: '#444444',
  },
  control: {
    dark: 'accent-1',
    light: 'brand',
  },
  focus: brandColor,
  primaryTextColor: '#555',
};
colorArray(lightColors, 'light');
colorArray(darkColors, 'dark');
colorArray(greenColors, 'green');
colorArray(orangeColors, 'orange');
colorArray(blueColors, 'blue');
colorArray(accentColors, 'accent');
colorArray(neutralColors, 'neutral');
Object.keys(statusColors).forEach((color) => {
  colors[`status-${color}`] = statusColors[color];
});

const gradientLinear = function gradientLinear(color, deg = '45') {
  const gradient = {};

  gradient[color] = `linear-gradient(${deg}deg, ${colors[`${color}-5`]} 45%, ${
    colors[`${color}-2`]
  } 45%)`;

  return gradient;
};
const gradientRadial = function gradientRadial(color, range = '0 140') {
  const gradient = {};
  gradient[color] = `radial-gradient(ellipse farthest-corner at ${range}%, ${
    colors[`${color}-5`]
  } 45%, ${colors[`${color}-2`]} 45%)`;

  return gradient;
};
const breakpoints = {
  small: {
    value: baseSpacing * 32, // 640
  },
  medium: {
    value: baseSpacing * 64, // 1280
  },
  large: {
    value: '1600', // 1600
  },
};

export {
  themeHeights,
  themeWidths,
  breakpoints,
  borderSize,
  rgbaColors,
  gradientLinear,
  gradientRadial,
  colors,
};
