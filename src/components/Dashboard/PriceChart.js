import HighChartsConfig from './HighChartsConfig';
import React from 'react';
import { AppContext } from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';
import HighChartsTheme from './HighChartsTheme';
import './Dashboard.css';
ReactHighCharts.Highcharts.setOptions(HighChartsTheme);
//visualization of crypto data using high charts
const PriceChart = () => {
  return (
    <AppContext.Consumer>
      {({ historical }) => (
        <div>
          {historical ? (
            <ReactHighCharts config={HighChartsConfig(historical)} />
          ) : (
            <div className="coinHistory">
              Loading History...Its a slow process
            </div>
          )}
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default PriceChart;
