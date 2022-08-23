import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className='login'>
      <div class='login-container'>
        <h1 class='justgram-title'>Justgram</h1>
        <form id='login-form'>
          <input
            type='text'
            id='input-id'
            placeholder='전화번호, 사용자 이름 또는 이메일'
          />
          <input type='password' id='input-pw' placeholder='비밀번호' />
          <button id='login-btn' type='submit'>
            로그인
          </button>
        </form>
        <a href='main.html' id='search-pw'>
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
