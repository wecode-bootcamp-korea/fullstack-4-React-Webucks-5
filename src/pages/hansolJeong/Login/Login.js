import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';

function Login() {
  const navigate = useNavigate();

  function goToList() {
    navigate('/list-hansol');
  }

  return (
    <div>
      <section className="login-container">
        <div className="logo">Webucks</div>
        <div className="loginForm" action="./list.html">
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input className="pw" type="password" placeholder="비밀번호" />
          <button
            className="login-btn"
            onClick={() => {
              goToList();
            }}
          >
            로그인
          </button>
          {/* <div className='forgot-pw'>비밀번호를 잊으셨나요?</div> */}
          <Link to="/signup">비밀번호를 잊으셨나요?</Link>
        </div>
      </section>
    </div>
  );
}

export default Login;
