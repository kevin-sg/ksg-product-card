import React from 'react';
import '../setupTest';
import { mount } from 'enzyme';

import ProductCard, { ProductTitle } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTitle', () => {
  test('Debe mostrar el componente correctamente con el titulo', () => {
    const wrapper = mount(<ProductTitle title="Custom Product" className="custom-class" />);
    expect(wrapper).toMatchSnapshot();
  });

  test('Debe mostrar el componente con el nombre del producto', () => {
    const wrapper = mount(<ProductCard product={product1}>{() => <ProductTitle />}</ProductCard>);
    expect(wrapper).toMatchSnapshot();
  });
});
