import React, { useState, useEffect } from 'react';
import '../styled/ElderlyManagement.css';

const ElderlyManagement = () => {
  const [elderlyData, setElderlyData] = useState([
    {
      id: 1,
      name: '田中花子',
      age: 76,
      bio: '元気でお話好きな花子さん。糖尿病の管理が必要です。',
      prefecture: '東京都',
      city: '新宿区',
      address: '西新宿1-1-1'
    }
    // Add more data as needed
  ]);

  const [reservations, setReservations] = useState([
    {
      id: 1,
      date: '2024-07-20',
      dayOfWeek: '月曜日',
      timeSlot: '10:00-11:00'
    },
    {
      id: 2,
      date: '2024-07-21',
      dayOfWeek: '火曜日',
      timeSlot: '14:00-15:00'
    }
    // Add more reservations as needed
  ]);

  return (
    <div className="management-container">
      <h1>高齢者管理画面</h1>
      <div className="elderly-list">
        {elderlyData.map(elderly => (
          <div key={elderly.id} className="elderly-card">
            <h2>{elderly.name}</h2>
            <p><strong>年齢:</strong> {elderly.age}歳</p>
            <p><strong>自己紹介:</strong> {elderly.bio}</p>
            <p><strong>住所:</strong> {elderly.prefecture} {elderly.city} {elderly.address}</p>
          </div>
        ))}
      </div>
      <h2>予約一覧</h2>
      <div className="reservation-list">
        {reservations.map(reservation => (
          <div key={reservation.id} className="reservation-card">
            <p><strong>日付:</strong> {reservation.date}</p>
            <p><strong>曜日:</strong> {reservation.dayOfWeek}</p>
            <p><strong>時間帯:</strong> {reservation.timeSlot}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElderlyManagement;

