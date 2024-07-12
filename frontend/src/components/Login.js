import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styled/Login.css';

const Login = () => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role) => {
    if (role === 'elderly') {
      history.push('/elderly-home');
    } else if (role === 'caregiver') {
      history.push('/caregiver-home');
    }
  };

  return (
    <div className="login-container">
      <h1>ログイン画面</h1>
      <input
        type="text"
        placeholder="ユーザー名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => handleLogin('elderly')}>高齢者としてログイン</button>
      <button onClick={() => handleLogin('caregiver')}>介護者としてログイン</button>
    </div>
  );
};

export default Login;
