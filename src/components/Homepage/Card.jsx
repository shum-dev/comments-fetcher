import React from 'react';
import { container } from '../../styles/Card.module.scss';

const Card = ({ data }) => (
  <li className={container}>
    <h3>{data.name}</h3>
    <small>{data.email}</small>
    <p>{data.body}</p>
  </li>
);

export default Card;
