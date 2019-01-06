import React from 'react';
import { AppContext } from '../App/AppProvider';
import './Dashboard.css';
import PriceTile from './PriceTile';
import Grid from './Grid';
const PriceGrid = () => {
  return (
    //map out the prices
    <AppContext.Consumer>
      {({ prices }) => (
        <Grid>
          {prices.map(price => (
            <PriceTile price={price} />
          ))}
        </Grid>
      )}
    </AppContext.Consumer>
  );
};
export default PriceGrid;
