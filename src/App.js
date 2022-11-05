import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import Products from './pages/Products';
import ShoppingCart from './pages/ShoppingCart'
import React, {useState, useEffect} from 'react';
import products from './pages/Data';
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Footer from './pages/Footer';
import ScrollToTop from './pages/ScrollToTop';
import BuyForm from './pages/BuyForm';
import OrderSummary from './pages/OrderSummary';

function App() {
  const cartItemsStorage = JSON.parse(localStorage.getItem('cartItems'))||[]
  
  const [cartItems, setCartItems] = useState(cartItemsStorage);
  const [searchItem, setSearchItem] = useState('')
const [cartSuccess, setCartSuccess] = useState(false)
const [isPop, setIsPop] = useState(false);
const [loading, setLoading] = useState(false);
const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);

useEffect(()=>{
  setLoading(true);
   setTimeout(()=>{
     setLoading(false)
   }, 3000)
},[])
    useEffect(()=>{
      localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])
    const handleTop = ()=>{
      window.scrollTo(0,0);
  }

  const handleAddProduct = (product) => {
setIsPop(true)
setTimeout(()=>{
  setIsPop(false)
},700)
    const productExist = cartItems.find((item)=> item.id===product.id)
     if(productExist){
      setCartItems(cartItems.map((item)=> item.id===product.id? 
      {...productExist, quantity:productExist.quantity+1} : item))
      } else{
      setCartItems([...cartItems, {...product, quantity:1}])
     }
 }
 const handleRemoveProduct=(product)=>{
  const productExist = cartItems.find((item)=> item.id===product.id)
  if(productExist.quantity===1){
    setCartItems(cartItems.filter((item)=> item.id!==product.id));
  } else{
    setCartItems(cartItems.map((item)=> item.id===product.id
    ?{...productExist, quantity: productExist.quantity-1} : item));
  }
 };

 const handleClear= (product)=>{
  const productExist = cartItems.find((item)=> item.id===product.id)
  if(productExist){
    setCartItems(cartItems.filter((item)=> item.id!==product.id));
  }
 }
const handleCartClearance=()=>{
  setCartItems([]);
handleTop();
  setCartSuccess(true);
  setTimeout(() => {
    setCartSuccess(false) 
}, 3000)
}

  return (
    <>
     {/* {loading? <div className='loading'>
     </div> :  */}
     
     <div className="App">
      <Router>
        <ScrollToTop/>
      <Nav cartItems={cartItems} searchItem={searchItem} setSearchItem={setSearchItem} isPop={isPop}/>
      <Routes>
        <Route path='/'exact element={<Home/>}></Route>
        <Route path='/shopping-cart' exact element={<ShoppingCart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleClear={handleClear} totalPrice={totalPrice}/>}></Route>
        <Route path='/products' exact element={<Products handleAddProduct={handleAddProduct} products={products} searchItem={searchItem} setSearchItem={setSearchItem}  />}></Route>
        <Route path='/register' exact element={<Register/>}></Route>
        <Route path='/sign-in'exact element={<SignIn/>}></Route>
        <Route path='/collect-step1' exact element={<BuyForm handleCartClearance={handleCartClearance} cartItems={cartItems} setCartSuccess={setCartSuccess} cartSuccess={cartSuccess} totalPrice={totalPrice}/> }></Route>
        <Route path='/collect-step2' exact element={<OrderSummary setCartItems={setCartItems} cartItems={cartItems} handleCartClearance={handleCartClearance}/>} setCartSuccess={setCartSuccess} cartSuccess={cartSuccess} totalPrice={totalPrice}></Route>
      </Routes>
      <Footer/>
      </Router>
      
    </div>
    {/* } */}
    
    </>
   
  );
}

export default App;
