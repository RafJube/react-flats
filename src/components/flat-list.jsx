import React from 'react';

import Flat from './flat';

const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.flats.map((flat, index) => <Flat
        name={flat.name}
        price={flat.price}
        priceCurrency={flat.priceCurrency}
        url={flat.imageUrl}
        key={index}
        index={index}
        selected={flat.name === props.selectedFlat.name}
        selectFlat={props.selectFlat} />)}
    </div>
  );
}

export default FlatList;
