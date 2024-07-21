import "./Footer.css";
import { Link } from "react-router-dom";
const Footer = () => {
  const handleTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="footer">
      <div className="footer-left">
        <Link to="/" className="footer-logo">
          <img src="./images/logo.png" alt="" width={200} />
        </Link>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae velit
          accusamus reprehenderit quo perferendis maxime iste facere
          repellendus.{" "}
        </p>
        <div className="social">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
      <div className="footer-center">
        <h5>Useful links</h5>
        <p onClick={handleTop}>
          <Link to="/" className="footer-link">
            Home
          </Link>
        </p>
        <p onClick={handleTop}>
          <Link to="/products" className="footer-link">
            Products
          </Link>
        </p>
        <p onClick={handleTop}>
          <Link to="/shopping-cart" className="footer-link">
            Shopping Cart
          </Link>
        </p>

        <p onClick={handleTop}>
          <Link to="/register" className="footer-link">
            Register
          </Link>
        </p>
        <p onClick={handleTop}>
          <Link to="/sign-in" className="footer-link">
            Login
          </Link>
        </p>
      </div>
      <div className="footer-right">
        <h5>Contact</h5>
        <p>
          <i className="fas fa-map-marker-alt"></i>127 Example Street, Somecity
          12345
        </p>
        <p>
          {" "}
          <i className="fas fa-mobile"></i>
          <a href="tel:+00 123 456 789">+00 123 456 789</a>
        </p>
        <p>
          <i className="fas fa-envelope"></i>
          <a href="example@anydomain.com">Example@anydomain.com</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
