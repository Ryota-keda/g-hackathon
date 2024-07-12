import React from 'react';
import { Link } from 'react-router-dom';
import '../styled/CaregiverHome.css';

const requests = [
  { id: 1, name: '高齢者1', details: '高齢者1の詳細情報' },
  { id: 2, name: '高齢者2', details: '高齢者2の詳細情報' },
  // 他の高齢者のデータを追加
];

const CaregiverHome = () => {
  const handleAcceptRequest = (id) => {
    // 予約完了の処理を追加
    console.log(`高齢者 ${id} の予約を受け入れました`);
  };

  return (
    <div className="caregiver-home-container">
      <div className="header">
        <h1>介護者専用ホーム画面</h1>
        <Link to="/caregiver-management">管理画面</Link>
      </div>
      <div className="requests-list">
        {requests.map((request) => (
          <div key={request.id} className="request-card">
            <div className="elderly-info">
              <span className="elderly-name">{request.name}</span>
              <span className="elderly-details">{request.details}</span>
            </div>
            <button
              className="accept-button"
              onClick={() => handleAcceptRequest(request.id)}
            >
              受け入れ
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaregiverHome;

