import React from 'react';
import { Link } from 'react-router-dom';
import '../styled/Home.css';  // CSSファイルをインポート

const Home = () => {
  return (
    <div className="home-container">
      <h1>ホーム画面</h1>
      <Link to="/login">ログイン</Link>
    </div>
  );
};

export default Home;
