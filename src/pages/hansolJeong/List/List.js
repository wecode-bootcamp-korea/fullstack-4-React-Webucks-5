import './List.scss';
import './CoffeeCard';
import React, { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard';

function List() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/coffeeList.json')
      .then(res => res.json())
      .then(data => {
        setCoffeeList(data);
      });
  }, []);

  return (
    <div>
      <header>
        <h1 className="logo">Webucks</h1>
        <nav className="nav">
          <ul>
            <li>COFFEE</li>
            <li>MENU</li>
            <li>STORE</li>
            <li>WHAT'S NEW</li>
          </ul>
        </nav>
      </header>
      <section>
        <div className="coffee-type">
          콜드 브루 커피 &nbsp;&nbsp;&nbsp; ☕ 디카페인 에스프레소 샷 추가
          가능(일부 음료 제외)
        </div>
        <ul className="coffee-list">
          {coffeeList.map(coffee => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}

          <li>
            <div className="list-padding" />
          </li>
          <li>
            <div className="list-padding" />
          </li>
          <li>
            <div className="list-padding" />
          </li>
        </ul>
        <div className="coffee-type">
          브루드 커피 &nbsp;&nbsp;&nbsp; ☕ 디카페인 에스프레소 샷 추가
          가능(일부 음료 제외)
        </div>
        <ul className="coffee-list">
          <li>
            <div className="coffee-item">
              <img
                alt="아이스 커피"
                src="https://images.unsplash.com/photo-1630783397237-3dc5caf9ded9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Njh8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">아이스 커피</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="오늘의 커피"
                src="https://images.unsplash.com/photo-1604967593834-cfd33202d88e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIwfHxjb2ZmZWV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">오늘의 커피</p>
          </li>
          <li>
            <div className="list-padding" />
          </li>
          <li>
            <div className="list-padding" />
          </li>
          <li>
            <div className="list-padding" />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default List;
