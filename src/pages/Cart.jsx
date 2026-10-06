import {
  ArrowRight,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  Truck,
  ShieldCheck,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";

import { useShop } from "../context/ShopContext";

function Cart() {
  const navigate = useNavigate();

  const {
    cart,
    cartCount,
    cartSubtotal,
    shipping,
    cartTotal,
    updateCartQuantity,
    removeFromCart,
    clearCart,
  } = useShop();

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateCartQuantity(
        item.id,
        item.quantity - 1
      );
    }
  };

  const handleIncrease = (item) => {
    if (item.quantity < item.stock) {
      updateCartQuantity(
        item.id,
        item.quantity + 1
      );
    }
  };

  const handleRemove = (item) => {
    removeFromCart(item.id);
  };

  const handleClearCart = () => {
    const confirmed = window.confirm(
      "Are you sure you want to clear your cart?"
    );

    if (confirmed) {
      clearCart();
    }
  };

  const handleCheckout = () => {
    if (cart.length === 0) return;

    navigate("/checkout");
  };

  // Empty Cart
  if (cart.length === 0) {
    return (
      <div className="cart-page">

        <section className="cart-empty-section">
          <div className="cart-empty-container">

            <div className="cart-empty-icon">
              <ShoppingBag size={42} />
            </div>

            <span className="section-label">
              YOUR CART
            </span>

            <h1>Your Cart Is Empty</h1>

            <p>
              Looks like you haven't added anything
              to your cart yet. Explore our products
              and find something you love.
            </p>

            <Link
              to="/products"
              className="primary-button"
            >
              Start Shopping
              <ArrowRight size={19} />
            </Link>

          </div>
        </section>

      </div>
    );
  }

  return (
    <div className="cart-page">

      {/* Page Header */}
      <section className="cart-header-section">
        <div className="cart-header-container">

          <span className="section-label">
            SHOPPING CART
          </span>

          <h1>Your Shopping Cart</h1>

          <p>
            Review your items before proceeding
            to checkout.
          </p>

        </div>
      </section>

      {/* Cart Content */}
      <section className="cart-content-section">

        <div className="cart-container">

          {/* Left Side */}
          <div className="cart-items-section">

            <div className="cart-items-header">

              <div>
                <h2>
                  Cart Items
                </h2>

                <span>
                  {cartCount}{" "}
                  {cartCount === 1
                    ? "item"
                    : "items"}
                </span>
              </div>

              <button
                type="button"
                className="clear-cart-button"
                onClick={handleClearCart}
              >
                <Trash2 size={17} />
                Clear Cart
              </button>

            </div>

            {/* Items */}
            <div className="cart-items-list">

              {cart.map((item) => {

                const itemTotal =
                  Number(item.price) *
                  item.quantity;

                return (
                  <article
                    key={item.id}
                    className="cart-item"
                  >

                    {/* Image */}
                    <Link
                      to={`/products/${item.id}`}
                      className="cart-item-image"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </Link>

                    {/* Information */}
                    <div className="cart-item-info">

                      <span className="cart-item-category">
                        {item.category}
                      </span>

                      <Link
                        to={`/products/${item.id}`}
                        className="cart-item-name"
                      >
                        {item.name}
                      </Link>

                      <span className="cart-item-price">
                        $
                        {Number(item.price).toFixed(
                          2
                        )}
                      </span>

                      {/* Quantity */}
                      <div className="cart-item-bottom">

                        <div className="cart-quantity">

                          <button
                            type="button"
                            onClick={() =>
                              handleDecrease(item)
                            }
                            disabled={
                              item.quantity <= 1
                            }
                            aria-label="Decrease quantity"
                          >
                            <Minus size={15} />
                          </button>

                          <span>
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              handleIncrease(item)
                            }
                            disabled={
                              item.quantity >=
                              item.stock
                            }
                            aria-label="Increase quantity"
                          >
                            <Plus size={15} />
                          </button>

                        </div>

                        <strong className="cart-item-total">
                          $
                          {itemTotal.toFixed(2)}
                        </strong>

                      </div>

                    </div>

                    {/* Remove */}
                    <button
                      type="button"
                      className="cart-remove-button"
                      onClick={() =>
                        handleRemove(item)
                      }
                      aria-label={`Remove ${item.name}`}
                      title="Remove item"
                    >
                      <Trash2 size={19} />
                    </button>

                  </article>
                );
              })}

            </div>

            {/* Continue Shopping */}
            <Link
              to="/products"
              className="continue-shopping"
            >
              <ArrowRight
                size={18}
                style={{
                  transform: "rotate(180deg)",
                }}
              />

              Continue Shopping
            </Link>

          </div>

          {/* Right Side - Summary */}
          <aside className="cart-summary">

            <div className="cart-summary-card">

              <div className="cart-summary-header">
                <span className="section-label">
                  ORDER SUMMARY
                </span>

                <h2>
                  Cart Summary
                </h2>
              </div>

              {/* Subtotal */}
              <div className="summary-row">
                <span>
                  Subtotal
                </span>

                <strong>
                  ${cartSubtotal.toFixed(2)}
                </strong>
              </div>

              {/* Shipping */}
              <div className="summary-row">
                <span>
                  Shipping
                </span>

                <strong>
                  {shipping === 0
                    ? "FREE"
                    : `$${shipping.toFixed(2)}`}
                </strong>
              </div>

              {shipping === 0 && (
                <p className="free-shipping-message">
                  🎉 You qualify for free shipping!
                </p>
              )}

              {/* Divider */}
              <div className="summary-divider" />

              {/* Total */}
              <div className="summary-total-row">

                <span>
                  Total
                </span>

                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>

              </div>

              {/* Checkout */}
              <button
                type="button"
                className="checkout-button"
                onClick={handleCheckout}
              >
                Proceed to Checkout
                <ArrowRight size={19} />
              </button>

              {/* Benefits */}
              <div className="cart-summary-benefits">

                <div className="cart-summary-benefit">

                  <Truck size={21} />

                  <div>
                    <strong>
                      Fast Delivery
                    </strong>

                    <span>
                      Quick & reliable shipping
                    </span>
                  </div>

                </div>

                <div className="cart-summary-benefit">

                  <ShieldCheck size={21} />

                  <div>
                    <strong>
                      Secure Checkout
                    </strong>

                    <span>
                      Your payment is protected
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </aside>

        </div>

      </section>

    </div>
  );
}

export default Cart;