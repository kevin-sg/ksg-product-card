import React, { CSSProperties, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
  title?: string;
}

/**
 *
 * @param {string} className - A string optional params
 * @param {CSSProperties} style - A object optional params
 * @param {string} title - A string optional params
 * @param {object} initialValues - A object requiered params
 * @param {object} product - A object requiered params
 * @returns {JSX.Element} - JSX.Element
 */
export const ProductTitle = ({ title, className, style }: Props): JSX.Element => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className || ''}`} style={style}>
      {title ? title : product.title}
    </span>
  );
};
