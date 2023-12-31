import React, { useState, useEffect } from 'react';
import axios from 'axios';
import fruitsAndVegetables from './card';
import { Link } from 'react-router-dom';

const clientId = 'n_F01GuAtjZop_zy9iR53CtCOGe53EtWAgC_MiVwNmY';
const UNSPLASH_ROOT = 'https://api.unsplash.com';


const ItemCard = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const descriptions = await Promise.all(
          fruitsAndVegetables.map(async (fruitOrVegetable) => {
            const { data } = await axios.get(
              `${UNSPLASH_ROOT}/search/photos?query=${fruitOrVegetable}&client_id=${clientId}&per_page=1`
            );
            return {
              name: fruitOrVegetable,
              description: data.results[0].alt_description,
              img_url: data.results[0].urls.regular,
              // pricing: /* Fetch pricing data or use a placeholder */,
            };
          })
        );

        setItems(descriptions);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-wrap justify-around">
        {items.map((item, index) => (
          <div className='w-[300px] p-3 m-3 shadow-md'>
            <Link to={"/buy/"+item.name} >
            <img className="h-[400px] w-full object-cover" src={item.img_url} />
          </Link>
          <p>{item.name}</p>
          </div>
        ))}
    </div>
  );
};

export default ItemCard;
