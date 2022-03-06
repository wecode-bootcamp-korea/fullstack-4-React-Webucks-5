import './Login.scss';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [idState, setIdState] = useState([]);
  const [pwState, setPwState] = useState([]);
  const [visible, changeVisible] = useState(['disable']);

  const handleIdInput = e => {
    setIdState(e.target.value);
  };

  const handlePwInput = e => {
    setPwState(e.target.value);
  };

  const changeColor = () => {
    idState.includes('@') && pwState.length >= 5
      ? changeVisible('active')
      : changeVisible('disable');
  };

  return (
    <div className="body">
      <section className="logInBox">
        <div className="webucks">WeBucks</div>
        <div className="inputBox">
          <input
            className="none"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            value={idState}
            onChange={handleIdInput}
            onKeyUp={changeColor}
          />
          <input
            className="none"
            type="password"
            placeholder="비밀번호"
            value={pwState}
            onChange={handlePwInput}
            onKeyUp={changeColor}
          />
        </div>
        <div className="buttonBox">
          <i id="eyeButton" className="fa-solid fa-eye-slash fa-sm" />
        </div>
        <div className="logInBtn">
          <Link to="/list-bongjun">
            <button className={visible}>로그인</button>
          </Link>
        </div>
        <div className="lostPw">비밀번호를 잊으셨나요?</div>
      </section>
    </div>
  );
}

export default Login;
