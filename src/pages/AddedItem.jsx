import './Item.css'
import './AddedItem.css'
const AddedItem = ({ title, price, image, quantity, handleAddProduct, item, handleRemoveProduct, handleClear }) => {
    const theprice = price * quantity
    return (
        <div>
            <div className='addedItem'>

            <div className='addedItemInfoAndPhoto'>
            <img src={image} alt="" />
                <div className='addedItemInfo'>
                <h5>{title}</h5>
                <p> Price: {theprice}$</p>
                <p>Price per item: {price}$</p>
                <div className='addedItemQuantity'>
                <button className='quantityBtn' onClick={() => handleRemoveProduct(item)}> - </button>
                <p>{quantity}</p>
                <button className='quantityBtn' onClick={() => handleAddProduct(item)}> + </button>
                <button className='trash' onClick={()=>handleClear(item)}> <i className="fas fa-trash"></i> </button>
                    </div>
                </div>
                </div> 

                 

            </div>
            
        </div>

    );
}

export default AddedItem;