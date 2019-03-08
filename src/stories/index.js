import React from 'react';

import { storiesOf } from '@storybook/react';

import Happy from '../components/Happy';

// 1 most simple case - simple static component
storiesOf('Success')
  .add('animation', () => <Happy />);
