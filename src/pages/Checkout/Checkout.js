
import React, { useContext, useState, useEffect } from "react";
import "./Checkout.css";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      toast.error("Please Login First!");
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "",
  phone: "",
});

const handleChange = (e) => {
  setFormData({
    ...formData,
    [e.target.name]: e.target.value,
  });
};
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shippingFee = subtotal > 0 ? 10 : 0;
  const total = subtotal + shippingFee;

  
const handlePlaceOrder = () => {
  const {
    firstName,
    lastName,
    email,
    street,
    city,
    state,
    zipCode,
    country,
    phone,
  } = formData;

  // Validation
  if (
    !firstName.trim() ||
    !lastName.trim() ||
    !email.trim() ||
    !street.trim() ||
    !city.trim() ||
    !state.trim() ||
    !zipCode.trim() ||
    !country.trim() ||
    !phone.trim()
  ) {
    toast.error("Please fill all delivery information!");
    return;
  }

  // Empty Cart Check
  if (cart.length === 0) {
    toast.error("Your Cart is Empty!");
    return;
  }

  // Save Order in LocalStorage
  const order = {
    id: Date.now(),
    items: cart,
    total: total,
    customer: formData,
    status: "Preparing",
    date: new Date().toLocaleString(),
  };

  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  orders.push(order);

  localStorage.setItem(
    "orders",
    JSON.stringify(orders)
  );

  toast.success("Order Placed Successfully!");

  clearCart();

  setTimeout(() => {
    navigate("/success");
  }, 1500);
};


  return (
    <div className="checkout-container">
      <div className="row g-5">

        <div className="col-lg-7">
          <h2 className="section-title">
            DELIVERY <span>INFORMATION</span>
          </h2>

          <form className="checkout-form">

            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="form-control"
                />
              </div>
            </div>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="form-control"
            />

            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              placeholder="Street"
              className="form-control"
            />

            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="City"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="State"
                  className="form-control"
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  placeholder="Zip Code"
                  className="form-control"
                />
              </div>

              <div className="col-md-6">
                <input
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  placeholder="Country"
                  className="form-control"
                />
              </div>
            </div>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="form-control"
            />

          </form>
        </div>

        <div className="col-lg-5">
          <div className="cart-summary">

            <h2 className="section-title">
              CART <span>TOTALS</span>
            </h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping Fee</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>

            <div className="summary-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <h3 className="payment-title">
              PAYMENT <span>METHOD</span>
            </h3>

            <div className="payment-methods">

              <label className="payment-box">
                <input type="radio" name="payment" />
                <i className="bi bi-credit-card-2-front payment-icon"></i>
                <span>Stripe</span>
              </label>

              <label className="payment-box">
                <input type="radio" name="payment" />
                <i className="bi bi-wallet2 payment-icon"></i>
                <span>Razorpay</span>
              </label>

              <label className="payment-box active">
                <input
                  type="radio"
                  name="payment"
                  defaultChecked
                />
                <span className="cod-dot"></span>
                <span className="cod-text">
                  Cash On Delivery
                </span>
              </label>

            </div>

            <button
              type="button"
              className="place-order-btn"
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
            </button>

          </div>
        </div>

      </div>
    </div>
  );
}
export default Checkout;

