import React from 'react'
import './AnalyticsCard.css';


function AnalyticsCards() {
    return (
        <div className="grid_card_container">
            <div className="registered_companies_card analytic_card">
                <p className="card_title">Registered companies</p>
                <h4 className="stats">849</h4>
                <p>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0L0 5H3.33333L3.33333 10L6.66667 10V5H10L5 0Z" fill="#50B83C" />
                    </svg>
                    <span className="stats_num color-green">5.25%</span>
                </p>
                <p className="period_card">Since last week</p>
            </div>

            <div className="new_application_card analytic_card">
                <p className="card_title">New application</p>
                <h4 className="stats">508</h4>
                <p>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10L0 5H3.33333L3.33333 0L6.66667 0V5H10L5 10Z" fill="#F52D56" />
                    </svg>
                    <span className="stats_num color-red">1.23%</span>
                </p>
                <p className="period_card">Since last week</p>
            </div>

            <div className="project_done_card analytic_card">
                <p className="card_title">Total project done</p>
                <h4 className="stats">1043</h4>
                <p>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10L0 5H3.33333L3.33333 0L6.66667 0V5H10L5 10Z" fill="#F52D56" />
                    </svg>
                    <span className="stats_num color-red">1.23%</span>
                </p>
                <p className="period_card">Since last week</p>
            </div>

            <div className="new_project_card analytic_card">
                <p className="card_title">New projects</p>
                <h4 className="stats">38</h4>
                <p>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 0L0 5H3.33333L3.33333 10L6.66667 10V5H10L5 0Z" fill="#50B83C" />
                    </svg>
                    <span className="stats_num color-green">5.25%</span>
                </p>
                <p className="period_card">Since last week</p>
            </div>
        </div>

        // </div>


    )
}

export default AnalyticsCards
