import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CategoryCard({ category }) {
  if (!category) {
    return null;
  }

  const {
    name,
    image,
    description,
    productCount,
    slug,
    icon,
  } = category;

  const categorySlug =
    slug || name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link
      to={`/products?category=${encodeURIComponent(categorySlug)}`}
      className="category-card"
      aria-label={`Shop ${name}`}
    >
      {/* Category Image */}
      <div className="category-image-wrapper">
        <img
          src={image}
          alt={name}
          className="category-image"
          loading="lazy"
        />

        <div className="category-overlay" />
      </div>

      {/* Category Content */}
      <div className="category-content">
        <div className="category-title-row">
          <div>
            {icon && <span className="category-icon">{icon}</span>}

            <h3>{name}</h3>

            {description && (
              <p>{description}</p>
            )}

            {productCount !== undefined && (
              <span className="category-count">
                {productCount} Products
              </span>
            )}
          </div>

          <span className="category-arrow">
            <ArrowRight size={20} />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default CategoryCard;