//import React from 'react';
import React, { useState } from 'react';

export default function Hairstyles({ addToCart }) { 
      const [hairstyles] = useState([
            {
              name: 'Big Knotless',
              cost: 120,
              image: "../../../static/assets/images/design11.jpg",
            },
            {
              name: 'women cornrows',
              cost: 80,
              image: "../../../static/assets/images/design3.jpg",
            },
            {
              name: 'Box Braid',
              cost: 60,
              image: "../../../static/assets/images/design2.jpg",
            },
            {
              name: 'Men Cornrows',
              cost: 40,
              image: "../../../static/assets/images/design1.jpg",
            },
            {
              name: 'Lemonade Cornrows',
              cost: 80,
              image: "../../../static/assets/images/design41.jpg",
            },
            {
              name: 'Two Braids No Ext',
              cost: 25,
              image: "../../../static/assets/images/design44.jpg",
            },
            {
              name: 'Senegalese Twist',
              cost: 100,
              image: "../../../static/assets/images/design21.jpg",
            },
            {
              name: 'Men Design',
              cost: 70,
              image: "../../../static/assets/images/design9.jpg",
            },
            {
              name: 'Long Senegalese Twist',
              cost: 180,
              image: "../../../static/assets/images/design121.jpg",
            },
            {
              name: 'Ponytail',
              cost: 90,
              image: "../../../static/assets/images/design10.jpg",
            },
            {
              name: 'Two braids',
              cost: 25,
              image: "../../../static/assets/images/design122.jpg",
            },
            {
              name: 'Fake dread locks',
              cost: 250,
              image: "../../../static/assets/images/design12.jpg",
            },
            {
              name: 'box braids',
              cost: 60,
              image: "../../../static/assets/images/design5.jpg",
            },
      ]);

      return (
            <div> 
                  <h1 className='hairstyle'>Our Hairstyles</h1>
                  <div className='hairstyles'>
                        {hairstyles.map((hairstyle, idx) => (
                              <div className="hairstyle-view" key={idx}>
                                    <h3>{hairstyle.name}</h3>
                                    <h4>${hairstyle.cost}</h4>
                                    <img src={hairstyle.image} alt={hairstyle.name} />
                                    <button className='add' onClick={() => addToCart(hairstyle)}>
                                          Add to Cart
                                    </button>
                              </div>
                        ))}
                  </div> 
            </div>
      );
}
