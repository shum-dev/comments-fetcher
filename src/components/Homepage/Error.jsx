import React from 'react';
import { container } from '../../styles/Error.module.scss';

const Error = ({ message }) => (
  <div className={container}>
    <h3>{message}</h3>
  </div>
);

export default Error;
