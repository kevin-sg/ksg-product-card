import React from 'react';
import '../setupTest';
import { mount } from 'enzyme';

import ProductCard from '../../src/components';
import { product1 } from '../data/products';
import { act } from 'react-dom/test-utils';

describe('ProductCard', () => {
  test('Debe mostrar componente con la imagen del producto', () => {
    const wrapper = mount(
      <ProductCard product={product1}>{() => <h1>Product Card</h1>}</ProductCard>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe incrementar el contador', () => {
    const wrapper = mount(
      <ProductCard product={product1}>
        {({ count, increaseBy }) => (
          <>
            <h1>Product Card</h1>
            <span>{count}</span>
            <button onClick={() => increaseBy(1)}>Increment</button>
          </>
        )}
      </ProductCard>
    );
    expect(wrapper).toMatchSnapshot();

    act(() => {
      (wrapper as any).find('button').prop('onClick')();
    });

    expect(wrapper.find('span').text()).toBe('1');
  });
});
