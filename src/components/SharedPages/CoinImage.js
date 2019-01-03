import React from 'react';
//resusuable image container fn
const CoinImage = props => {
  return (
    //returns image with coin symbol, style and src
    <img
      alt={props.coins.CoinSymbol}
      style={props.style || { height: '50px' }}
      src={`//cryptocompare.com/${props.coins.ImageUrl}`}
    />
  );
};
export default CoinImage;
