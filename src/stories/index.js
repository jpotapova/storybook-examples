import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import '../index.css';
import Happy from '../components/Happy';
import Heading from '../components/Heading';
import Card from '../components/Card';

// 1 most simple case - simple static component
storiesOf('Success')
  .add('animation', () => <Happy />);

// 2 several stories under one heading
storiesOf('Heading')
  .add('h1', () => <Heading>This is h1 heading</Heading>)
  .add('h2', () => <Heading size={2}>This is h2 heading</Heading>);

storiesOf('Card')
  .addDecorator(storyFn => <div class="app"><div class="container">{storyFn()}</div></div>)
  .add('regular', () => <Card>This is a card</Card>)
  .add('padded', () => <Card padded>This is a padded card</Card>)
  .add('selected', () => <Card padded selected>This is a selected card</Card>);

storiesOf('Card')
  .addDecorator(storyFn => <div class="app"><div class="container">{storyFn()}</div></div>)
  .addDecorator(withKnobs)
  .add('interactive', () => <Card padded selected={boolean('Selected', false)}>{text('Cart content', 'Change me!')}</Card>);
