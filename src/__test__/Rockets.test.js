import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rockets from '../Pages/Rockets';
import store from '../redux/configureStore';

describe('Rockets test', () => {
  test('snapshot for rockets', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Rockets />
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
