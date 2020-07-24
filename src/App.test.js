import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('Renderizado inicial sin problemas', () => {

  let products = [];
  let search = '';
  let events = {};
  let setSearchMock = jest.fn();

  beforeEach(() => {
    products = [];
    search = '';
    const event = {
      preventDefault() {},
      target: { value: search }
    };
    setSearchMock = jest.fn();
  });

  test('Render de la Aplicación', () => {
    const { getByTestId } = render(<App />);
    const searchBar = getByTestId('App');
    expect(searchBar).toBeInTheDocument();
  });
});


