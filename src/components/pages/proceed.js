import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Cart from '../../cart';
class Proceed extends Component {

      render() {
            return (
                  <div>
                        <div className='background-image'>
                              <div className='navbar'>
                                    <div className='right-side'>
                                          <NavLink to='/'>Admin</NavLink>
                                    </div>
                              </div>
                         <Cart />  
                        <div className='main'>

                        </div> 
                        <footer> All right is reserved</footer>  
                        </div>
                        <Cart /> 
                  </div>
            );
      }
}

export default Proceed;