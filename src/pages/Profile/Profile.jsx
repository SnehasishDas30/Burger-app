import React from "react";
import { Link } from "react-router-dom";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="container mt-5">
      <div className="card shadow p-4 mx-auto" style={{ maxWidth: "500px" }}>

        <div className="text-center">
          <h2>👤 My Profile</h2>
          <hr />

          <h4>{user.name}</h4>
          <p>{user.email}</p>
        </div>

        <Link to="/orders" className="btn btn-danger mt-3">
          📦 My Orders
        </Link>

        <Link to="/wishlist" className="btn btn-outline-danger mt-2">
          ❤️ My Wishlist
        </Link>
      </div>
    </div>
  );
}

export default Profile;