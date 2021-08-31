import React, { useState } from 'react';
import moment from "moment";

import Hairstyles from '../Hairstyles';
import { FaCartPlus } from 'react-icons/fa';
import Cart from '../Cart';
import Icons from '../helpers/icons';
import Log from '../../static/assets/images/design11.jpg';
import Logo from '../../static/assets/images/design3.jpg';
import Log12 from '../../static/assets/images/design7.jpg';
import  Log13 from '../../static/assets/images/design2.jpg';
import Log11 from '../../static/assets/images/design33.jpg';
import Log61 from '../../static/assets/images/design5.jpg';
import Log21 from '../../static/assets/images/design12.jpg';
import Log22 from '../../static/assets/images/design122.jpg';
import Log24 from '../../static/assets/images/design121.jpg';
import Log5 from '../../static/assets/images/design10.jpg';
import Log4 from '../../static/assets/images/design21.jpg';
import Lo3 from '../../static/assets/images/design9.jpg';
import Log14 from '../../static/assets/images/design44.jpg';
import Log10 from '../../static/assets/images/design4.jpg';
import Log2 from '../../static/assets/images/design41.jpg';
import Log333 from '../../static/assets/images/person31.png';
import Logo1 from '../../static/assets/images/design1.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const PAGE_HAIRSTYLES = 'hairstyles';
const PAGE_CART = 'cart';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('PAGE_HAIRSTYLES');
  
  const addToCart = (hairstyle) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => hairstyle.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...hairstyle,
        quantity: 1,
      };
    newCart.push(itemInCart);
  }
    setCart(newCart);
  };

  // const removeFromCart = (hairstyleToRemove) => {
  //   setCart(
  //     cart.filter((hairstyle) => hairstyle !== hairstyleToRemove)
  //   );
  // };

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, {quantity}) => sum + quantity, 
      0
    );
  };
  const setQuantity = (hairstyle, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === hairstyle.name
    ).quantity = amount;
    setCart(newCart);
  };
  
  Icons();
  return (
    <div className='background'>
    <div className='app'>
      {/* {this.props.children} */}
      <header>
        <button className='btn' onClick={() => navigateTo(PAGE_CART)}>
        <FaCartPlus /> ({getCartTotal()})
        </button>

        <button className='designs' onClick={() => navigateTo(PAGE_HAIRSTYLES)}>
          HAIRSTYLES
        </button>
      </header>
      <div className='banner-section'>
      {page === PAGE_HAIRSTYLES && ( 
          <Hairstyles addToCart={addToCart} />
      )} 
      </div>
      {page === PAGE_CART && (
        <Cart  
          cart={cart}
          setQuantity={setQuantity} 
          //removeFromCart={removeFromCart} 
         // clearCart={clearCart} 
         setCart={setCart}
          />
      )}
    </div>
    </div>
    );
  }

export default App;

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design11-img' src="../../../static/assets/images/design11.jpg" alt=""/>
            <button>
                 <FaCartPlus /> add to bag   
                Add to Cart
            </button> 
        </div>
          <h3>Big Knotless</h3>
          <h4>$120</h4>
      </div> */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design3-img' src="../../../static/assets/images/design3.jpg" alt=""/>
            <button>
                <FaCartPlus /> add to bag   
               Add to Cart
            </button> 
        </div>
          <h3>women cornrows</h3>
          <h4>$80</h4>
      </div> */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design7-img' src="../../../static/assets/images/design7.jpg" alt="log12"/>
            <button>
              
              Add to Cart
            </button> 
        </div>
          <h3>Knotless</h3>
          <h4>$180</h4>
      </div> */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design2-img' src="../../../static/assets/images/design2.jpg" alt="log13"/>
            <button>
            
              Add to Cart
            </button> 
            </div>
              <h3>Box Braid</h3>
              <h4>$60</h4>
      </div> */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design33-img' src="../../../static/assets/images/design33.jpg" alt=""/>
            <button>
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Dread Locks</h3>
          <h4>$70</h4>
      </div>  */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design5-img' src="../../../static/assets/images/design5.jpg" alt=""/>
            <button>
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>box braids</h3>
          <h4>$60</h4>
      </div> */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design12-img' src="../../../static/assets/images/design12.jpg" alt=""/>
            <button>
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Fake dread locks</h3>
          <h4>$250</h4>
      </div> */}
      
      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design122-img' src="../../../static/assets/images/design122.jpg" alt=""/>
            <button className="bag-btn" data-id="14">
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Two braids</h3>
          <h4>$25</h4>
      </div> */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design10-img' src="../../../static/assets/images/design10.jpg" alt=""/>
            <button className="bag-btn" data-id="11">
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Ponytail</h3>
          <h4>$90</h4>
      </div> */}

      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design121-img' src="../../../static/assets/images/design121.jpg" alt=""/>
            <button className="bag-btn" data-id="13">
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Long Senegalese Twist</h3>
          <h4>$180</h4>
      </div> */}

      {/* single hairstyle  */}
      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design9-img' src="../../../static/assets/images/design9.jpg" alt=""/>
            <button className="bag-btn" data-id="10">
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Men Design</h3>
          <h4>$70</h4>
      </div> */}

      {/* single hairstyle  */}
      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design21-img' src="../../../static/assets/images/design21.jpg" alt=""/>
            <button className="bag-btn" data-id="12">
             <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Senegalese Twist</h3>
          <h4>$100</h4>
      </div> */}

      {/* single hairstyle  */}
      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design44-img' src="../../../static/assets/images/design44.jpg" alt=""/>
            <button className="bag-btn" data- id="5">
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Two Braids No Ext</h3>
          <h4>$25</h4>
      </div> */}

      {/* single hairstyle  */}
      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design4-img' src="../../../static/assets/images/design4.jpg" alt=""/>
            <button className="bag-btn" data-id="7">
               <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Kiki Twist</h3>
          <h4>$120</h4>
      </div> */}

      {/* single hairstyle  */}
      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design41-img' src="../../../static/assets/images/design41.jpg" alt=""/>
            <button className="bag-btn" data-id="8">
             <FaCartPlus /> add to bag 
              Add to Cart
            </button> 
        </div>
          <h3>Lemonade Cornrows</h3>
          <h4>$80</h4>
      </div> */}

      {/* (single design ) */}
      {/* <div className="hairstyle">
        <div className="img-container">
          <img className='design1-img' src="../../../static/assets/images/design1.jpg" alt=""/>
            <button className="bag-btn" data-id="1">
               <FaCartPlus /> add to bag 
            </button> 
        </div>
          <h3>Men Cornrows</h3>
          <h4>$40</h4>
      </div> */}

   