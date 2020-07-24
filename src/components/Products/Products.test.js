import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from './Products';

describe('Sample Test', () => {
  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})

describe('Renderizado inicial sin problemas', () => {

  let products = [];
  let isPromotion = false;

  beforeEach(() => {
    products = [];
    isPromotion = false;
  });

  test('Render sin productos', () => {
    const { getByTestId } = render(<Products products={products} isPromotion={isPromotion} />);
    const product = getByTestId('Products');
    expect(product).toBeInTheDocument();
  });


  test('Render con productos sin descuento', () => {
    products = [
      {
        "id": 2,
        "brand": "dsaasd",
        "description": "zlrwax bñyrh",
        "image": "www.lider.cl/catalogo/images/babyIcon.svg",
        "price": 130173
      },
      {
        "id": 18,
        "brand": "asdfdsa",
        "description": "zdczs omedat",
        "image": "www.lider.cl/catalogo/images/smartphoneIcon.svg",
        "price": 849666
      }
    ];

    const { getByTestId } = render(<Products products={products} />);
    const product = getByTestId('Products');
    expect(product).toBeInTheDocument();
  });

  test('Render con productos con descuento', () => {
    isPromotion = true;
    products = [
      {
        "id": 552,
        "brand": "asdsa",
        "description": "iykqer mrbbd",
        "image": "www.lider.cl/catalogo/images/babyIcon.svg",
        "price": 301503.5
      },
      {
        "id": 616,
        "brand": "asdsa",
        "description": "fvyñlc kicnh",
        "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
        "price": 240052.5
      }
    ];

    const { getByTestId } = render(<Products products={products} />);
    const product = getByTestId('Products');
    expect(product).toBeInTheDocument();
  });

});