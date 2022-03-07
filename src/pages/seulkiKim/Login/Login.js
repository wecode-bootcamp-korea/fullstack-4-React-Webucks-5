import "./Login.scss";
import React from 'react';
// import { Link } from "react-router-dom";

function LoginSeulki() { 
  return ( 
    <div>
      <section id="profile">
        <div className="image-style">
          <img src="image/webucks.png" alt="다시 시도하세요!" />
        </div>

        <div className="login-input-button">
          <input className="id" type="text" placeholder="전화번호, 사용자 이름 또는 이메일"/>
          <input className="pw" type="password" placeholder="비밀번호" />
          <button className="button" /*onClick*/ disabled="disabled">로그인</button>
        </div>
    
        <a href="#">비밀번호를 잊으셨나요?</a>
      </section>
    </div>
  )
  }

export default LoginSeulki;