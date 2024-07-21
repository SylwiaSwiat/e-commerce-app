import { useState } from "react";
import OrderSummary from "./OrderSummary";

const BuyForm = ({
  handleCartClearance,
  setCartSuccess,
  cartSuccess,
  totalPrice,
}) => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("");
  const [payment, setPayment] = useState("");
  const [delivery, setDelivery] = useState("");
  const [collect, setCollect] = useState(false);

  const stepTwo = () => {
    setCollect(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      name &&
      lastName &&
      phone &&
      email &&
      street &&
      city &&
      zip &&
      country &&
      payment &&
      delivery
    )
      stepTwo();
  };
  const handleTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <>
      <div className={`container ${collect ? "hide" : ""}`}>
        <form onSubmit={handleSubmit}>
          <h1>Your Order</h1>
          <div className="personalData">
            <p className="dataText">Personal data</p>
            <div className="dataInputs">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your name"
                onChange={(e) => setName(e.target.value)}
                className="formInput personal"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your last name"
                onChange={(e) => setLastName(e.target.value)}
                className="formInput personal"
              />
              <input
                type="text"
                placeholder="Your phone number"
                onChange={(e) => setPhone(e.target.value)}
                className="formInput personal"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Your email"
                onChange={(e) => setEmail(e.target.value)}
                className="formInput personal"
              />
            </div>
          </div>
          <div className="deliveryAddress">
            <p className="dataText">Delivery address</p>
            <div className="dataInputs">
              <input
                type="text"
                placeholder="Street address"
                onChange={(e) => setStreet(e.target.value)}
                className="formInput personal"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="City"
                onChange={(e) => setCity(e.target.value)}
                className="formInput personal"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Zip Code"
                onChange={(e) => setZip(e.target.value)}
                className="formInput personal"
              />
              <input
                type="text"
                name=""
                id=""
                placeholder="Country"
                onChange={(e) => setCountry(e.target.value)}
                className="formInput personal"
              />
            </div>
          </div>
          <div className="payAndDeliver">
            <div className="payment">
              <select
                name="payment"
                id=""
                onChange={(e) => setPayment(e.target.value)}
              >
                <option value="">Payment method</option>
                <option value="Electronic bank transfer">
                  Electronic bank transfer
                </option>
                <option value="Blik">Blik</option>
                <option value="Cash">Cash</option>
              </select>
            </div>
            <div className="delivery">
              <select
                name="delivery"
                id=""
                onChange={(e) => setDelivery(e.target.value)}
              >
                <option value="">Delivery method</option>
                <option value="Courier">Courier</option>
                <option value="Parcel locker">Parcel locker</option>
                <option value="Self-pickup">Self-pickup</option>
              </select>
            </div>
          </div>

          <button className="registerBtn buyForm" onClick={handleTop}>
            Summary
          </button>
        </form>
      </div>
      <OrderSummary
        stepTwo={stepTwo}
        collect={collect}
        setCollect={setCollect}
        name={name}
        lastName={lastName}
        phone={phone}
        email={email}
        street={street}
        city={city}
        zip={zip}
        country={country}
        payment={payment}
        delivery={delivery}
        handleCartClearance={handleCartClearance}
        setCartSuccess={setCartSuccess}
        cartSuccess={cartSuccess}
        totalPrice={totalPrice}
      />
    </>
  );
};

export default BuyForm;
