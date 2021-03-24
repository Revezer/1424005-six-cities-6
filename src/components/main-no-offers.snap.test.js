import React from 'react';
import {render} from '@testing-library/react';
import MainNoOffers from './main-no-offers';

it(`Should MainNoOffers render correctly`, () => {
  const {container} = render(<MainNoOffers />);
  expect(container).toMatchSnapshot();
});
