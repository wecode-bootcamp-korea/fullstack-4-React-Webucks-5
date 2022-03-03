import TopNav from "./TopNav";
import "./List.scss";
import React from "react";
import { Link } from "react-router-dom";

function ListBongjun() {
  return (
  <div className="containerWraper">
  <div className="container">
    <TopNav></TopNav>
    <section>
      <div className="cateBar">
        <div className="cateName">콜드 브루 커피</div>
        <img className="deCaf" src="./images/bongjunSeong/logo_decaf.png" alt="디카페인" />
        <div className="cateExplain">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</div>
      </div>
      <article>
        <ul>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>나이트로 바닐라 크림</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>나이트로 콜드 브루</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>돌체 콜드 브루</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><Link to="/detail-bongjun"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></Link></div>
            </div>
            <div className="plusHeart">
              <span><Link to="/detail">바닐라 크림 콜드 브루</Link></span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>벨벳 다크 모카 나이트로</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>시그니처 더 블랙 콜드 브루</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>제주 비자림 콜드 브루</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>콜드 브루</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>콜드 브루 몰트</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>콜드 브루 오트 라떼</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>콜드 브루 플로트</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
        </ul>
      </article>
      <div className="cateBar">
        <div className="cateName">브루드 커피</div>
        <img className="deCaf" src="./images/bongjunSeong/logo_decaf.png" alt="디카페인"/>
        <div className="cateExplain">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</div>
      </div>
      <article>
        <ul>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>아이스 커피</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>오늘의 커피</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
        </ul>
      </article>
      <div className="cateBar">
        <div className="cateName">에스프레소</div>
        <img className="deCaf" src="./images/bongjunSeong/logo_decaf.png" alt="디카페인"/>
        <div className="cateExplain">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</div>
      </div>
      <article>
        <ul>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>에스프레소 콘 파나</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>에스프레소 마키아또</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>아이스 카페 아메리카노</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>카페 아메리카노</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>아이스 카페 라떼</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="img">
              <div className="scale"><img src="./images/bongjunSeong/example.jpg" alt="커피" /></div>
            </div>
            <div className="plusHeart">
              <span>카페 라떼</span>
              <i className="fa-regular fa-heart gray"></i>
            </div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
          <li>
            <div className="imgEmpty"></div>
          </li>
        </ul>
      </article>
    </section>
  </div> 
  </div> );
}

export default ListBongjun;