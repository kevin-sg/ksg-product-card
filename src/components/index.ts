import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductTitle } from './ProductTitle';
import { ProductImage } from './ProductImage';
import { ProductButtons } from './ProductButtons';

import { ProductCardHOCProps } from '../interfaces/interfaces';

/**
 *
 * @param {string} className - A string optional params
 * @param {object} style - A object optional params
 * @param {number} value - A string optional params
 * @param {object} product - A object required params
 * @param {object} initialValues - A object required params
 * @param {children} children - A object optional params
 * @returns JSX.Element
 */
const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export { ProductCard, ProductButtons, ProductImage, ProductTitle };
