import { useEffect, useRef, useState } from "react";
import {
  ChevronDown,
  Heart,
  LogIn,
  LogOut,
  Menu,
  Package,
  Search,
  ShoppingCart,
  User,
  UserCircle,
  X,
} from "lucide-react";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    cartCount,
    wishlistCount,
    user,
    logoutUser,
  } = useShop();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);

  const profileRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setProfileMenuOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleOutsideClick
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleOutsideClick
      );
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();

    const value = searchTerm.trim();

    if (!value) {
      navigate("/products");
      return;
    }

    navigate(
      `/products?search=${encodeURIComponent(value)}`
    );

    setSearchOpen(false);
    setSearchTerm("");
  };

  const handleLogout = () => {
    logoutUser();
    setProfileMenuOpen(false);
    setMobileMenuOpen(false);
    navigate("/");
  };

  const getInitials = () => {
    if (!user) {
      return "U";
    }

    const first =
      user.firstName?.charAt(0)?.toUpperCase() || "";

    const last =
      user.lastName?.charAt(0)?.toUpperCase() || "";

    return `${first}${last}` || "U";
  };

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        {/* Logo */}
        <Link
          to="/"
          className="navbar-logo"
          aria-label="ShopSphere Home"
        >
          <span className="navbar-logo-mark">S</span>

          <span className="navbar-logo-text">
            ShopSphere
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "active"
                : ""
            }
          >
            Home
          </Link>

          <Link
            to="/products"
            className={
              location.pathname.startsWith("/products")
                ? "active"
                : ""
            }
          >
            Products
          </Link>

          <Link
            to="/products?category=All"
            className={
              location.search.includes("category")
                ? "active"
                : ""
            }
          >
            Categories
          </Link>

          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "active"
                : ""
            }
          >
            About
          </Link>

          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "active"
                : ""
            }
          >
            Contact
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="navbar-actions">
          {/* Search */}
          {searchOpen ? (
            <form
              className="navbar-search-form"
              onSubmit={handleSearch}
            >
              <Search size={17} />

              <input
                type="text"
                autoFocus
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search products..."
              />

              <button
                type="button"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchTerm("");
                }}
                aria-label="Close search"
              >
                <X size={16} />
              </button>
            </form>
          ) : (
            <button
              type="button"
              className="navbar-icon-button"
              onClick={() => setSearchOpen(true)}
              aria-label="Search"
            >
              <Search size={19} />
            </button>
          )}

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="navbar-icon-button navbar-badge-button"
            aria-label="Wishlist"
          >
            <Heart size={19} />

            {wishlistCount > 0 && (
              <span className="navbar-badge">
                {wishlistCount > 99
                  ? "99+"
                  : wishlistCount}
              </span>
            )}
          </Link>

          {/* Cart */}
          <Link
            to="/cart"
            className="navbar-icon-button navbar-badge-button"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={19} />

            {cartCount > 0 && (
              <span className="navbar-badge">
                {cartCount > 99
                  ? "99+"
                  : cartCount}
              </span>
            )}
          </Link>

          {/* User */}
          {user ? (
            <div
              className="navbar-profile"
              ref={profileRef}
            >
              <button
                type="button"
                className="navbar-user-button"
                onClick={() =>
                  setProfileMenuOpen(
                    (current) => !current
                  )
                }
              >
                <span className="navbar-avatar">
                  {getInitials()}
                </span>

                <span className="navbar-user-name">
                  {user.firstName}
                </span>

                <ChevronDown
                  size={15}
                  className={
                    profileMenuOpen
                      ? "rotate-icon"
                      : ""
                  }
                />
              </button>

              {profileMenuOpen && (
                <div className="navbar-profile-dropdown">
                  <div className="navbar-profile-heading">
                    <span className="navbar-avatar large">
                      {getInitials()}
                    </span>

                    <div>
                      <strong>
                        {user.firstName}{" "}
                        {user.lastName}
                      </strong>

                      <span>{user.email}</span>
                    </div>
                  </div>

                  <div className="navbar-dropdown-divider" />

                  <Link
                    to="/profile"
                    onClick={() =>
                      setProfileMenuOpen(false)
                    }
                  >
                    <UserCircle size={17} />
                    Profile
                  </Link>

                  <Link
                    to="/orders"
                    onClick={() =>
                      setProfileMenuOpen(false)
                    }
                  >
                    <Package size={17} />
                    My Orders
                  </Link>

                  <Link
                    to="/wishlist"
                    onClick={() =>
                      setProfileMenuOpen(false)
                    }
                  >
                    <Heart size={17} />
                    Wishlist
                  </Link>

                  <div className="navbar-dropdown-divider" />

                  <button
                    type="button"
                    className="navbar-logout-button"
                    onClick={handleLogout}
                  >
                    <LogOut size={17} />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="navbar-login-button"
            >
              <LogIn size={16} />
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="navbar-mobile-toggle"
          onClick={() =>
            setMobileMenuOpen(
              (current) => !current
            )
          }
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X size={23} />
          ) : (
            <Menu size={23} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="navbar-mobile-menu">
          <div className="container">
            <form
              className="navbar-mobile-search"
              onSubmit={handleSearch}
            >
              <Search size={17} />

              <input
                type="text"
                value={searchTerm}
                onChange={(e) =>
                  setSearchTerm(e.target.value)
                }
                placeholder="Search products..."
              />

              <button type="submit">
                Search
              </button>
            </form>

            <nav className="navbar-mobile-nav">
              <Link to="/">
                Home
              </Link>

              <Link to="/products">
                Products
              </Link>

              <Link to="/products?category=All">
                Categories
              </Link>

              <Link to="/wishlist">
                <span>
                  <Heart size={17} />
                  Wishlist
                </span>

                {wishlistCount > 0 && (
                  <small>{wishlistCount}</small>
                )}
              </Link>

              <Link to="/cart">
                <span>
                  <ShoppingCart size={17} />
                  Cart
                </span>

                {cartCount > 0 && (
                  <small>{cartCount}</small>
                )}
              </Link>

              {user ? (
                <>
                  <Link to="/profile">
                    <span>
                      <User size={17} />
                      Profile
                    </span>
                  </Link>

                  <Link to="/orders">
                    <span>
                      <Package size={17} />
                      My Orders
                    </span>
                  </Link>

                  <button
                    type="button"
                    onClick={handleLogout}
                    className="navbar-mobile-logout"
                  >
                    <span>
                      <LogOut size={17} />
                      Logout
                    </span>
                  </button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <span>
                      <LogIn size={17} />
                      Login
                    </span>
                  </Link>

                  <Link to="/register">
                    <span>
                      <UserPlusIcon />
                      Create Account
                    </span>
                  </Link>
                </>
              )}

              <Link to="/about">
                About
              </Link>

              <Link to="/contact">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function UserPlusIcon() {
  return <User size={17} />;
}

export default Navbar;