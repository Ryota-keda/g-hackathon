import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styled/ElderlyHome.css';

const ElderlyHome = () => {
  const history = useHistory();
  const [date, setDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push('/payment');
  };

  const timeSlots = [];
  for (let hour = 9; hour < 21; hour++) {
    timeSlots.push(`${hour}:00-${hour + 1}:00`);
  }

  const daysOfWeek = [
    '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日', '日曜日'
  ];

  return (
    <div className="elderly-home-container">
      <div className="header">
        <h1>高齢者専用ホーム画面</h1>
        <Link to="/elderly-management" className="management-button">管理画面</Link>
      </div>
      <form onSubmit={handleSubmit} className="caregiver-form">
        <div className="form-group">
          <label htmlFor="date">日付け</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dayOfWeek">曜日</label>
          <select
            id="dayOfWeek"
            value={dayOfWeek}
            onChange={(e) => setDayOfWeek(e.target.value)}
            required
          >
            <option value="">曜日を選択してください</option>
            {daysOfWeek.map((day, index) => (
              <option key={index} value={day}>
                {day}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">時間帯</label>
          <select
            id="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          >
            <option value="">時間を選択してください</option>
            {timeSlots.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </select>
        </div>
        <button type="submit" className="submit-button">送信</button>
      </form>
    </div>
  );
};

export default ElderlyHome;




