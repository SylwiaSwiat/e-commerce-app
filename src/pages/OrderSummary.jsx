
const OrderSummary = ({name, lastName, collect, setCollect, phone, email, street, city, zip, country, payment, delivery, handleCartClearance, cartSuccess, totalPrice}) => {
    
    const stepOne=()=>{
setCollect(false)
    }
  const cartSuccessMsg = <div className="cartSuccess">
    <p>Order accepted!</p>
    <img src="./images/cart success.png" alt="" />
  </div>
    return ( 
        
        <div className={`container ${collect? '' : 'hide'}`}>
            <div className="orderForm">
            <h1>Order Summary</h1>
            <div className="personalData">
            <p className="dataText" id="dataText1">Personal data</p>
            <div className="dataInputs">
            
<p>Name: {name}</p>
<p>Last name: {lastName}</p>
<p>Phone: {phone}</p>
<p>Email: {email}</p>
            </div>
              </div>
           
<div className="deliveryData">
<p className="dataText" id="dataText2">Delivery address</p>
<div className="dataInputs">
<p>Street:  {street}</p>
<p> City: {city}</p>
<p>Zip code:  {zip} </p>
<p> Country: {country}</p>
</div>
</div>
<div>
<p className="dataText">Payment method: {payment}</p>
<p className="dataText">Delivery method: {delivery}</p>
<p className="dataText">Total price: {totalPrice}$ </p>
</div>

{cartSuccess? cartSuccessMsg : null}
<div className="orderBtns">
<button onClick={stepOne} className='registerBtn'> Back </button>
<button onClick={handleCartClearance} className='registerBtn'>Confirm</button>
</div>

            </div>

        </div>
     );
}
 
export default OrderSummary;