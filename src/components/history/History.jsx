import React from 'react';
import "./history.css"
const History = () => {
  return (
    <div>
      <section className="history section">
        <h2 className="section-title">My History</h2>
        <span className="section-subtitle">My career and education</span>

        <div className="history-container container">
          <div className="history-tabs">
            <div className="history-button button--flex">
              <i className="fa-solid fa-briefcase history-icon">{" "}Career</i>
            </div>
            <div className="history-button button--flex">
              <i className="fa-solid fa-graduation-cap history-icon">{" "}Education</i>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default History;
