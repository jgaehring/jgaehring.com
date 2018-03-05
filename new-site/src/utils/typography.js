import Typography from 'typography';
import theme from 'typography-theme-lincoln';

theme.googleFonts = [
  {
    name: 'PT Serif',
    styles: ['400', '400i', '700', '700i']
  },
  {
    name: 'PT Mono',
    styles: ['400'],
  }
];
theme.headerFontFamily = ['PT Serif', 'serif'];
theme.headerWeight = '700';
theme.bodyFontFamily = ['PT Mono', 'monospace'];

const typography = new Typography(theme);

export default typography;