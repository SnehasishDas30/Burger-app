import React from "react";

function MyOrders() {
  const orders =
    JSON.parse(localStorage.getItem("orders")) || [];

  return (
    <div className="container mt-5 mb-5">
      <h2 className="text-center mb-4">
        📦 My Orders
      </h2>

      {orders.length === 0 ? (
        <h4 className="text-center text-muted">
          No Orders Found
        </h4>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            className="card shadow-sm mb-4 p-3"
          >
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h5>Order ID: {order.id}</h5>
                <p className="mb-1">
                  <strong>Date:</strong> {order.date}
                </p>
              </div>

              <span className="badge bg-warning fs-6">
                {order.status}
              </span>
            </div>

            <hr />

            <h5 className="mb-3">
              Ordered Items
            </h5>

            {order.items.map((item, index) => (
              <div
                key={index}
                className="d-flex align-items-center justify-content-between mb-3 border-bottom pb-2"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{
                      width: "70px",
                      height: "70px",
                      objectFit: "cover",
                      borderRadius: "10px",
                      marginRight: "15px",
                    }}
                  />

                  <div>
                    <h6 className="mb-1">
                      {item.title}
                    </h6>

                    <small className="text-muted">
                      Qty : {item.quantity}
                    </small>
                  </div>
                </div>

                <h6 className="text-danger">
                  $
                  {(
                    item.price *
                    item.quantity
                  ).toFixed(2)}
                </h6>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between">
              <h5>Total Amount</h5>

              <h5 className="text-success">
                ${order.total.toFixed(2)}
              </h5>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default MyOrders;