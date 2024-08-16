import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/card.scss';

const Card = ({ title, link, cover }) => {
  return (
    <Link to={link} className="card">
      <img src={cover} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
      </div>
    </Link>
  );
};

export default Card;
