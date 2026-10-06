import {
  Heart,
  ShoppingCart,
  Star,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function ProductCard({ product }) {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useShop();

  const wished = isInWishlist(product.id);

  const handleAddToCart = () => {
    addToCart(product, 1);
  };

  return (
    <article className="product-card">

      {/* Image */}
      <div className="product-card-image-wrapper">

        <Link
          to={`/products/${product.id}`}
          className="product-card-image-link"
        >
          <img
            src={product.image}
            alt={product.name}
            className="product-card-image"
          />
        </Link>

        {product.badge && (
          <span className="product-card-badge">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          className={
            wished
              ? "product-wishlist active"
              : "product-wishlist"
          }
          onClick={() =>
            toggleWishlist(product)
          }
          aria-label={
            wished
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
        >
          <Heart
            size={18}
            fill={
              wished
                ? "currentColor"
                : "none"
            }
          />
        </button>

      </div>

      {/* Content */}
      <div className="product-card-content">

        <span className="product-card-category">
          {product.category}
        </span>

        <Link
          to={`/products/${product.id}`}
          className="product-card-title"
        >
          {product.name}
        </Link>

        <div className="product-card-rating">

          <div className="stars">
            <Star
              size={14}
              fill="currentColor"
            />

            <span>
              {product.rating || "4.5"}
            </span>
          </div>

          <span className="rating-count">
            ({product.reviews || 0})
          </span>

        </div>

        <div className="product-card-bottom">

          <strong className="product-card-price">
            ${Number(product.price).toFixed(2)}
          </strong>

          <button
            type="button"
            className="product-cart-button"
            onClick={handleAddToCart}
            disabled={
              Number(product.stock) <= 0
            }
            aria-label="Add to cart"
          >
            <ShoppingCart size={17} />

            <span>
              {Number(product.stock) <= 0
                ? "Out of Stock"
                : "Add"}
            </span>
          </button>

        </div>

      </div>
    </article>
  );
}

export default ProductCard;