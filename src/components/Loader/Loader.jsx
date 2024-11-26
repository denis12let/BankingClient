import React from 'react';
import loader from './../../assets/images/loader/Spinner@1x-1.0s-200px-200px.svg';
import styles from './Loader.module.css';

const Loader = () => {
  return (
    <div>
      <img className={styles.loaderImg} src={loader} alt="" />
    </div>
  );
};

export default Loader;
