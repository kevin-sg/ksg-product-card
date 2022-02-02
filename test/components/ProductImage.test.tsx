import React from 'react';
import '../setupTest';
import { mount } from 'enzyme';

import ProductCard, { ProductImage } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {
  test('Debe mostrar el componente con la imagen personalizado', () => {
    const wrapper = mount(<ProductImage img="https://hello-world.jpg" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar componente con la imagen del producto', () => {
    const wrapper = mount(<ProductCard product={product2}>{() => <ProductImage />}</ProductCard>);
    expect(wrapper).toMatchSnapshot();
  });
});
