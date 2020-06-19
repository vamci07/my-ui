import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
  fontBase: 'Lato',
  appBorderRadius: 8,
});

addons.setConfig({
  showRoots: true,
  panelPosition: 'bottom',
  theme,
});
