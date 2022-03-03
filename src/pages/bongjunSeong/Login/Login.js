import "./Login.scss";
import React from "react";
import { Link } from "react-router-dom";

function LoginBongjun() {
  return (
  <div className="body">
    <section className="logInBox">
      <div className="webucks">WeBucks</div>
      <div className="inputBox">
        <input className="none" type="text" placeholder="전화번호, 사용자 이름 또는 이메일" />
        <input className="none" type="password" placeholder="비밀번호" />
      </div>
      <div className="buttonBox">
        <i id="eyeButton" className="fa-solid fa-eye-slash fa-sm"></i>
      </div>
      <div className="logInBtn"><Link to="/list-bongjun"><button className="disable" onClick={() => {}}>로그인</button></Link></div>
      <div className="lostPw">비밀번호를 잊으셨나요?</div>
    </section>
  </div> );
}

export default LoginBongjun;