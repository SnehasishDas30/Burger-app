import React from "react";
import { Link } from "react-router-dom";

function Success() {
  return (
    <div
      className="container text-center"
      style={{ marginTop: "100px" }}
    >
      <div className="card shadow border-0 p-5">
        <div
          style={{
            fontSize: "80px",
            color: "#28a745",
          }}
        >
          <i className="bi bi-check-circle-fill"></i>
        </div>

        <h1 className="mt-3 text-success">
          Order Placed Successfully!
        </h1>

        <p className="text-muted fs-5">
          Thank you for ordering from us 🍔
        </p>

        <p>
          Your delicious food is being prepared.
        </p>

        <Link
          to="/"
          className="btn btn-danger mt-3 px-4"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default Success;