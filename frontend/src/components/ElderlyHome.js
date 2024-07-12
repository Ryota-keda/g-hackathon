import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styled/ElderlyHome.css';

const caregivers = [
  { id: 1, name: '介護者1', details: '介護者1の詳細情報' },
  { id: 2, name: '介護者2', details: '介護者2の詳細情報' },
  // 他の介護者のデータを追加
];

const ElderlyHome = () => {
  const history = useHistory();

  const handleSelectCaregiver = (id) => {
    history.push('/payment');
  };

  return (
    <div className="elderly-home-container">
      <div className="header">
        <h1>高齢者専用ホーム画面</h1>
        <Link to="/elderly-management">管理画面</Link>
      </div>
      <div className="caregivers-list">
        {caregivers.map((caregiver) => (
          <div key={caregiver.id} className="caregiver-card">
            <div className="caregiver-info">
              <span className="caregiver-name">{caregiver.name}</span>
              <span className="caregiver-details">{caregiver.details}</span>
            </div>
            <button
              className="select-button"
              onClick={() => handleSelectCaregiver(caregiver.id)}
            >
              選択
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElderlyHome;
