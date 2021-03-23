import {city} from './increment-city';
import {ActionType} from '../action';

describe(`Работа Редуктора city`, () => {
  it(`Редуктор без дополнительных параметров должен возвращать исходное состояние`, () => {
    expect(city(undefined, {}))
      .toEqual({city: `Paris`, cities: [`Paris`, `Cologne`, `Brussels`, `Amsterdam`, `Hamburg`, `Dusseldorf`]});
  });

  it(`Выбор города`, () => {
    const state = {city: `Paris`, cities: [`Paris`, `Cologne`]};
    const citySelection = {
      type: ActionType.INCREMENT_CITY,
      payload: `Cologne`
    };

    expect(city(state, citySelection))
      .toEqual({city: `Cologne`, cities: [`Paris`, `Cologne`]});
  });
});
