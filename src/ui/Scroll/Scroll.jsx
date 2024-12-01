import React from 'react';
import SimpleBar from 'simplebar-react';
import './scrollbar.css';

const Scroll = ({ children }) => {
  return <SimpleBar>{children}</SimpleBar>;
};

export default Scroll;
