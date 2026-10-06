import {
  ArrowRight,
  CheckCircle,
  Heart,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

function About() {
  const values = [
    {
      icon: Sparkles,
      title: "Simple Shopping",
      text: "We keep the shopping experience clean, clear and easy to navigate.",
    },
    {
      icon: ShieldCheck,
      title: "Trusted Experience",
      text: "Clear product information and a straightforward checkout experience.",
    },
    {
      icon: Truck,
      title: "Reliable Delivery",
      text: "Choose a delivery option that fits your shopping needs.",
    },
    {
      icon: Heart,
      title: "Customer First",
      text: "Every part of ShopSphere is designed around a better customer journey.",
    },
  ];

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container about-hero-grid">
          <div className="about-hero-content">
            <span className="section-label">
              ABOUT SHOPSPHERE
            </span>

            <h1>
              Shopping made
              <span> simple.</span>
            </h1>

            <p>
              ShopSphere is a modern e-commerce experience
              designed to make discovering products,
              managing your cart and completing purchases
              simple and enjoyable.
            </p>

            <div className="about-hero-actions">
              <Link
                to="/products"
                className="primary-button"
              >
                Explore Products
                <ArrowRight size={17} />
              </Link>

              <Link
                to="/contact"
                className="secondary-button"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="about-hero-card">
            <div className="about-hero-icon">
              <ShoppingBag size={38} />
            </div>

            <span>SHOPSPHERE</span>

            <strong>
              THINK.
              <br />
              SHOP.
              <br />
              ENJOY.
            </strong>

            <div className="about-hero-card-line" />
          </div>
        </div>
      </section>

      <section className="about-story">
        <div className="container about-story-grid">
          <div>
            <span className="section-label">
              OUR STORY
            </span>

            <h2>
              Built around a better shopping journey.
            </h2>
          </div>

          <div className="about-story-text">
            <p>
              ShopSphere brings products, discovery,
              wishlist management, cart management and
              checkout into one smooth experience.
            </p>

            <p>
              Our goal is simple: reduce unnecessary
              complexity and help customers move from
              discovering a product to placing an order
              with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-label">
              WHAT WE VALUE
            </span>

            <h2>Designed with purpose.</h2>

            <p>
              Every feature has a role in creating a
              cleaner and more useful shopping experience.
            </p>
          </div>

          <div className="about-values-grid">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  className="about-value-card"
                  key={value.title}
                >
                  <div className="about-value-icon">
                    <Icon size={22} />
                  </div>

                  <h3>{value.title}</h3>

                  <p>{value.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="about-features">
        <div className="container about-features-card">
          <div>
            <span className="section-label">
              YOUR SHOPPING EXPERIENCE
            </span>

            <h2>
              Everything you need in one place.
            </h2>

            <p>
              Browse products, save favorites, manage
              your cart, complete checkout and track your
              orders from your account.
            </p>
          </div>

          <div className="about-check-list">
            <div>
              <CheckCircle size={18} />
              <span>Easy product discovery</span>
            </div>

            <div>
              <CheckCircle size={18} />
              <span>Wishlist and cart management</span>
            </div>

            <div>
              <CheckCircle size={18} />
              <span>Simple checkout experience</span>
            </div>

            <div>
              <CheckCircle size={18} />
              <span>Order history and profile</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="container">
          <div className="about-cta-inner">
            <div>
              <span className="section-label">
                READY TO SHOP?
              </span>

              <h2>
                Find something you'll love.
              </h2>
            </div>

            <Link
              to="/products"
              className="primary-button"
            >
              Start Shopping
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;