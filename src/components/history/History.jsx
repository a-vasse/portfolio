import React, { useState } from 'react';
import "./history.css"

const History = () => {
  const [toggleState, setToggleState] = useState(1);
  return (
    <section className="history section" id="history">
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
                <h3 className="history-title">Branch and Instructor Manager</h3>
                <span className="history-subtitle">Gaba Corporation</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}2015 - 2018 / 2020 - 2022
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
                <h3 className="history-title">Business Integration Planner & Branch Manager</h3>
                <span className="history-subtitle">Gaba Corporation</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}2018 - 2020
                </div>
              </div>
            </div>

            <div className="history-data">
              <div>
                <h3 className="history-title">English Instructor</h3>
                <span className="history-subtitle">Gaba Corporation</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}2007 - 2015
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
                <h3 className="history-title">English Instructor</h3>
                <span className="history-subtitle">Nova Corporation</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}2005 - 2007
                </div>
              </div>
            </div>


            <div className="history-data">
              <div>
                <h3 className="history-title">Data Entry Specialist</h3>
                <span className="history-subtitle">Web Diversity</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}2004 - 2005
                </div>
              </div>

              <div>
                <span className="history-rounder"></span>
                <span className="history-line"></span>
              </div>
            </div>
          </div>

          <div className={toggleState === 2 ? "history-content history-content-active"
              : "history-content"}>
            <div className="history-data">
              <div>
                <h3 className="history-title">Full Stack Web Development</h3>
                <span className="history-subtitle">Le Wagon, Tokyo</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}2022
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
                <h3 className="history-title">BSc Multimedia Computing</h3>
                <span className="history-subtitle">DeMontfort University<br />Leicester, UK</span>
                <div className="history-calender">
                  <i className="fa-solid fa-calendar-days"></i>{" "}2001 - 2004
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
