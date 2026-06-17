import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4 className="text-center">Your Cart is Empty</h4>
      ) : (
        <>
          {cart.map((item, index) => (
            <div
              key={index}
              className="border rounded p-3 mb-3 d-flex justify-content-between align-items-center shadow-sm"
            >
              <div className="d-flex align-items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                  }}
                />

                <div>
                  <h5>{item.title}</h5>

                  <p className="mb-1">{item.paragraph}</p>

                  <strong className="d-block mb-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </strong>

                  <div className="d-flex align-items-center gap-2">
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => decreaseQuantity(item.id)}
                    >
                      -
                    </button>

                    <span className="fw-bold">
                      {item.quantity}
                    </span>

                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={() => increaseQuantity(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <button
                className="btn btn-danger"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}

          {/* Total Section */}
          <div
            className="mt-4 p-4 rounded"
            style={{
              background: "#f8f9fa",
              boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
            }}
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5 className="text-muted mb-1">Grand Total</h5>

                <h2 className="mb-0 text-danger">
                  ${total.toFixed(2)}
                </h2>
              </div>

              <button
                className="btn btn-danger btn-lg px-5"
                onClick={() => navigate("/checkout")}
              >
                🍔 Order Now
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;