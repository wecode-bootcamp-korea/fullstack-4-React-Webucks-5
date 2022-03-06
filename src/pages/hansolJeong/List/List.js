import './List.scss';
import React from 'react';

function List() {
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
          <li>
            <div className="coffee-item">
              <img
                alt="나이트로 바닐라 크림"
                src="https://images.unsplash.com/photo-1604145703930-627e490875c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGF0dGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">나이트로 바닐라 크림</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="나이트로 콜드 브루"
                src="https://images.unsplash.com/photo-1519333796630-4b7d19ad1bb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">나이트로 콜드 브루</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="돌체 콜드 브루"
                src="https://images.unsplash.com/photo-1521302080334-4bebac2763a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">돌체 콜드 브루</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="바닐라 크림 콜드 브루"
                src="https://images.unsplash.com/photo-1535403396060-dd9daec50b74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">바닐라 크림 콜드 브루</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="벨벳 다크 모카 나이트로"
                src="https://images.unsplash.com/photo-1526401281623-279b498f10f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">벨벳 다크 모카 나이트로</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="시그니처 더 블랙 콜드 브루"
                src="https://images.unsplash.com/photo-1502471602546-17554aac1160?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">시그니처 더 블랙 콜드 브루</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="제주 비자림 콜드 브루"
                src="https://images.unsplash.com/photo-1587491439149-bd2ff295d450?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGF0dGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">제주 비자림 콜드 브루</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="콜드 브루"
                src="https://images.unsplash.com/photo-1559001724-fbad036dbc9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGxhdHRlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">콜드 브루</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="콜드 브루 몰트"
                src="https://images.unsplash.com/photo-1629991848910-2ab88d9cc52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGxhdHRlfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">콜드 브루 몰트</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="콜드 브루 오트 라떼"
                src="https://images.unsplash.com/photo-1623859763838-a304cbfd4901?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">콜드 브루 오트 라떼</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="콜드 브루 플로트"
                src="https://images.unsplash.com/photo-1559001724-fbad036dbc9e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">콜드 브루 플로트</p>
          </li>
          <li>
            <div className="coffee-item">
              <img
                alt="프렌치 애플 타르트 나이트로"
                src="https://images.unsplash.com/photo-1447195047884-0f014b0d9288?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTd8fGNvZmZlZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60"
              />
            </div>
            <p className="coffee-name">프렌치 애플 타르트 나이트로</p>
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
