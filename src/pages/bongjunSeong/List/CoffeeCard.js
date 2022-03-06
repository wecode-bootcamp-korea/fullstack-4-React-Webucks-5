import React from 'react';
import './CoffeeCard.scss';
import { Link } from 'react-router-dom';

function CoffeeCard({ coffee }) {
  return (
    <li>
      <Link to="/detail-bongjun" style={{ textDecoration: 'none' }}>
        <div className="img">
          <div className="scale">
            <img src="./images/bongjunSeong/example.jpg" alt="커피" />
          </div>
        </div>
        <div className="plusHeart">
          <span>{coffee.name}</span>
          <i className="fa-regular fa-heart gray" />
        </div>
      </Link>
    </li>
  );
}

export default CoffeeCard;
