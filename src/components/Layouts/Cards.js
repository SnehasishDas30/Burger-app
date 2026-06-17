
import React from "react";
import { Col, Card } from "react-bootstrap";
import { toast } from "react-toastify";

function Cards({
  image,
  rating,
  title,
  paragraph,
  price,
  renderRatingIcons,
  addToCart,
  item,
}) {

  const handleWishlist = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
      toast.error("Please Login First!");

      setTimeout(() => {
        window.location.href = "/login";
      }, 1000);

      return;
    }

    const wishlist =
      JSON.parse(localStorage.getItem("wishlist")) || [];

    const exists = wishlist.find((i) => i.id === item.id);

    if (exists) {
      toast.info("Already Added to Wishlist!");
      return;
    }

    wishlist.push(item);

    localStorage.setItem(
      "wishlist",
      JSON.stringify(wishlist)
    );

    toast.success("Added to Wishlist ❤️");
  };

  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="overflow-hidden">
          <Card.Img variant="top" src={image} />
        </div>

        <Card.Body>
          <div className="d-flex align-items-center justify-content-between">

            <div className="item_rating">
              {renderRatingIcons(rating)}
            </div>

            <div
              className="wishlist"
              style={{
                cursor: "pointer",
                fontSize: "20px",
                color: "red",
              }}
              onClick={handleWishlist}
            >
              <i className="bi bi-heart-fill"></i>
            </div>

          </div>

          <Card.Title>{title}</Card.Title>

          <Card.Text>{paragraph}</Card.Text>

          <div className="d-flex align-items-center justify-content-between">

            <div className="menu_price">
              <h5 className="mb-0">${price}</h5>
            </div>

            <div className="add_to_card">
              <button
                className="btn btn-danger btn-sm"
                onClick={() => addToCart(item)}
              >
                <i className="bi bi-bag me-2"></i>
                Add To Cart
              </button>
            </div>

          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Cards;

