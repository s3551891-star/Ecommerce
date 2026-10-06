import {
  ArrowRight,
  CheckCircle,
  Headphones,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";

import { Link } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import CategoryCard from "../components/CategoryCard";
import products, { categories } from "../data/products";

function Home() {
  const featuredProducts = products.slice(0, 8);

  const newArrivals = products
    .filter((product) => product.badge === "New")
    .concat(products.slice(8, 12))
    .slice(0, 4);

  const bestSellers = products
    .filter(
      (product) =>
        product.badge === "Best Seller" ||
        product.badge === "Top Rated"
    )
    .slice(0, 4);

  return (
    <div className="home-page">

      {/* =========================
          HERO SECTION
      ========================= */}
      <section className="hero-section">
        <div className="hero-container">

          <div className="hero-content">
            <span className="hero-eyebrow">
              <Sparkles size={16} />
              NEW COLLECTION 2026
            </span>

            <h1>
              Everything You Need.
              <span> All in One Place.</span>
            </h1>

            <p>
              Discover premium products, modern styles and everyday
              essentials at prices you'll love.
            </p>

            <div className="hero-actions">
              <Link to="/products" className="primary-button">
                Shop Now
                <ArrowRight size={19} />
              </Link>

              <Link to="/products?category=electronics" className="secondary-button">
                Explore Collection
              </Link>
            </div>

            <div className="hero-trust">
              <div>
                <CheckCircle size={18} />
                <span>Quality Products</span>
              </div>

              <div>
                <CheckCircle size={18} />
                <span>Secure Checkout</span>
              </div>

              <div>
                <CheckCircle size={18} />
                <span>Fast Delivery</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1607082349566-187342175e2f?auto=format&fit=crop&w=1200&q=85"
                alt="ShopSphere shopping collection"
              />
            </div>

            <div className="hero-floating-card hero-floating-card-one">
              <ShoppingBag size={22} />
              <div>
                <strong>20+</strong>
                <span>Products</span>
              </div>
            </div>

            <div className="hero-floating-card hero-floating-card-two">
              <span className="hero-rating">★</span>
              <div>
                <strong>4.8/5</strong>
                <span>Customer Rating</span>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* =========================
          CATEGORIES
      ========================= */}
      <section className="home-section categories-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-label">SHOP BY CATEGORY</span>
              <h2>Find What You Love</h2>
              <p>
                Explore our carefully selected collections made for
                every part of your lifestyle.
              </p>
            </div>

            <Link to="/products" className="section-link">
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
              />
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          FEATURED PRODUCTS
      ========================= */}
      <section className="home-section featured-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-label">FEATURED PRODUCTS</span>
              <h2>Popular Right Now</h2>
              <p>
                Customer favorites selected from our most popular
                products.
              </p>
            </div>

            <Link to="/products" className="section-link">
              View All Products
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="products-grid">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          PROMO BANNER
      ========================= */}
      <section className="promo-section">
        <div className="promo-container">

          <div className="promo-content">
            <span className="promo-label">
              LIMITED TIME OFFER
            </span>

            <h2>
              Upgrade Your Everyday.
              <br />
              Save More.
            </h2>

            <p>
              Get amazing deals across selected products.
              Don't miss our latest offers.
            </p>

            <Link to="/products" className="promo-button">
              Shop Deals
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="promo-image">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=85"
              alt="Shop special deals"
            />
          </div>

        </div>
      </section>


      {/* =========================
          NEW ARRIVALS
      ========================= */}
      <section className="home-section arrivals-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-label">JUST ARRIVED</span>
              <h2>New Arrivals</h2>
              <p>
                Fresh products and latest additions to our store.
              </p>
            </div>

            <Link to="/products" className="section-link">
              Explore More
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="products-grid">
            {newArrivals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          BEST SELLERS
      ========================= */}
      <section className="home-section best-sellers-section">
        <div className="section-container">

          <div className="section-heading">
            <div>
              <span className="section-label">CUSTOMER FAVORITES</span>
              <h2>Best Sellers</h2>
              <p>
                The products our customers are loving the most.
              </p>
            </div>

            <Link to="/products" className="section-link">
              Shop All
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="products-grid">
            {bestSellers.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
              />
            ))}
          </div>

        </div>
      </section>


      {/* =========================
          BENEFITS
      ========================= */}
      <section className="benefits-section">
        <div className="section-container">

          <div className="benefits-grid">

            <div className="benefit-card">
              <div className="benefit-icon">
                <Truck size={26} />
              </div>

              <div>
                <h3>Fast Delivery</h3>
                <p>
                  Quick and reliable delivery to your doorstep.
                </p>
              </div>
            </div>


            <div className="benefit-card">
              <div className="benefit-icon">
                <ShieldCheck size={26} />
              </div>

              <div>
                <h3>Secure Shopping</h3>
                <p>
                  Your shopping experience is safe and protected.
                </p>
              </div>
            </div>


            <div className="benefit-card">
              <div className="benefit-icon">
                <Headphones size={26} />
              </div>

              <div>
                <h3>Customer Support</h3>
                <p>
                  We're here whenever you need assistance.
                </p>
              </div>
            </div>


            <div className="benefit-card">
              <div className="benefit-icon">
                <CheckCircle size={26} />
              </div>

              <div>
                <h3>Quality Guarantee</h3>
                <p>
                  Carefully selected products you can trust.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================
          FINAL CTA
      ========================= */}
      <section className="home-cta-section">
        <div className="home-cta-container">

          <div>
            <span className="section-label">
              START SHOPPING
            </span>

            <h2>Ready to Find Your Next Favorite?</h2>

            <p>
              Browse our complete collection and discover
              something made for you.
            </p>
          </div>

          <Link to="/products" className="primary-button">
            Explore Products
            <ArrowRight size={19} />
          </Link>

        </div>
      </section>

    </div>
  );
}

export default Home;