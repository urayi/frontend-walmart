import React from 'react';
import NumberFormat from 'react-number-format';
// import PropTypes from 'prop-types';
import styles from './Products.module.css';

const Products = (props) => (
  <div className={styles.Products}>
    {props.products ? props.products.map((item, key) => {
      return (
        <div key={key} className={styles.ProductsCard}>
          <div className={styles.ProductsImageContainer}>
            <div className={styles.productImageShadow}></div>
            <div><img alt="imagen de producto" src={`https://${item.image}`} className={styles.ProductsImage} /></div>
          </div>
          <div className={styles.ProductsInfo}>
            <p><strong className="text-capitalize">{item.brand}</strong> <span className="text-capitalize">{item.description}</span></p>
            <div className={styles.ProductsPrice}>
              <NumberFormat value={item.price} displayType={'text'} thousandSeparator='.' decimalSeparator=',' decimalScale={0} prefix={'$'} />
              <span className={styles.walmartDiscountPercentageCard} style={{ display: props.isPromotion ? null : 'none' }}>
                {props.isPromotion ? '-50%' : null}
              </span>
            </div>
            <small style={{ textDecoration: 'line-through', display: props.isPromotion ? null : 'none' }}>
              <NumberFormat value={item.price * 2} displayType={'text'} thousandSeparator='.' decimalSeparator=',' decimalScale={0} prefix={'$'} />
            </small>
            <div className={styles.ProductsButton}>
              <button className={styles.walmartAddCartButton}>Agregar</button>
            </div>
          </div>
        </div>
      )
    }) : <h2>No se Encontraron Productos</h2>}
  </div>
);

// Products.propTypes = { };

Products.defaultProps = {};

export default Products;
