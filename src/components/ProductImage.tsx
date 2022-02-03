import React, { CSSProperties, useContext } from 'react';

import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';
import noImage from '../assets/no-image.jpg';

export interface Props {
  className?: string;
  img?: string;
  style?: CSSProperties;
}

/**
 *
 * @param {string} title - A string optional params
 * @param {string} img - A string optional params
 * @param {string} className - A string optional params
 * @param {CSSProperties} style - A object optional params
 * @returns {JSX.Element} - JSX.Element
 */
export const ProductImage = ({ img, className, style }: Props): JSX.Element => {
  const { product } = useContext(ProductContext);

  return (
    <img
      className={`${styles.productImg} ${className || ''}`}
      style={style}
      src={img ? img : product.img ? product.img : noImage}
      alt="Product"
    />
  );
};
