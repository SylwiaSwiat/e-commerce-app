import React from 'react';
import './Item.css'
import AddedItem from './AddedItem';
import './ShoppingCart.css'
import { Link } from 'react-router-dom';


const ShoppingCart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleClear, totalPrice }) => {
    const empty = <div className='noResult'>
        <p className='noResultInfo'>Shopping Cart is empty</p>
        <img className='noResultImg' src="./images/empty cart.png" alt="" />
        </div>
   
    return (
        <div className='container'>
    <div className="cartProducts">
        {cartItems.length === 0 && empty}
        {cartItems.map((item) => <AddedItem title={item.title} image={item.image} price={item.price} quantity={item.quantity} key={item.id} id={item.id} handleAddProduct={handleAddProduct} item={item} handleRemoveProduct={handleRemoveProduct} handleClear={handleClear} />)}
        <div> {cartItems.length >= 1 && (
            <div className='total'>
                  <p>Total price: {totalPrice}$</p>
                 <Link to='/collect-step1' className='collect-step1'> <button className='collectBtn-step1'>Buy</button></Link>
                    
            </div>
          
        )}

        </div>
    </div>
    </div>
    );
}

export default ShoppingCart;