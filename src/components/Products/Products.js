import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Products.module.css';

const Products = (props) => (
  <div className={styles.Products} data-testid="Products">
    {props.products.map(item => {
      return (
        <div>
          <img alt="imagen de producto" src={item.image}/>
          <p>{item.brand}</p>
          <p>{item.description}</p>
          <p>{item.price}</p>
        </div>
      )
    })}
  </div>
);

// Products.propTypes = { };

Products.defaultProps = {};

export default Products;
