import React, { useState } from 'react';
import "./history.css"

const History = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <section className="history section">
      <h2 className="section-title">My History</h2>
      <span className="section-subtitle">My career and education</span>

      <div className="history-container container">

        <div className="history-tabs">
          <div className={toggleState === 1 ? "history-button history-active button--flex"
            : "history-button button--flex"} onClick={() => setToggleState(1)}>
            <i className="fa-solid fa-briefcase history-icon"></i>{" "}Career
          </div>
          <div className={toggleState === 2 ? "history-button history-active button--flex"
            : "history-button button--flex"} onClick={() => setToggleState(2)}>
            <i className="fa-solid fa-graduation-cap history-icon"></i>{" "}Education
          </div>
        </div>

        <div className="history-sections">
        <div className={toggleState === 1 ? "history-content history-content-active"
            : "history-content"}>
            <div className="history-data">
              <div>
                <h3 className="history-title">Title 1</h3>
                <span className="history-subtitle">Institute 1</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}Time
                </div>
              </div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
            </div>

            <div className="history-data">
              <div></div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
              <div>
                <h3 className="history-title">Title 2</h3>
                <span className="history-subtitle">Institute 2</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}Time
                </div>
              </div>
            </div>

            <div className="history-data">
              <div>
                <h3 className="history-title">Title 3</h3>
                <span className="history-subtitle">Institute 3</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}Time
                </div>
              </div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
            </div>

            <div className="history-data">
              <div></div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
              <div>
                <h3 className="history-title">Title 4</h3>
                <span className="history-subtitle">Institute 4</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}Time
                </div>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "history-content history-content-active"
            : "history-content"}>
            <div className="history-data">
              <div>
                <h3 className="history-title">Title</h3>
                <span className="history-subtitle">Institute</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}Time
                </div>
              </div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
            </div>

            <div className="history-data">
              <div></div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
              <div>
                <h3 className="history-title">Title</h3>
                <span className="history-subtitle">Institute</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}Time
                </div>
              </div>
            </div>

            <div className="history-data">
              <div>
                <h3 className="history-title">Title</h3>
                <span className="history-subtitle">Institute</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}Time
                </div>
              </div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
