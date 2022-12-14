import React from 'react';
import Button from 'components/atoms/Button/Button';
import { withKnobs, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => {
    const label = 'Colors';
    const options = {
      Primary: 'hsl(49, 100%, 58%)',
      Secondary: 'hsl(196, 83%, 75%)',
      Tertiary: 'hsl(106, 47%, 64%)',
    };
    const defaultValue = 'hsl(49, 100%, 58%)';
    const groupId = 'GROUP-ID1';

    const value = select(label, options, defaultValue, groupId);
    return <Button color={value}>jeden</Button>;
  })
  .add('Secondary', () => <Button secondary>jeden</Button>);