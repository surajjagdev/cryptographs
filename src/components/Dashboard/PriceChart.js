import HighChartsConfig from './HighChartsConfig';
import React from 'react';
import { AppContext } from '../App/AppProvider';
import ReactHighCharts from 'react-highcharts';
//visualization of crypto data using high charts
const PriceChart = () => {
  return (
    <AppContext.Consumer>
      {({}) => <ReactHighCharts config={HighChartsConfig()} />}
    </AppContext.Consumer>
  );
};
export default PriceChart;
