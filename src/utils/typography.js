import Typography from 'typography';
import '../fonts/fonts.css';

export const fonts = {
  regular: 'Lato Regular',
  headline: 'Questrial Regular',
};

const typography = new Typography({
  baseFontSize: '18px',
  headerFontFamily: [fonts.headline, 'sans-serif'],
  bodyFontFamily: [fonts.regular, 'sans-serif'],
  overrideStyles: () => ({
    li: {
      marginBottom: 'unset',
    },
    'h1 code, h2 code, h3 code, h4 code, h5 code, h6 code': {
      fontSize: 'inherit',
    },
  }),
});
// Hot reload typography in development.
// if (process.env.NODE_ENV !== 'production') {
//   typography.injectStyles();
// }

export default typography;
