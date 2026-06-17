import React, { useContext } from "react";
import { WishlistContext } from "../../context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } =
    useContext(WishlistContext);

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">
        ❤️ My Wishlist
      </h2>

      {wishlist.length === 0 ? (
        <h4 className="text-center text-muted">
          Wishlist is Empty
        </h4>
      ) : (
        wishlist.map((item) => (
          <div
            key={item.id}
            className="card p-3 mb-3 shadow-sm"
          >
            <div className="row align-items-center">

              <div className="col-md-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid rounded"
                  style={{
                    width: "100px",
                    height: "100px",
                    objectFit: "cover",
                  }}
                />
              </div>

              <div className="col-md-7">
                <h5>{item.title}</h5>
                <p className="text-muted mb-1">
                  {item.paragraph}
                </p>
                <h5 className="text-danger">
                  ${item.price}
                </h5>
              </div>

              <div className="col-md-3 text-end">
                <button
                  className="btn btn-danger"
                  onClick={() =>
                    removeFromWishlist(item.id)
                  }
                >
                  Remove
                </button>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;