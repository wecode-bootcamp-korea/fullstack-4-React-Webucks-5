import './Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {
  // id, pw 를 받아 state 로 사용
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  // 로그인 버튼 활성화 여부 함수
  const isValidButton = id.includes('@') && pw.length > 7;

  const navigate = useNavigate();

  // 리스트 페이지로 이동하는 함수
  function goToList() {
    navigate('/list-hansol');
  }

  // id, pw input 값을 받아 state 로 받는 함수
  const handleIdInput = e => {
    setId(e.target.value);
  };

  const handlePwInput = e => {
    setPw(e.target.value);
  };

  return (
    <div>
      <section className="login-container">
        <div className="logo">Webucks</div>
        <div className="loginForm" action="./list.html">
          {/* id 입력창 */}
          <input
            className="id"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            // 입력할 때마다 state 를 변경
            onChange={handleIdInput}
          />

          {/* pw 입력창 */}
          <input
            className="pw"
            type="password"
            placeholder="비밀번호"
            // 입력할 때마다 state 를 변경
            onChange={handlePwInput}
          />

          {/* 로그인 버튼 */}
          <button
            className="login-btn"
            disabled={!isValidButton}
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
