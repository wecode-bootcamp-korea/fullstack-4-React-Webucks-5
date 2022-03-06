import TopNav from './TopNav';
import './List.scss';
import React, { useEffect, useState } from 'react';
import CoffeeCard from './CoffeeCard';

//json 파일에서 커피리스트 추출
function List() {
  const [coffeeList, setCoffeeList] = useState([]);

  useEffect(() => {
    fetch('/data/coffeeList.json')
      .then(res => res.json())
      .then(res => setCoffeeList(res));
  }, []);

  return (
    <div className="containerWraper">
      <div className="container">
        <TopNav />
        <section>
          <div className="cateBar">
            <div className="cateName">콜드 브루 커피</div>
            <img
              className="deCaf"
              src="./images/bongjunSeong/logo_decaf.png"
              alt="디카페인"
            />
            <div className="cateExplain">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </div>
          </div>
          <article>
            <ul>
              {/* 커피리스트를 컴포넌트에 각각 적용 */}
              {coffeeList.map(coffee => (
                <CoffeeCard key={coffee.id} coffee={coffee} />
              ))}
              <li>
                <div className="imgEmpty" />
              </li>
              <li>
                <div className="imgEmpty" />
              </li>
              <li>
                <div className="imgEmpty" />
              </li>
            </ul>
          </article>
          <div className="cateBar">
            <div className="cateName">에스프레소</div>
            <img
              className="deCaf"
              src="./images/bongjunSeong/logo_decaf.png"
              alt="디카페인"
            />
            <div className="cateExplain">
              디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)
            </div>
          </div>
          <article>
            <ul>
              <li>
                <div className="img">
                  <div className="scale">
                    <img src="./images/bongjunSeong/example.jpg" alt="커피" />
                  </div>
                </div>
                <div className="plusHeart">
                  <span>에스프레소 콘 파나</span>
                  <i className="fa-regular fa-heart gray" />
                </div>
              </li>
              <li>
                <div className="img">
                  <div className="scale">
                    <img src="./images/bongjunSeong/example.jpg" alt="커피" />
                  </div>
                </div>
                <div className="plusHeart">
                  <span>에스프레소 마키아또</span>
                  <i className="fa-regular fa-heart gray" />
                </div>
              </li>
              <li>
                <div className="img">
                  <div className="scale">
                    <img src="./images/bongjunSeong/example.jpg" alt="커피" />
                  </div>
                </div>
                <div className="plusHeart">
                  <span>아이스 카페 아메리카노</span>
                  <i className="fa-regular fa-heart gray" />
                </div>
              </li>
              <li>
                <div className="img">
                  <div className="scale">
                    <img src="./images/bongjunSeong/example.jpg" alt="커피" />
                  </div>
                </div>
                <div className="plusHeart">
                  <span>카페 아메리카노</span>
                  <i className="fa-regular fa-heart gray" />
                </div>
              </li>
              <li>
                <div className="img">
                  <div className="scale">
                    <img src="./images/bongjunSeong/example.jpg" alt="커피" />
                  </div>
                </div>
                <div className="plusHeart">
                  <span>아이스 카페 라떼</span>
                  <i className="fa-regular fa-heart gray" />
                </div>
              </li>
              <li>
                <div className="img">
                  <div className="scale">
                    <img src="./images/bongjunSeong/example.jpg" alt="커피" />
                  </div>
                </div>
                <div className="plusHeart">
                  <span>카페 라떼</span>
                  <i className="fa-regular fa-heart gray" />
                </div>
              </li>
              <li>
                <div className="imgEmpty" />
              </li>
              <li>
                <div className="imgEmpty" />
              </li>
              <li>
                <div className="imgEmpty" />
              </li>
            </ul>
          </article>
        </section>
      </div>
    </div>
  );
}

export default List;
