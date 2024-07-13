import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../styled/ElderlyHome.css';

const ElderlyHome = () => {
  const history = useHistory();
  const [date, setDate] = useState('');
  const [dayOfWeek, setDayOfWeek] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSelectCaregiver = (id) => {
    history.push('/payment');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here, e.g., sending data to server

    // After submission, navigate to payment page
    history.push('/payment');
  };

  return (
    <div className="elderly-home-container">
      <div className="header">
        <h1>高齢者専用ホーム画面</h1>
        <Link to="/elderly-management" className="management-link">管理画面</Link>
      </div>
      <form onSubmit={handleSubmit} className="caregiver-form">
        <div className="form-group">
          <label htmlFor="date">日付け:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="dayOfWeek">曜日:</label>
          <input
            type="text"
            id="dayOfWeek"
            value={dayOfWeek}
            onChange={(e) => setDayOfWeek(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="timeSlot">時間帯:</label>
          <input
            type="text"
            id="timeSlot"
            value={timeSlot}
            onChange={(e) => setTimeSlot(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="submit-button">送信</button>
      </form>
    </div>
  );
};

export default ElderlyHome;


