import React from 'react';
import SideNav from './component/sidenav/sidenav';
import Header from './component/Header/Header';
import AnalyticsCards from './component/AnalyticsCards/AnalyticsCards';
import DataTable from './component/dataTable/dataTable';
import CregitalPics from './img/cregital_pics.svg';
import InteliaPics from './img/intelia.svg';
import Talosmart from './img/talosmart.svg';
import Imperialsoft from './img/imperialsoft.svg';
// import Optisoft from '../../img/optisoft.svg';
// import Altechma from '../../img/altechma.svg';
// import Atlassian from '../../img/atlassian.svg';
// import Weevil from '../../img/weevil.svg';
// import CloudNet from '../../img/cloud_net.svg';
// import Enyata from '../../img/enyata.svg';
import './App.css';
import 'rsuite/dist/styles/rsuite-default.css';
import GraphStats from './component/GraphStats/GraphStats';

function App() {
  return (
    <div className="App">
      <SideNav />
      <div className="layout">
        <Header />
        <div className="content">
          <h4 className="content_title">Overview</h4>
          <AnalyticsCards />

          <GraphStats/>

          <section className="bottom_section">
            <DataTable />

            <div className="message_and_customer_container">
              <div className="customer_satisfaction_card">
                <h4 className="customer_card_title">Customer Satisfation</h4>
                <p>Across help desk this month</p>
                <div className="customer_response_container">
                  <p>Response received</p>
                  <h4>390</h4>
                  <div className="rating_container">
                    <span>Positive</span>
                    <div className="rating">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#2979F2" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#2979F2" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#2979F2" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#2979F2" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#2979F2" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#2979F2" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <span className="percentage_result">60%</span>
                    </div>
                  </div>

                  <div className="rating_container">
                    <span>Neutral</span>
                    <div className="rating">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#FFCA00" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#FFCA00" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#FFCA00" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <span className="percentage_result">30%</span>
                    </div>
                  </div>

                  <div className="rating_container">
                    <span>Negative</span>
                    <div className="rating">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#FA5F1C" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="#FA5F1C" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 9C11.4858 9 13.5 6.9858 13.5 4.5C13.5 2.0142 11.4858 0 9 0C6.5142 0 4.5 2.0142 4.5 4.5C4.5 6.9858 6.5142 9 9 9ZM9 9C4.0302 9 0 13.0302 0 18H18C18 13.0302 13.9698 9 9 9Z" fill="white" />
                      </svg>
                      <span className="percentage_result">20%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="dashboard_message_container">
                <div className="message_action">
                  <div className="message_header">Message</div>
                  <button className="btn-primary">+ New Message</button>
                </div>

                <div className="message_body">
                  <div className="message">
                    <div className="company_pics">
                      <img src={CregitalPics} alt="cregital" />
                    </div>
                    <div className="message_content">
                      <div className="company_name">Cregital</div>
                      <div className="message_text">Hey, don’t forget to clear server cache!</div>
                      <div className="message_time">25mins ago</div>
                    </div>

                    <div className="message_handlebar">
                      <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.41634" cy="2.91671" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="9.58333" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="16.25" rx="2.08333" ry="2.08333" fill="#717579" />
                      </svg>
                    </div>
                  </div>

                  <div className="message">
                    <div className="company_pics">
                      <img src={InteliaPics} alt="Intelia" />
                    </div>
                    <div className="message_content">
                      <div className="company_name">Intelia</div>
                      <div className="message_text">Hey, don’t forget to clear server cache!</div>
                      <div className="message_time">25mins ago</div>
                    </div>

                    <div className="message_handlebar">
                      <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.41634" cy="2.91671" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="9.58333" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="16.25" rx="2.08333" ry="2.08333" fill="#717579" />
                      </svg>
                    </div>
                  </div>

                  <div className="message">
                    <div className="company_pics">
                      <img src={Talosmart} alt="Talosmart" />
                    </div>
                    <div className="message_content">
                      <div className="company_name">Talosmart</div>
                      <div className="message_text">Hey, don’t forget to clear server cache!</div>
                      <div className="message_time">25mins ago</div>
                    </div>

                    <div className="message_handlebar">
                      <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.41634" cy="2.91671" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="9.58333" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="16.25" rx="2.08333" ry="2.08333" fill="#717579" />
                      </svg>
                    </div>
                  </div>

                  <div className="message">
                    <div className="company_pics">
                      <img src={Imperialsoft} alt="Imperialsoft" />
                    </div>
                    <div className="message_content">
                      <div className="company_name">Imperialsoft</div>
                      <div className="message_text">Hey, don’t forget to clear server cache!</div>
                      <div className="message_time">25mins ago</div>
                    </div>

                    <div className="message_handlebar">
                      <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.41634" cy="2.91671" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="9.58333" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="16.25" rx="2.08333" ry="2.08333" fill="#717579" />
                      </svg>
                    </div>
                  </div>

                  <div className="message">
                    <div className="company_pics">
                      <img src={CregitalPics} alt="Cregital" />
                    </div>
                    <div className="message_content">
                      <div className="company_name">Cregital</div>
                      <div className="message_text">Hey, don’t forget to clear server cache!</div>
                      <div className="message_time">25mins ago</div>
                    </div>

                    <div className="message_handlebar">
                      <svg width="5" height="19" viewBox="0 0 5 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <ellipse cx="2.41634" cy="2.91671" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="9.58333" rx="2.08333" ry="2.08333" fill="#717579" />
                        <ellipse cx="2.41634" cy="16.25" rx="2.08333" ry="2.08333" fill="#717579" />
                      </svg>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
