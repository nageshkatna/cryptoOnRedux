import React from 'react'

const MarketCap = (props) => {

    var marketcap = props.marketvalue;
    var marketcapValue = Math.abs(Number(marketcap))/1.0e+9;
        marketcapValue = "$"+marketcapValue.toFixed(2)+"B";
    
  return (
      <div>
        {marketcapValue}
      </div>
  )
}
 
export default MarketCap;