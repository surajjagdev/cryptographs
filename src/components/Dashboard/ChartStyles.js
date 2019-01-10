import React from 'react';
import './Dashboard.css';
import { AppContext } from '../App/AppProvider';
const ChartStyles = () => {
  return (
    <AppContext.Consumer>
      {({ changeChartSelect }) => (
        <div className="selectData">
          <button
            id="days"
            value="days"
            onClick={e => changeChartSelect(e.target.value)}
          >
            Days
          </button>
          <button
            id="weeks"
            value="weeks"
            onClick={e => changeChartSelect(e.target.value)}
          >
            Weeks
          </button>
          <button
            id="months"
            value="months"
            onClick={e => changeChartSelect(e.target.value)}
          >
            Months
          </button>
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default ChartStyles;
