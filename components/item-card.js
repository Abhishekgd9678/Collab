import React, { useState } from 'react';
import Images from '../images.js';
import data from "./data.json"

const Card = () => {
  
  return (

    <div className="Card">
      <button className="btn">
        {"<"}
      </button>

      {data.data.map((e)=>{
        return (
          <>
          <div className='image-div'>
       
            <img className="round-image" src={e.link}/>
             <h4 className='image-des'>{e.desp}</h4>
        
         
          </div>
          
          </>
        )
      })}
     
      <button className="btn" >
       {">"}
      </button>
    </div>
  );
};

export default Card;
