import React from 'react';
import {render} from '@testing-library/react';
import {CityButton} from './city-button-component';

it(`Should CityButton render correctly`, () => {
  const {container} = render(<CityButton />);
  expect(container).toMatchSnapshot();
});
