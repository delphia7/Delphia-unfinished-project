import React from 'react';
import moment from "moment";
import { Link } from 'react-router-dom';
//import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import Home from './pages/home';
//import Proceed from './components/pages/proceed';
import { FaSignOutAlt } from 'react-icons/fa'; 

export default function Cart({ 
      cart,
      setCart,
      setQuantity,
}) {
      const getTotalSum = () => {
            return cart.reduce((sum, { cost, quantity }) => sum +  cost * quantity, 
            0
            );
      };

      const clearCart = () => {
            setCart([]);
      };

      const removeFromCart = (hairstyleToRemove) => {
            setCart(
              cart.filter((hairstyle) => hairstyle !== hairstyleToRemove)
            );
      };

      // const goTo=()=>{
           
      // }
      const proceed=()=>{

      }

      return (
            <div>
            {/* <div className='background'> */}
            <div className="date">
                  <h1> {moment().format('MMMM Do YYYY, h:mm:ss a')}</h1> 
            <div className='background'>
            <div className='hero'> 
                  <div className='banner-section'>
                  <h1 className='title-cart'>Cart</h1>
                  {cart.length > 0 && (
                        <button className='clear'onClick={clearCart}>Clear Cart</button> // cart shows only when there is items in it
                  )}
                  </div>
            </div>
                  <div className='hairstyles'>
                        {cart.map((hairstyle, idx) => (
                              <div className="hairstyle-cart" key={idx}>
                                    <h3>{hairstyle.name}</h3>
                                    <h4>${hairstyle.cost}</h4>
                                    <input 
                                          value={hairstyle.quantity}
                                          onChange={(e) => 
                                                setQuantity(
                                                      hairstyle, 
                                                      parseInt(e.target.value)
                                                )
                                          }          
                                    />
                                    <img src={hairstyle.image} alt={hairstyle.name} />
                                    <button className='remove' onClick={() => removeFromCart(hairstyle)}>
                                          Remove
                                    </button> 
                              </div>
                        ))}
                  </div> 
                  <div className='total'>Total Cost: ${getTotalSum()}</div>
            </div> 
            <div className='nav-link'>
            <Link exact to='/proceed' >Proceed</Link>
            </div> 
            </div>
            {/* <NavLink exact to='/'>
            <button className='next'><FaSignOutAlt /></button></NavLink> */}
            </div> 
            
      );
}