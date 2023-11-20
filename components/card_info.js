import React, { useEffect, useState } from 'react';
import Images from '../images_stack.js';
import data from "../data_bb.json"
import fruitsAndVegetables from './card.js';

//
import axios from 'axios'

const clientId = "n_F01GuAtjZop_zy9iR53CtCOGe53EtWAgC_MiVwNmY";

const UNSPLASH_ROOT = 'https://api.unsplash.com'

//

const Card =async (query) => {
  const [item,setItem] = useState(''); 
    const {data} = await axios.get(
      `${UNSPLASH_ROOT}/search/photos?query=${query}&client_id=${clientId}&per_page=20`
      )
      console.log(data,query)
      x = (data.results[0].description) ;
      setItem(item)
    return (
      <div className='card'>
        {data.results[0].description}
    </div>
  );
};

export default Card;
