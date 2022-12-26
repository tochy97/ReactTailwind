import React from 'react';

function Days({ value }) {
  return (
    <>
      {
        value != 0 ?
        <div className="md:h-24 h-20 text-sm md:text-2xl px-5 py-2 cursor-pointer hover:shadow-xl">{value}</div> 
        :
        <div className="md:h-24"/>
      }
    </>
  );
}

export default Days;