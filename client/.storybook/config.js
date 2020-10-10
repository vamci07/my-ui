import React from 'react';
import { addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

addDecorator(themeDecorator);

const styles = {
  padding: 24,
  margin: 0,
};
const Center = ({ children }) => <div style={styles}>{children}</div>;

addDecorator((storyFn) => <Center>{storyFn()}</Center>);
