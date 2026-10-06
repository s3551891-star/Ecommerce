import { useEffect, useMemo, useState } from "react";
import {
  ArrowDownUp,
  ChevronDown,
  Filter,
  Search,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useSearchParams } from "react-router-dom";

import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Products() {
  const [searchParams, setSearchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "all";

  const [searchTerm, setSearchTerm] = useState(urlSearch);
  const [category, setCategory] = useState(urlCategory);
  const [sortBy, setSortBy] = useState("featured");
  const [maxPrice, setMaxPrice] = useState(1000);
  const [filtersOpen, setFiltersOpen] = useState(false);

  useEffect(() => {
    setSearchTerm(urlSearch);
  }, [urlSearch]);

  useEffect(() => {
    setCategory(urlCategory);
  }, [urlCategory]);

  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(
        products.map((product) => product.category)
      ),
    ];

    return uniqueCategories;
  }, []);

  const highestPrice = useMemo(() => {
    if (!products.length) return 1000;

    return Math.ceil(
      Math.max(
        ...products.map((product) =>
          Number(product.price)
        )
      ) / 50
    ) * 50;
  }, []);

  useEffect(() => {
    setMaxPrice(highestPrice);
  }, [highestPrice]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    const query = searchTerm.trim().toLowerCase();

    if (query) {
      result = result.filter((product) => {
        return (
          product.name?.toLowerCase().includes(query) ||
          product.category?.toLowerCase().includes(query) ||
          product.description
            ?.toLowerCase()
            .includes(query)
        );
      });
    }

    if (category !== "all") {
      result = result.filter(
        (product) =>
          product.category?.toLowerCase() ===
          category.toLowerCase()
      );
    }

    result = result.filter(
      (product) =>
        Number(product.price) <= Number(maxPrice)
    );

    switch (sortBy) {
      case "price-low":
        result.sort(
          (a, b) =>
            Number(a.price) - Number(b.price)
        );
        break;

      case "price-high":
        result.sort(
          (a, b) =>
            Number(b.price) - Number(a.price)
        );
        break;

      case "rating":
        result.sort(
          (a, b) =>
            Number(b.rating || 0) -
            Number(a.rating || 0)
        );
        break;

      case "name":
        result.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
        break;

      default:
        break;
    }

    return result;
  }, [
    searchTerm,
    category,
    maxPrice,
    sortBy,
  ]);

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams);

    if (searchTerm.trim()) {
      params.set(
        "search",
        searchTerm.trim()
      );
    } else {
      params.delete("search");
    }

    if (category === "all") {
      params.delete("category");
    } else {
      params.set("category", category);
    }

    setSearchParams(params);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);

    const params = new URLSearchParams(searchParams);

    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }

    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setCategory("all");
    setMaxPrice(highestPrice);
    setSortBy("featured");

    setSearchParams({});
  };

  const hasActiveFilters =
    Boolean(searchTerm) ||
    category !== "all" ||
    maxPrice < highestPrice;

  return (
    <div className="products-page">

      {/* Page Header */}
      <section className="products-hero">
        <div className="section-container">

          <span className="section-label">
            SHOP COLLECTION
          </span>

          <h1>
            Discover products
            <span> you'll love.</span>
          </h1>

          <p>
            Browse our collection and find products
            that fit your style, needs and budget.
          </p>

        </div>
      </section>

      {/* Products Area */}
      <section className="products-content section-container">

        {/* Mobile Filter Button */}
        <button
          type="button"
          className="mobile-filter-button"
          onClick={() =>
            setFiltersOpen((current) => !current)
          }
        >
          <SlidersHorizontal size={18} />
          Filters
          {hasActiveFilters && (
            <span className="filter-active-dot" />
          )}
        </button>

        <div className="products-layout">

          {/* Sidebar */}
          <aside
            className={
              filtersOpen
                ? "products-sidebar mobile-open"
                : "products-sidebar"
            }
          >

            <div className="sidebar-heading">
              <div>
                <strong>Filters</strong>
                <span>
                  Refine your results
                </span>
              </div>

              <button
                type="button"
                onClick={clearFilters}
                disabled={!hasActiveFilters}
              >
                Clear
              </button>

              <button
                type="button"
                className="sidebar-close"
                onClick={() =>
                  setFiltersOpen(false)
                }
              >
                <X size={19} />
              </button>
            </div>

            {/* Search */}
            <div className="filter-group">

              <label>Search</label>

              <form
                className="products-search"
                onSubmit={handleSearch}
              >
                <Search size={17} />

                <input
                  type="search"
                  value={searchTerm}
                  onChange={(e) =>
                    setSearchTerm(e.target.value)
                  }
                  placeholder="Search products..."
                />
              </form>

            </div>

            {/* Categories */}
            <div className="filter-group">

              <label>Category</label>

              <div className="category-filter-list">

                <button
                  type="button"
                  className={
                    category === "all"
                      ? "category-filter active"
                      : "category-filter"
                  }
                  onClick={() =>
                    handleCategoryChange("all")
                  }
                >
                  <span>All Products</span>
                  <span>
                    {products.length}
                  </span>
                </button>

                {categories.map((item) => {

                  const count =
                    products.filter(
                      (product) =>
                        product.category === item
                    ).length;

                  return (
                    <button
                      type="button"
                      key={item}
                      className={
                        category === item
                          ? "category-filter active"
                          : "category-filter"
                      }
                      onClick={() =>
                        handleCategoryChange(item)
                      }
                    >
                      <span>{item}</span>
                      <span>{count}</span>
                    </button>
                  );
                })}

              </div>
            </div>

            {/* Price */}
            <div className="filter-group">

              <div className="filter-label-row">
                <label>Maximum Price</label>

                <strong>
                  ${maxPrice}
                </strong>
              </div>

              <input
                type="range"
                min="0"
                max={highestPrice}
                step="10"
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    Number(e.target.value)
                  )
                }
                className="price-range"
              />

              <div className="price-range-labels">
                <span>$0</span>
                <span>${highestPrice}</span>
              </div>

            </div>

            <button
              type="button"
              className="mobile-apply-filter"
              onClick={() =>
                setFiltersOpen(false)
              }
            >
              Apply Filters
            </button>

          </aside>

          {/* Products */}
          <div className="products-main">

            <div className="products-toolbar">

              <div>
                <strong>
                  {filteredProducts.length}
                </strong>

                <span>
                  {" "}
                  {filteredProducts.length === 1
                    ? "product"
                    : "products"}{" "}
                  found
                </span>
              </div>

              <div className="sort-wrapper">
                <ArrowDownUp size={16} />

                <select
                  value={sortBy}
                  onChange={(e) =>
                    setSortBy(e.target.value)
                  }
                >
                  <option value="featured">
                    Featured
                  </option>

                  <option value="price-low">
                    Price: Low to High
                  </option>

                  <option value="price-high">
                    Price: High to Low
                  </option>

                  <option value="rating">
                    Highest Rated
                  </option>

                  <option value="name">
                    Name: A-Z
                  </option>
                </select>

                <ChevronDown
                  size={15}
                  className="sort-chevron"
                />
              </div>

            </div>

            {filteredProducts.length > 0 ? (
              <div className="products-grid">

                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

              </div>
            ) : (
              <div className="products-empty">

                <div className="products-empty-icon">
                  <Search size={27} />
                </div>

                <h2>
                  No products found
                </h2>

                <p>
                  Try changing your search or
                  removing some filters.
                </p>

                <button
                  type="button"
                  onClick={clearFilters}
                >
                  Clear Filters
                </button>

              </div>
            )}

          </div>
        </div>

      </section>
    </div>
  );
}

export default Products;