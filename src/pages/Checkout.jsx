import { useState } from "react";

import {
  ArrowLeft,
  Check,
  CreditCard,
  LockKeyhole,
  MapPin,
  Package,
  ShoppingBag,
  Truck,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useShop } from "../context/ShopContext";

function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    cartSubtotal,
    shipping,
    cartTotal,
    placeOrder,
    user,
  } = useShop();

  const [formData, setFormData] =
    useState({
      firstName:
        user?.firstName || "",
      lastName:
        user?.lastName || "",
      email:
        user?.email || "",
      phone:
        user?.phone || "",
      address:
        user?.address || "",
      city:
        user?.city || "",
      country:
        user?.country || "Pakistan",
      postalCode: "",
    });

  const [paymentMethod, setPaymentMethod] =
    useState("Cash on Delivery");

  const [deliveryMethod, setDeliveryMethod] =
    useState("Standard Delivery");

  const [error, setError] =
    useState("");

  const [placingOrder, setPlacingOrder] =
    useState(false);

  const handleChange = (e) => {
    const { name, value } =
      e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    setError("");
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (cart.length === 0) {
      setError(
        "Your cart is empty. Add some products before checkout."
      );
      return;
    }

    setError("");
    setPlacingOrder(true);

    const order = placeOrder({
      customer: {
        firstName:
          formData.firstName.trim(),
        lastName:
          formData.lastName.trim(),
        email:
          formData.email.trim(),
        phone:
          formData.phone.trim(),
      },

      shippingAddress: {
        address:
          formData.address.trim(),
        city:
          formData.city.trim(),
        country:
          formData.country,
        postalCode:
          formData.postalCode.trim(),
      },

      paymentMethod,

      deliveryMethod,
    });

    setTimeout(() => {
      navigate(
        `/orders?success=${encodeURIComponent(
          order.id
        )}`
      );
    }, 500);
  };

  if (cart.length === 0) {
    return (
      <div className="checkout-page">

        <section className="checkout-empty-section">

          <div className="checkout-empty-container">

            <div className="checkout-empty-icon">
              <ShoppingBag size={42} />
            </div>

            <span className="section-label">
              CHECKOUT
            </span>

            <h1>
              Your cart is empty
            </h1>

            <p>
              Add some products to your cart
              before continuing to checkout.
            </p>

            <Link
              to="/products"
              className="primary-button"
            >
              Browse Products
            </Link>

          </div>

        </section>

      </div>
    );
  }

  return (
    <div className="checkout-page">

      {/* HEADER */}
      <section className="checkout-header-section">

        <div className="checkout-header-container">

          <Link
            to="/cart"
            className="checkout-back-link"
          >
            <ArrowLeft size={16} />
            Back to Cart
          </Link>

          <span className="section-label">
            SECURE CHECKOUT
          </span>

          <h1>
            Complete your order
          </h1>

          <p>
            Enter your delivery information
            and choose your preferred payment
            method.
          </p>

        </div>

      </section>

      {/* CHECKOUT */}
      <section className="checkout-content-section">

        <form
          className="checkout-container"
          onSubmit={handlePlaceOrder}
        >

          {/* LEFT */}
          <div className="checkout-main">

            {/* CONTACT */}
            <div className="checkout-card">

              <div className="checkout-card-heading">

                <div className="checkout-heading-icon">
                  <MapPin size={19} />
                </div>

                <div>
                  <h2>
                    Delivery Information
                  </h2>

                  <p>
                    Where should we deliver
                    your order?
                  </p>
                </div>

              </div>

              <div className="checkout-form-grid">

                <div className="checkout-field">

                  <label>
                    First Name
                  </label>

                  <input
                    name="firstName"
                    value={
                      formData.firstName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="First name"
                    required
                  />

                </div>

                <div className="checkout-field">

                  <label>
                    Last Name
                  </label>

                  <input
                    name="lastName"
                    value={
                      formData.lastName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Last name"
                    required
                  />

                </div>

                <div className="checkout-field">

                  <label>
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={
                      formData.email
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="you@example.com"
                    required
                  />

                </div>

                <div className="checkout-field">

                  <label>
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={
                      formData.phone
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="+92 300 1234567"
                    required
                  />

                </div>

                <div className="checkout-field full-width">

                  <label>
                    Street Address
                  </label>

                  <input
                    name="address"
                    value={
                      formData.address
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="House / street / area"
                    required
                  />

                </div>

                <div className="checkout-field">

                  <label>
                    City
                  </label>

                  <input
                    name="city"
                    value={
                      formData.city
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Lahore"
                    required
                  />

                </div>

                <div className="checkout-field">

                  <label>
                    Postal Code
                  </label>

                  <input
                    name="postalCode"
                    value={
                      formData.postalCode
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="54000"
                  />

                </div>

                <div className="checkout-field">

                  <label>
                    Country
                  </label>

                  <select
                    name="country"
                    value={
                      formData.country
                    }
                    onChange={
                      handleChange
                    }
                  >
                    <option>
                      Pakistan
                    </option>

                    <option>
                      United Arab Emirates
                    </option>

                    <option>
                      Saudi Arabia
                    </option>

                    <option>
                      United Kingdom
                    </option>

                    <option>
                      United States
                    </option>
                  </select>

                </div>

              </div>

            </div>

            {/* DELIVERY */}
            <div className="checkout-card">

              <div className="checkout-card-heading">

                <div className="checkout-heading-icon">
                  <Truck size={19} />
                </div>

                <div>
                  <h2>
                    Delivery Method
                  </h2>

                  <p>
                    Choose how you'd like to
                    receive your order.
                  </p>
                </div>

              </div>

              <div className="checkout-options">

                <label
                  className={
                    deliveryMethod ===
                    "Standard Delivery"
                      ? "checkout-option selected"
                      : "checkout-option"
                  }
                >

                  <input
                    type="radio"
                    name="delivery"
                    value="Standard Delivery"
                    checked={
                      deliveryMethod ===
                      "Standard Delivery"
                    }
                    onChange={(e) =>
                      setDeliveryMethod(
                        e.target.value
                      )
                    }
                  />

                  <Truck size={19} />

                  <div>
                    <strong>
                      Standard Delivery
                    </strong>

                    <span>
                      3–5 business days
                    </span>
                  </div>

                  <b>
                    {cartSubtotal >= 100
                      ? "FREE"
                      : `$${shipping.toFixed(2)}`}
                  </b>

                </label>

                <label
                  className={
                    deliveryMethod ===
                    "Express Delivery"
                      ? "checkout-option selected"
                      : "checkout-option"
                  }
                >

                  <input
                    type="radio"
                    name="delivery"
                    value="Express Delivery"
                    checked={
                      deliveryMethod ===
                      "Express Delivery"
                    }
                    onChange={(e) =>
                      setDeliveryMethod(
                        e.target.value
                      )
                    }
                  />

                  <Package size={19} />

                  <div>
                    <strong>
                      Express Delivery
                    </strong>

                    <span>
                      1–2 business days
                    </span>
                  </div>

                  <b>
                    $15.00
                  </b>

                </label>

              </div>

            </div>

            {/* PAYMENT */}
            <div className="checkout-card">

              <div className="checkout-card-heading">

                <div className="checkout-heading-icon">
                  <CreditCard size={19} />
                </div>

                <div>
                  <h2>
                    Payment Method
                  </h2>

                  <p>
                    Select your preferred
                    payment option.
                  </p>
                </div>

              </div>

              <div className="checkout-options">

                <label
                  className={
                    paymentMethod ===
                    "Cash on Delivery"
                      ? "checkout-option selected"
                      : "checkout-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="Cash on Delivery"
                    checked={
                      paymentMethod ===
                      "Cash on Delivery"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <Package size={19} />

                  <div>
                    <strong>
                      Cash on Delivery
                    </strong>

                    <span>
                      Pay when your order arrives
                    </span>
                  </div>

                </label>

                <label
                  className={
                    paymentMethod ===
                    "Card Payment"
                      ? "checkout-option selected"
                      : "checkout-option"
                  }
                >

                  <input
                    type="radio"
                    name="payment"
                    value="Card Payment"
                    checked={
                      paymentMethod ===
                      "Card Payment"
                    }
                    onChange={(e) =>
                      setPaymentMethod(
                        e.target.value
                      )
                    }
                  />

                  <CreditCard size={19} />

                  <div>
                    <strong>
                      Card Payment
                    </strong>

                    <span>
                      Frontend demo payment option
                    </span>
                  </div>

                </label>

              </div>

              {paymentMethod ===
                "Card Payment" && (
                <div className="checkout-demo-notice">
                  <LockKeyhole size={16} />

                  <span>
                    Card processing is a frontend
                    demo. No real payment will
                    be processed.
                  </span>
                </div>
              )}

            </div>

            {error && (
              <div className="checkout-error">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="checkout-place-order-button"
              disabled={placingOrder}
            >
              {placingOrder
                ? "Placing Order..."
                : "Place Order"}

              {!placingOrder && (
                <Check size={18} />
              )}
            </button>

          </div>

          {/* RIGHT SUMMARY */}
          <aside className="checkout-summary">

            <div className="checkout-summary-card">

              <div className="checkout-summary-heading">

                <div>
                  <span className="section-label">
                    ORDER SUMMARY
                  </span>

                  <h2>
                    Your Order
                  </h2>
                </div>

                <ShoppingBag size={20} />

              </div>

              <div className="checkout-items">

                {cart.map((item) => (
                  <div
                    className="checkout-item"
                    key={item.id}
                  >

                    <div className="checkout-item-image">
                      <img
                        src={item.image}
                        alt={item.name}
                      />
                    </div>

                    <div className="checkout-item-info">

                      <strong>
                        {item.name}
                      </strong>

                      <span>
                        Qty: {item.quantity}
                      </span>

                    </div>

                    <b>
                      $
                      {(
                        Number(item.price) *
                        item.quantity
                      ).toFixed(2)}
                    </b>

                  </div>
                ))}

              </div>

              <div className="checkout-summary-divider" />

              <div className="checkout-total-row">
                <span>
                  Subtotal
                </span>

                <strong>
                  ${cartSubtotal.toFixed(2)}
                </strong>
              </div>

              <div className="checkout-total-row">
                <span>
                  Shipping
                </span>

                <strong>
                  {shipping === 0
                    ? "FREE"
                    : `$${shipping.toFixed(2)}`}
                </strong>
              </div>

              <div className="checkout-summary-divider" />

              <div className="checkout-grand-total">
                <span>
                  Total
                </span>

                <strong>
                  ${cartTotal.toFixed(2)}
                </strong>
              </div>

              <div className="checkout-secure-note">
                <LockKeyhole size={14} />

                <span>
                  Secure frontend checkout
                </span>
              </div>

            </div>

          </aside>

        </form>

      </section>

    </div>
  );
}

export default Checkout;