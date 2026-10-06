import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  ChevronRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
} from "lucide-react";
import {
  Link,
  useNavigate,
  useParams,
} from "react-router-dom";

import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
  } = useShop();

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="product-not-found">
        <h1>Product Not Found</h1>

        <p>
          The product you're looking for doesn't exist.
        </p>

        <Link
          to="/products"
          className="primary-button"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  const wished = isInWishlist(product.id);

  const stock = Number(product.stock || 0);

  const relatedProducts = useMemo(() => {
    return products
      .filter(
        (item) =>
          item.id !== product.id &&
          item.category === product.category
      )
      .slice(0, 4);
  }, [product]);

  const decreaseQuantity = () => {
    setQuantity((current) =>
      Math.max(1, current - 1)
    );
  };

  const increaseQuantity = () => {
    setQuantity((current) =>
      Math.min(stock || 1, current + 1)
    );
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate("/cart");
  };

  return (
    <div className="product-details-page">

      {/* Breadcrumb */}
      <div className="product-breadcrumb section-container">

        <Link to="/products">
          Products
        </Link>

        <ChevronRight size={15} />

        <span>{product.category}</span>

        <ChevronRight size={15} />

        <span>{product.name}</span>

      </div>

      {/* Product */}
      <section className="product-details section-container">

        {/* Image */}
        <div className="product-details-gallery">

          <div className="product-details-image-card">

            {product.badge && (
              <span className="product-details-badge">
                {product.badge}
              </span>
            )}

            <img
              src={product.image}
              alt={product.name}
            />

          </div>

        </div>

        {/* Information */}
        <div className="product-details-info">

          <Link
            to={`/products?category=${encodeURIComponent(
              product.category
            )}`}
            className="product-details-category"
          >
            {product.category}
          </Link>

          <h1>{product.name}</h1>

          <div className="product-details-rating">

            <div className="stars">
              {[1, 2, 3, 4, 5].map(
                (star) => (
                  <Star
                    key={star}
                    size={17}
                    fill={
                      star <=
                      Math.round(
                        Number(
                          product.rating || 4.5
                        )
                      )
                        ? "currentColor"
                        : "none"
                    }
                  />
                )
              )}
            </div>

            <strong>
              {product.rating || "4.5"}
            </strong>

            <span>
              {product.reviews || 0} reviews
            </span>

          </div>

          <div className="product-details-price">
            $
            {Number(product.price).toFixed(2)}
          </div>

          <p className="product-details-description">
            {product.description ||
              "A quality product designed to provide a great shopping experience."}
          </p>

          {/* Stock */}
          <div
            className={
              stock > 0
                ? "product-stock in-stock"
                : "product-stock out-stock"
            }
          >
            <span className="stock-dot" />

            {stock > 0
              ? `${stock} items available`
              : "Out of stock"}
          </div>

          {/* Quantity */}
          {stock > 0 && (
            <div className="product-quantity-row">

              <span>Quantity</span>

              <div className="quantity-control">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                  disabled={quantity <= 1}
                >
                  <Minus size={16} />
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={increaseQuantity}
                  disabled={
                    quantity >= stock
                  }
                >
                  <Plus size={16} />
                </button>

              </div>

            </div>
          )}

          {/* Actions */}
          <div className="product-details-actions">

            <button
              type="button"
              className={
                wished
                  ? "product-details-wishlist active"
                  : "product-details-wishlist"
              }
              onClick={() =>
                toggleWishlist(product)
              }
              aria-label="Wishlist"
            >
              <Heart
                size={20}
                fill={
                  wished
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

            <button
              type="button"
              className="product-details-cart"
              onClick={handleAddToCart}
              disabled={stock <= 0}
            >
              <ShoppingCart size={19} />
              Add to Cart
            </button>

            <button
              type="button"
              className="product-details-buy"
              onClick={handleBuyNow}
              disabled={stock <= 0}
            >
              Buy Now
            </button>

          </div>

          {/* Benefits */}
          <div className="product-benefits">

            <div className="product-benefit">

              <div>
                <Truck size={19} />
              </div>

              <span>
                <strong>Fast Delivery</strong>
                Reliable delivery to your door.
              </span>

            </div>

            <div className="product-benefit">

              <div>
                <ShieldCheck size={19} />
              </div>

              <span>
                <strong>Secure Shopping</strong>
                Safe and convenient checkout.
              </span>

            </div>

            <div className="product-benefit">

              <div>
                <Check size={19} />
              </div>

              <span>
                <strong>Quality Assured</strong>
                Products selected for shoppers.
              </span>

            </div>

          </div>

        </div>
      </section>

      {/* Related */}
      {relatedProducts.length > 0 && (
        <section className="related-products section-container">

          <div className="related-products-heading">

            <div>
              <span className="section-label">
                YOU MAY ALSO LIKE
              </span>

              <h2>
                Related products
              </h2>
            </div>

            <Link to="/products">
              View All
              <ArrowLeft
                size={17}
                className="view-all-arrow"
              />
            </Link>

          </div>

          <div className="products-grid">
            {relatedProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
              />
            ))}
          </div>

        </section>
      )}

    </div>
  );
}

export default ProductDetails;