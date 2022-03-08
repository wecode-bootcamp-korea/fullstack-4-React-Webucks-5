import React from 'react';
import './CoffeeCard.scss';

function CoffeeCard({ coffee }) {
  return (
    <div>
      <li>
        <div className="coffee-item">
          {/* coffeeList.json 에서 데이터를 가져오기 때문에
           1.json 의 imgUrl 은 가져오지 못한다. */}
          <img alt="coffee" src="../images/example.jpg" />
        </div>
        <p className="coffee-name">{coffee.name}</p>
      </li>
    </div>
  );
}

export default CoffeeCard;
