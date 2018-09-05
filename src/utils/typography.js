import Typography from 'typography';

const typography = new Typography({
  // Base font size & lineheight borrowed from Lincoln theme:
  // https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lincoln/src/index.js
  baseFontSize: '18px',
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: 'PT Mono',
      styles: ['400'],
    },
    {
      name: 'Montserrat',
      styles: ['400', '400i', '700', '700i']
    },
  ],
  includeNormalize: true,
  headerWeight: '400',
  headerFontFamily: ['PT Mono', 'monospace'],
  bodyFontFamily: ['Montserrat', 'sans serif'],
  overrideStyles: ({ rhythm }) => ({
    '@media only screen and (max-width:480px)': {
      html: {
        fontSize: `${16 / 16 * 100}%`
      }
    }
  }),
});

export default typography;