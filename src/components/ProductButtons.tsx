import React, { CSSProperties, useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props {
  className?: string;
  style?: CSSProperties;
}

/**
 * @param {string} className - A string optional params
 * @param {CSSProperties} style - A object optional params
 * @returns {JSX.Element} - JSX.Element
 */
export const ProductButtons = ({ className, style }: Props): JSX.Element => {
  const { counter, maxCount, increaseBy } = useContext(ProductContext);

  const isMaxReached = useCallback((): boolean => !!maxCount && counter === maxCount, [counter, maxCount]);

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${isMaxReached() ? styles.disabled : ''} `}
        onClick={() => increaseBy(+1)}
      >
        +
      </button>
    </div>
  );
};
