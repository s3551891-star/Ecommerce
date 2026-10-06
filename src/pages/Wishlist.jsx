import {
  ArrowRight,
  Heart,
  ShoppingCart,
  Trash2,
} from "lucide-react";

import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

function Wishlist() {
  const {
    wishlist,
    wishlistCount,
    addToCart,
    removeFromWishlist,
  } = useShop();

  const handleAddToCart = (product) => {
    addToCart(product, 1);

    alert(`${product.name} added to your cart!`);
  };

  const handleRemove = (product) => {
    removeFromWishlist(product.id);
  };

  // Empty Wishlist
  if (wishlist.length === 0) {
    return (
      <div className="wishlist-page">

        <section className="wishlist-empty-section">
          <div className="wishlist-empty-container">

            <div className="wishlist-empty-icon">
              <Heart size={42} />
            </div>

            <span className="section-label">
              YOUR WISHLIST
            </span>

            <h1>Your Wishlist Is Empty</h1>

            <p>
              Save your favorite products here and
              come back whenever you're ready to shop.
            </p>

            <Link
              to="/products"
              className="primary-button"
            >
              Explore Products
              <ArrowRight size={19} />
            </Link>

          </div>
        </section>

      </div>
    );
  }

  return (
    <div className="wishlist-page">

      {/* Page Header */}
      <section className="wishlist-header-section">
        <div className="wishlist-header-container">

          <span className="section-label">
            YOUR FAVORITES
          </span>

          <h1>My Wishlist</h1>

          <p>
            Keep track of the products you love.
          </p>

        </div>
      </section>

      {/* Wishlist Content */}
      <section className="wishlist-content-section">

        <div className="wishlist-container">

          {/* Wishlist Header */}
          <div className="wishlist-topbar">

            <div>
              <h2>
                Saved Products
              </h2>

              <span>
                {wishlistCount}{" "}
                {wishlistCount === 1
                  ? "product"
                  : "products"}{" "}
                saved
              </span>
            </div>

            <Link
              to="/products"
              className="wishlist-shop-link"
            >
              Continue Shopping
              <ArrowRight size={17} />
            </Link>

          </div>

          {/* Products */}
          <div className="wishlist-grid">

            {wishlist.map((product) => (
              <div
                className="wishlist-item"
                key={product.id}
              >

                <ProductCard
                  product={product}
                />

                {/* Wishlist Actions */}
                <div className="wishlist-item-actions">

                  <button
                    type="button"
                    className="wishlist-cart-button"
                    onClick={() =>
                      handleAddToCart(product)
                    }
                  >
                    <ShoppingCart size={17} />
                    Add to Cart
                  </button>

                  <button
                    type="button"
                    className="wishlist-remove-button"
                    onClick={() =>
                      handleRemove(product)
                    }
                    title="Remove from Wishlist"
                    aria-label={`Remove ${product.name} from wishlist`}
                  >
                    <Trash2 size={17} />
                  </button>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </div>
  );
}

export default Wishlist;