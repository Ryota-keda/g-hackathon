import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styled/CaregiverHome.css';

const requests = [
  {
    id: 1,
    name: '田中花子',
    age: 76,
    bio: '元気でお話好きな花子さん。糖尿病の管理が必要です。',
    prefecture: '東京都',
    city: '新宿区',
    address: '西新宿1-1-1'
  },
  // 他の高齢者のデータを追加
];

const CaregiverHome = () => {
  const history = useHistory();
  const handleAcceptRequest = (id) => {
    // 予約完了の処理を追加
    console.log(`高齢者 ${id} の予約を受け入れました`);
    // ここに決済ページへのリダイレクト処理を追加する

    history.push('/payment');
  };

  return (
    <div className="caregiver-home-container">
      <div className="header">
        <h1>介護者専用ホーム画面</h1>
        <Link to="/caregiver-management" className="management-button">管理画面</Link>
      </div>
      <div className="requests-list">
        {requests.map((request) => (
          <div key={request.id} className="request-card">
            <div className="elderly-info">
              <span className="elderly-name">{request.name}</span>
              <span className="elderly-details">{request.bio}</span>
              <span className="elderly-location">{`${request.prefecture} ${request.city}`}</span>
            </div>
            <button
              className="accept-button"
              onClick={() => handleAcceptRequest(request.id)}
            >
              契約
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaregiverHome;

