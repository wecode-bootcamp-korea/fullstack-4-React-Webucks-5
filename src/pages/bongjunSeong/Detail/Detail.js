import { useState } from 'react';
import TopNav from '../List/TopNav';
import './Detail.scss';

function DetailBongjun() {
  const [heartColor, setHeartColor] = useState('fa-regular fa-heart gray');
  const [review, setReview] = useState('');
  const reviewList = document.getElementsByClassName('reviewList')[0];

  const clickEvent = () => {
    heartColor === 'fa-regular fa-heart gray'
      ? setHeartColor('fa-solid fa-heart red')
      : setHeartColor('fa-regular fa-heart gray');
  };

  const postReview = e => {
    setReview(e.target.value);

    if (e.keyCode === 13) {
      if (review.length >= 1) {
        const reviewBox = document.createElement('div');
        const reply = document.createElement('p');
        const heart = document.createElement('i');
        const trashcan = document.createElement('i');

        reply.innerHTML = review;
        heart.className = 'fa-regular fa-heart gray';
        heart.onClick = { clickEvent };
        trashcan.className = 'fa-regular fa-trash-can gray';
        reviewBox.className = 'reviewLine';

        reviewBox.appendChild(reply);
        reviewBox.appendChild(heart);
        reviewBox.appendChild(trashcan);
        reviewList.appendChild(reviewBox);

        // trashcan.addEventListener('click', function () {
        //   trashcan.parentElement.remove();
        // });

        setReview('');
      }
    }
  };

  return (
    <div claseName="total">
      <div className="containerWraper">
        <div className="container">
          <TopNav />
          <section>
            <div className="sectionTop">
              <p className="menuName">콜드 브루</p>
              <p className="menuLine">
                홈 &#62; MENU &#62; 음료 &#62; 콜드 브루 커피 &#62; 바닐라 크림
                콜드 브루
              </p>
            </div>
            <article>
              <div className="divImg">
                <img
                  className="coffeeImg"
                  src="./images/bongjunSeong/example.jpg"
                  alt="커피"
                />
              </div>
              <div className="sectionRight">
                <div className="coffeeBox">
                  <div className="coffeeName">
                    <p id="coffeeName1">바닐라 크림 콜드 브루</p>
                    <p id="coffeeName2">Vanilla Cream Cold Brew</p>
                  </div>
                  <div className="heart gray">
                    <i id="icon" className={heartColor} onClick={clickEvent} />
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
                        <strong>legend_dev</strong> 진짜 바닐라 크림 콜드 브루는
                        전설이다.
                      </p>
                      <i className="fa-regular fa-heart gray" />
                      <i className="fa-regular fa-trash-can gray" />
                    </div>
                  </div>
                  <input
                    className="reviewChat"
                    type="text"
                    placeholder="리뷰를 입력해주세요."
                    value={review}
                    onChange={postReview}
                    onKeyUp={postReview}
                  />
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

export default DetailBongjun;
