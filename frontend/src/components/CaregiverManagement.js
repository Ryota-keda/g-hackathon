import React from 'react';
import { Link } from 'react-router-dom';
import '../styled/CaregiverManagement.css';

const CaregiverManagement = () => {
  // Example data
  const caregiverInfo = {
    name: '佐藤太郎',
    age: 45,
    bio: '経験豊富な介護士で、特に認知症の高齢者のケアに長けています。'
  };

  const elderlyInfoList = [
    {
      id: 1,
      name: '田中花子',
      age: 76,
      bio: '元気でお話好きな花子さん。糖尿病の管理が必要です。',
      prefecture: '東京都',
      city: '新宿区',
      address: '西新宿1-1-1'
    },
    {
      id: 2,
      name: '山田太郎',
      age: 82,
      bio: '趣味は園芸で、孫たちと過ごすのが楽しみです。',
      prefecture: '大阪府',
      city: '大阪市',
      address: '中央区2-1-1'
    }
    // Add more elderlyInfo as needed
  ];


  return (
    <div className="caregiver-management-container">
      <h1>介護者専用管理画面</h1>

      {/* Caregiver Info */}
      <div className="caregiver-info">
        <h2>自分の情報</h2>
        <p>{caregiverInfo.name}, {caregiverInfo.age}歳</p>
        <p>{caregiverInfo.bio}</p>
      </div>

      {/* Elderly Info */}
      <div className="elderly-info">
        <h2>契約した高齢者の情報</h2>
        {elderlyInfoList.map((elderlyInfo) => (
        <div key={elderlyInfo.id} className="elderly-info">
          <p>{elderlyInfo.name}, {elderlyInfo.age}歳</p>
          <p>{elderlyInfo.bio}</p>
          <p>{elderlyInfo.prefecture} {elderlyInfo.city} {elderlyInfo.address}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default CaregiverManagement;

