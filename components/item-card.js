import React, { useState } from 'react';
import Images from '../images_stack.js';
import data from "../data_bb.json"

const Card = () => {
  
  return (
    <div className='cards'>
      {/* {
        data.top_links.map((x)=>{
          return(
            <div>
              <img src={x?.url}/>
              <h3>{x?.display_name}</h3>
            </div>
          )
        })
      } */}
    </div>
  );
};

export default Card;
