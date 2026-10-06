import {
  CalendarDays,
  ChevronDown,
  ChevronUp,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";

import { useState } from "react";

import {
  Link,
  useSearchParams,
} from "react-router-dom";

import { useShop } from "../context/ShopContext";

function Orders() {
  const {
    orders,
    user,
  } = useShop();

  const [searchParams] =
    useSearchParams();

  const successOrderId =
    searchParams.get("success");

  const [expandedOrder, setExpandedOrder] =
    useState(successOrderId || null);

  if (!user) {
    return (
      <div className="orders-page">

        <section className="orders-login-section">

          <div className="orders-login-container">

            <div className="orders-login-icon">
              <Package size={40} />
            </div>

            <span className="section-label">
              MY ORDERS
            </span>

            <h1>
              Sign in to view your orders
            </h1>

            <p>
              Please sign in to access your
              order history and delivery details.
            </p>

            <div className="orders-login-actions">

              <Link
                to="/login"
                className="primary-button"
              >
                Sign In
              </Link>

              <Link
                to="/products"
                className="secondary-button"
              >
                Continue Shopping
              </Link>

            </div>

          </div>

        </section>

      </div>
    );
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString(
      "en-US",
      {
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );
  };

  return (
    <div className="orders-page">

      {/* HEADER */}
      <section className="orders-header-section">

        <div className="orders-header-container">

          <span className="section-label">
            ORDER HISTORY
          </span>

          <h1>
            My Orders
          </h1>

          <p>
            Track your recent purchases and
            review your order details.
          </p>

        </div>

      </section>

      <section className="orders-content-section">

        <div className="orders-container">

          {/* SUCCESS MESSAGE */}
          {successOrderId && (
            <div className="order-success-banner">

              <div className="order-success-icon">
                ✓
              </div>

              <div>
                <strong>
                  Order placed successfully!
                </strong>

                <span>
                  Your order{" "}
                  <b>
                    {successOrderId}
                  </b>{" "}
                  has been created.
                </span>
              </div>

            </div>
          )}

          {orders.length === 0 ? (
            <div className="orders-empty">

              <div className="orders-empty-icon">
                <ShoppingBag size={40} />
              </div>

              <span className="section-label">
                NO ORDERS YET
              </span>

              <h2>
                Your order history is empty
              </h2>

              <p>
                Once you place an order, it will
                appear here.
              </p>

              <Link
                to="/products"
                className="primary-button"
              >
                Start Shopping
              </Link>

            </div>
          ) : (
            <div className="orders-list">

              {orders.map((order) => {

                const isExpanded =
                  expandedOrder === order.id;

                return (
                  <div
                    className={
                      isExpanded
                        ? "order-card expanded"
                        : "order-card"
                    }
                    key={order.id}
                  >

                    {/* ORDER TOP */}
                    <button
                      type="button"
                      className="order-card-header"
                      onClick={() =>
                        setExpandedOrder(
                          isExpanded
                            ? null
                            : order.id
                        )
                      }
                    >

                      <div className="order-id-section">

                        <div className="order-icon">
                          <Package size={19} />
                        </div>

                        <div>
                          <span>
                            ORDER
                          </span>

                          <strong>
                            {order.id}
                          </strong>
                        </div>

                      </div>

                      <div className="order-meta">

                        <div>
                          <span>
                            Date
                          </span>

                          <strong>
                            {formatDate(
                              order.date
                            )}
                          </strong>
                        </div>

                        <div>
                          <span>
                            Total
                          </span>

                          <strong>
                            $
                            {Number(
                              order.total
                            ).toFixed(2)}
                          </strong>
                        </div>

                        <span className="order-status">
                          {order.status}
                        </span>

                        {isExpanded ? (
                          <ChevronUp size={19} />
                        ) : (
                          <ChevronDown size={19} />
                        )}

                      </div>

                    </button>

                    {/* DETAILS */}
                    {isExpanded && (
                      <div className="order-details">

                        <div className="order-details-grid">

                          {/* ITEMS */}
                          <div className="order-detail-section">

                            <div className="order-detail-heading">

                              <ShoppingBag
                                size={17}
                              />

                              <h3>
                                Items
                              </h3>

                            </div>

                            <div className="order-items">

                              {order.items.map(
                                (item) => (
                                  <div
                                    className="order-item"
                                    key={item.id}
                                  >

                                    <div className="order-item-image">
                                      <img
                                        src={
                                          item.image
                                        }
                                        alt={
                                          item.name
                                        }
                                      />
                                    </div>

                                    <div className="order-item-info">

                                      <strong>
                                        {item.name}
                                      </strong>

                                      <span>
                                        Qty:{" "}
                                        {
                                          item.quantity
                                        }
                                      </span>

                                    </div>

                                    <b>
                                      $
                                      {(
                                        Number(
                                          item.price
                                        ) *
                                        item.quantity
                                      ).toFixed(
                                        2
                                      )}
                                    </b>

                                  </div>
                                )
                              )}

                            </div>

                          </div>

                          {/* DELIVERY */}
                          <div className="order-detail-section">

                            <div className="order-detail-heading">

                              <Truck
                                size={17}
                              />

                              <h3>
                                Delivery
                              </h3>

                            </div>

                            <div className="order-address-card">

                              <strong>
                                {
                                  order.deliveryMethod
                                }
                              </strong>

                              <p>
                                {
                                  order.shippingAddress
                                    ?.address
                                }
                              </p>

                              <p>
                                {
                                  order.shippingAddress
                                    ?.city
                                }
                                ,{" "}
                                {
                                  order.shippingAddress
                                    ?.country
                                }
                              </p>

                              <p>
                                {
                                  order.shippingAddress
                                    ?.postalCode
                                }
                              </p>

                            </div>

                            <div className="order-detail-heading payment-heading">

                              <MapPin
                                size={17}
                              />

                              <h3>
                                Payment
                              </h3>

                            </div>

                            <div className="order-payment-card">
                              {
                                order.paymentMethod
                              }
                            </div>

                          </div>

                        </div>

                        {/* SUMMARY */}
                        <div className="order-summary">

                          <div>
                            <span>
                              Subtotal
                            </span>

                            <strong>
                              $
                              {Number(
                                order.subtotal
                              ).toFixed(2)}
                            </strong>
                          </div>

                          <div>
                            <span>
                              Shipping
                            </span>

                            <strong>
                              {Number(
                                order.shipping
                              ) === 0
                                ? "FREE"
                                : `$${Number(
                                    order.shipping
                                  ).toFixed(2)}`}
                            </strong>
                          </div>

                          <div className="order-summary-total">
                            <span>
                              Total
                            </span>

                            <strong>
                              $
                              {Number(
                                order.total
                              ).toFixed(2)}
                            </strong>
                          </div>

                        </div>

                      </div>
                    )}

                  </div>
                );
              })}

            </div>
          )}

        </div>

      </section>

    </div>
  );
}

export default Orders;