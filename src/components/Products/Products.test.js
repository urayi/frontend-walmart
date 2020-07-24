import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Products from './Products';

const data = {
  "success": true,
  "isPromotion": true,
  "data": [
    {
      "_id": "5f19a730f286f20e64f75c48",
      "id": 1,
      "brand": "JOSE eqrceli",
      "description": "rlñlw brhrka",
      "image": "www.lider.cl/catalogo/images/whiteLineIcon.svg",
      "price": 249362
    },
    {
      "_id": "5f19a730f286f20e64f75c49",
      "id": 2,
      "brand": "dsaasd",
      "description": "zlrwax bñyrh",
      "image": "www.lider.cl/catalogo/images/babyIcon.svg",
      "price": 130173
    },
    {
      "_id": "5f19a730f286f20e64f75c75",
      "id": 46,
      "brand": "dsasd",
      "description": "muqn qblmiklf",
      "image": "www.lider.cl/catalogo/images/furnitureIcon.svg",
      "price": 32838
    },
    {
      "_id": "5f19a730f286f20e64f75e09",
      "id": 450,
      "brand": "dsasd",
      "description": "hehj qñznvjmt",
      "image": "www.lider.cl/catalogo/images/gamesIcon.svg",
      "price": 99739.5
    }
  ]
}


let container = null;
beforeEach(() => {
  // configurar un elemento del DOM como objetivo del renderizado
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // limpieza al salir
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renderiza con o sin Data", () => {
  act(() => {
    render(<Products />, container);
  });
  expect(container.products).toBe([]);

  act(() => {
    render(<Products products={data} isPromotion={false} />, container);
  });
  expect(container.products).toBe(data);
  expect(container.products).toBe(false);

});
