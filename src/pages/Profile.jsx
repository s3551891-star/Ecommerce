import { useState } from "react";
import {
  CheckCircle,
  Edit3,
  Heart,
  LogOut,
  Mail,
  MapPin,
  Package,
  Save,
  ShieldCheck,
  User,
  X,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useShop } from "../context/ShopContext";

function Profile() {
  const navigate = useNavigate();

  const {
    user,
    orders,
    wishlistCount,
    updateUser,
    logoutUser,
  } = useShop();

  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
    address: user?.address || "",
    city: user?.city || "",
    country: user?.country || "Pakistan",
  });

  if (!user) {
    return (
      <div className="profile-page">
        <section className="profile-login-section">
          <div className="container">
            <div className="profile-login-card">
              <div className="profile-login-icon">
                <User size={28} />
              </div>

              <span className="section-label">
                MY ACCOUNT
              </span>

              <h1>Sign in to view your profile</h1>

              <p>
                Please sign in to manage your personal
                information, orders and wishlist.
              </p>

              <div className="profile-login-actions">
                <Link
                  to="/login"
                  className="primary-button"
                >
                  Sign In
                </Link>

                <Link
                  to="/register"
                  className="secondary-button"
                >
                  Create Account
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleEdit = () => {
    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
      city: user.city || "",
      country: user.country || "Pakistan",
    });

    setIsEditing(true);
  };

  const handleCancel = () => {
    setFormData({
      firstName: user.firstName || "",
      lastName: user.lastName || "",
      email: user.email || "",
      phone: user.phone || "",
      address: user.address || "",
      city: user.city || "",
      country: user.country || "Pakistan",
    });

    setIsEditing(false);
  };

  const handleSave = (e) => {
    e.preventDefault();

    updateUser({
      firstName: formData.firstName.trim(),
      lastName: formData.lastName.trim(),
      email: formData.email.trim().toLowerCase(),
      phone: formData.phone.trim(),
      address: formData.address.trim(),
      city: formData.city.trim(),
      country: formData.country.trim(),
    });

    setIsEditing(false);
  };

  const handleLogout = () => {
    logoutUser();
    navigate("/");
  };

  const getInitials = () => {
    const first =
      user.firstName?.charAt(0)?.toUpperCase() || "";

    const last =
      user.lastName?.charAt(0)?.toUpperCase() || "";

    return `${first}${last}` || "U";
  };

  return (
    <div className="profile-page">
      <section className="profile-hero">
        <div className="container">
          <span className="section-label">
            MY ACCOUNT
          </span>

          <h1>
            Welcome back,
            <span> {user.firstName}.</span>
          </h1>

          <p>
            Manage your personal information, orders and
            shopping preferences from one place.
          </p>
        </div>
      </section>

      <section className="profile-content">
        <div className="container">
          <div className="profile-layout">
            <aside className="profile-sidebar">
              <div className="profile-user-card">
                <div className="profile-avatar">
                  {getInitials()}
                </div>

                <h2>
                  {user.firstName} {user.lastName}
                </h2>

                <p>{user.email}</p>

                <span className="profile-member">
                  <CheckCircle size={14} />
                  ShopSphere Member
                </span>
              </div>

              <div className="profile-sidebar-links">
                <Link
                  to="/profile"
                  className="active"
                >
                  <User size={17} />
                  Profile
                </Link>

                <Link to="/orders">
                  <Package size={17} />
                  My Orders
                </Link>

                <Link to="/wishlist">
                  <Heart size={17} />
                  Wishlist
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                >
                  <LogOut size={17} />
                  Logout
                </button>
              </div>
            </aside>

            <main className="profile-main">
              <div className="profile-stats">
                <Link
                  to="/orders"
                  className="profile-stat-card"
                >
                  <div className="profile-stat-icon">
                    <Package size={19} />
                  </div>

                  <div>
                    <strong>{orders.length}</strong>
                    <span>Total Orders</span>
                  </div>
                </Link>

                <Link
                  to="/wishlist"
                  className="profile-stat-card"
                >
                  <div className="profile-stat-icon">
                    <Heart size={19} />
                  </div>

                  <div>
                    <strong>{wishlistCount}</strong>
                    <span>Wishlist Items</span>
                  </div>
                </Link>

                <div className="profile-stat-card">
                  <div className="profile-stat-icon">
                    <ShieldCheck size={19} />
                  </div>

                  <div>
                    <strong>Active</strong>
                    <span>Account Status</span>
                  </div>
                </div>
              </div>

              <div className="profile-details-card">
                <div className="profile-section-heading">
                  <div>
                    <span className="section-label">
                      PERSONAL INFORMATION
                    </span>

                    <h2>Your Details</h2>
                  </div>

                  {!isEditing && (
                    <button
                      type="button"
                      className="profile-edit-button"
                      onClick={handleEdit}
                    >
                      <Edit3 size={15} />
                      Edit Profile
                    </button>
                  )}
                </div>

                {isEditing ? (
                  <form
                    className="profile-form"
                    onSubmit={handleSave}
                  >
                    <div className="profile-form-grid">
                      <div className="profile-field">
                        <label htmlFor="firstName">
                          First Name
                        </label>

                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>

                      <div className="profile-field">
                        <label htmlFor="lastName">
                          Last Name
                        </label>

                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="profile-field">
                      <label htmlFor="email">
                        Email Address
                      </label>

                      <div className="profile-input-icon">
                        <Mail size={16} />

                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="profile-form-grid">
                      <div className="profile-field">
                        <label htmlFor="phone">
                          Phone Number
                        </label>

                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 1234567"
                        />
                      </div>

                      <div className="profile-field">
                        <label htmlFor="country">
                          Country
                        </label>

                        <input
                          id="country"
                          name="country"
                          type="text"
                          value={formData.country}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    <div className="profile-field">
                      <label htmlFor="address">
                        Address
                      </label>

                      <div className="profile-input-icon">
                        <MapPin size={16} />

                        <input
                          id="address"
                          name="address"
                          type="text"
                          value={formData.address}
                          onChange={handleChange}
                          placeholder="Enter your address"
                        />
                      </div>
                    </div>

                    <div className="profile-field">
                      <label htmlFor="city">
                        City
                      </label>

                      <input
                        id="city"
                        name="city"
                        type="text"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter your city"
                      />
                    </div>

                    <div className="profile-form-actions">
                      <button
                        type="button"
                        className="secondary-button"
                        onClick={handleCancel}
                      >
                        <X size={16} />
                        Cancel
                      </button>

                      <button
                        type="submit"
                        className="primary-button"
                      >
                        <Save size={16} />
                        Save Changes
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="profile-details">
                    <div className="profile-detail-item">
                      <span>Full Name</span>

                      <strong>
                        {user.firstName} {user.lastName}
                      </strong>
                    </div>

                    <div className="profile-detail-item">
                      <span>Email Address</span>

                      <strong>{user.email}</strong>
                    </div>

                    <div className="profile-detail-item">
                      <span>Phone Number</span>

                      <strong>
                        {user.phone || "Not added yet"}
                      </strong>
                    </div>

                    <div className="profile-detail-item">
                      <span>Address</span>

                      <strong>
                        {user.address || "Not added yet"}
                      </strong>
                    </div>

                    <div className="profile-detail-item">
                      <span>City</span>

                      <strong>
                        {user.city || "Not added yet"}
                      </strong>
                    </div>

                    <div className="profile-detail-item">
                      <span>Country</span>

                      <strong>
                        {user.country || "Pakistan"}
                      </strong>
                    </div>
                  </div>
                )}
              </div>

              <div className="profile-quick-links">
                <Link to="/orders">
                  <Package size={18} />

                  <div>
                    <strong>View My Orders</strong>
                    <span>
                      Track and review your purchases.
                    </span>
                  </div>
                </Link>

                <Link to="/wishlist">
                  <Heart size={18} />

                  <div>
                    <strong>My Wishlist</strong>
                    <span>
                      View products you saved for later.
                    </span>
                  </div>
                </Link>
              </div>
            </main>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;