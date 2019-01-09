import HighChartsConfig from './HighChartsConfig';
import React from 'react';
import { AppContext } from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';
const PriceChart = () => {
  return (
    <AppContext.Consumer>
      {({}) => (
        <div>
          <ReactHighCharts config={HighChartsConfig()} />
          <div>Hello</div>
        </div>
      )}
    </AppContext.Consumer>
  );
};
export default PriceChart;
