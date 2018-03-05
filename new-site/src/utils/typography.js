import Typography from 'typography';

const typography = new Typography({
  // Base font size & lineheight borrowed from Lincoln theme:
  // https://github.com/KyleAMathews/typography.js/blob/master/packages/typography-theme-lincoln/src/index.js
  baseFontSize: '19px',
  baseLineHeight: 1.58,
  googleFonts: [
    {
      name: 'PT Serif',
      styles: ['400', '400i', '700', '700i']
    },
    {
      name: 'PT Mono',
      styles: ['400'],
    }
  ],
  headerFontFamily: ['PT Serif', 'serif'],
  headerWeight: '700',
  bodyFontFamily: ['PT Mono', 'monospace']
});

export default typography;