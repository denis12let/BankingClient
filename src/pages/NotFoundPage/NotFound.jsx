// import React from 'react';

// const NotFound = () => {
//   return <div>/* not found */</div>;
// };

// export default NotFound;

import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-card">
        <div className="not-found-header">
          <div className="bank-logo">Refine Bank</div>
          <div className="error-code">404</div>
        </div>

        <div className="not-found-body">
          <div className="transaction-failed">
            <div className="transaction-icon">
              <svg width="80" height="80" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10" fill="#fee" stroke="#f66" strokeWidth="2" />
                <path d="M15 9l-6 6M9 9l6 6" stroke="#f66" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <h1>Транзакция не выполнена</h1>
            <p className="error-description">
              Страница, которую вы запрашиваете, не найдена в нашей системе. Возможно, она была перемещена или удалена.
            </p>

            <div className="transaction-details">
              <div className="detail-row">
                <span className="detail-label">Код ошибки:</span>
                <span className="detail-value">404_NOT_FOUND</span>
              </div>
              <div className="detail-row">
                <span className="detail-label">Время:</span>
                <span className="detail-value">{new Date().toLocaleTimeString()}</span>
              </div>
            </div>
          </div>

          <div className="action-buttons">
            <Link to="/" className="btn-primary">
              ← На главную
            </Link>
            <Link to="/rates" className="btn-secondary">
              Курсы валют
            </Link>
            <button onClick={() => window.history.back()} className="btn-outline">
              Назад
            </button>
          </div>
        </div>

        <div className="not-found-footer">
          <p>Нужна помощь? Свяжитесь с нашей службой поддержки:</p>
          <p className="support-contact">+375 (44) 123-45-67 | support@refinebank.by</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
