import { click } from '@testing-library/user-event/dist/click';
import React, { useState } from 'react';
import './Detail.scss';

function Detail() {
  // isLike state 생성
  const [isLike, setIsLike] = useState(false);

  // 클릭 시 발생하는 이벤트 함수
  // isLike 의 state 를 반대로 set
  const clickEvent = () => {
    setIsLike(!isLike);
  };

  return (
    <div className="detail-wrap">
      <div className="containerWrapper">
        <div className="container">
          <header>
            <div className="title">WeBucks</div>
            <div className="nav">
              <ul>
                <li>COFFEE</li>
                <li>MENU</li>
                <li>STORE</li>
                <li>WHAT'S NEW</li>
              </ul>
            </div>
          </header>
          <section>
            <div className="sectionTop">
              <p className="menuName">콜드 브루</p>
              <p className="menuLine">
                홈 &gt; MENU &gt; 음료 &gt; 콜드 브루 커피 &gt; 바닐라 크림 콜드
                브루
              </p>
            </div>
            <article>
              <div className="divImg">
                <img
                  className="coffeeImg"
                  alt="바닐라 크림 콜드 브루"
                  src="../images/example.jpg"
                />
              </div>
              <div className="sectionRight">
                <div className="coffeeBox">
                  <div className="coffeeName">
                    <p id="coffeeName1">바닐라 크림 콜드 브루</p>
                    <p id="coffeeName2">Vanilla Cream Cold Brew</p>
                  </div>

                  {/* 커피 좋아요 기능 */}
                  <div className="heart gray">
                    <i
                      id="icon"
                      // onClick 이벤트 발생 시 isLike 의 boolean 값 변경
                      // true 면 빨간 하트, false 면 빈 하트
                      className={
                        isLike
                          ? 'fa-solid fa-heart red'
                          : 'fa-regular fa-heart gray'
                      }
                      onClick={clickEvent}
                    />
                  </div>
                </div>
                <div className="explain">
                  콜드 브루에 더해진 바닐라 크림으로 깔끔하면서 달콤한 콜드
                  브루를 새롭게 즐길 수 있는 음료입니다.
                </div>
                <div className="ingredients">
                  <div className="inTop">
                    <div className="inTitle">제품 영양 정보</div>
                    <div className="inOz">Tall(톨) / 355ml (12 fl oz)</div>
                  </div>
                  <div className="inMid">
                    <div className="inMidBw">
                      <ul>
                        <li>1회 제공량 (kcal)</li>
                        <li>포화지방 (g)</li>
                        <li>단백질 (g)</li>
                      </ul>
                      <ul className="alignR">
                        <li>125</li>
                        <li>6</li>
                        <li>3</li>
                      </ul>
                    </div>
                    <div className="inMidBw" id="right">
                      <ul>
                        <li>나트륨 (mg)</li>
                        <li>당류 (g)</li>
                        <li>카페인 (mg)</li>
                      </ul>
                      <ul className="alignR">
                        <li>58</li>
                        <li>11</li>
                        <li>150</li>
                      </ul>
                    </div>
                  </div>
                  <div className="inBottom">
                    <p>알레르기 유발요인 : 우유</p>
                  </div>
                  <div className="review">
                    <div className="reviewTitle">
                      <p>리뷰</p>
                    </div>
                    <div className="reviewList">
                      <div className="reviewLine">
                        <p>
                          <strong>coffee_lover</strong> 너무 맛있어요!
                        </p>
                        <i className="fa-regular fa-heart gray" />
                        <i className="fa-regular fa-trash-can gray" />
                      </div>
                      <div className="reviewLine">
                        <p>
                          <strong>CHOCO7</strong> 오늘도 바크콜 마시러 갑니다.
                        </p>
                        <i className="fa-regular fa-heart gray" />
                        <i className="fa-regular fa-trash-can gray" />
                      </div>
                      <div className="reviewLine">
                        <p>
                          <strong>legend_dev</strong> 진짜 바닐라 크림 콜드
                          브루는 전설이다.
                        </p>
                        <i className="fa-regular fa-heart gray" />
                        <i className="fa-regular fa-trash-can gray" />
                      </div>
                    </div>
                    <input
                      className="reviewChat"
                      type="text"
                      placeholder="리뷰를 입력해주세요."
                    />
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
      <footer>
        <div className="footMenu">
          <p className="footTitle">COMPANY</p>
          <ul className="footList">
            <li>한눈에 보기</li>
            <li>스타벅스 사명</li>
            <li>스타벅스 소개</li>
            <li>국내 뉴스룸</li>
            <li>세계의 스타벅스</li>
            <li>글로벌 뉴스룸</li>
          </ul>
        </div>
        <div className="footMenu">
          <p className="footTitle">CORPORATES SALES</p>
          <ul className="footList">
            <li>단체 및 기업 구매 안내</li>
          </ul>
        </div>
        <div className="footMenu">
          <p className="footTitle">PARTNERSHIP</p>
          <ul className="footList">
            <li>신규 입점 제의</li>
            <li>협력 고객사 등록 신청</li>
          </ul>
        </div>
        <div className="footMenu">
          <p className="footTitle">ONLINE COMMUNITY</p>
          <ul className="footList">
            <li>페이스북</li>
            <li>트위터</li>
            <li>유튜브</li>
            <li>블로그</li>
            <li>인스타그램</li>
          </ul>
        </div>
        <div className="footMenu">
          <p className="footTitle">RECRUIT</p>
          <ul className="footList">
            <li>채용 소개</li>
            <li>채용 지원하기</li>
          </ul>
        </div>
        <div className="footMenu">
          <p className="footTitle">WECODE</p>
          <ul className="footList">
            <li />
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default Detail;
