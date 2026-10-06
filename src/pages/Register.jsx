import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  LockKeyhole,
  ShoppingBag,
  UserPlus,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useShop } from "../context/ShopContext";

function Register() {
  const navigate = useNavigate();

  const { registerUser } =
    useShop();

  const [formData, setFormData] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      agree: false,
    });

  const [error, setError] =
    useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } =
      e.target;

    setFormData((current) => ({
      ...current,
      [name]:
        type === "checkbox"
          ? checked
          : value,
    }));

    setError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.password.length <
      6
    ) {
      setError(
        "Password must be at least 6 characters."
      );
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      setError(
        "Passwords do not match."
      );
      return;
    }

    if (!formData.agree) {
      setError(
        "Please accept the terms and conditions."
      );
      return;
    }

    registerUser({
      firstName:
        formData.firstName.trim(),

      lastName:
        formData.lastName.trim(),

      email:
        formData.email
          .trim()
          .toLowerCase(),
    });

    navigate("/profile");
  };

  return (
    <div className="auth-page">

      <section className="auth-section">

        <div className="auth-container">

          {/* Left */}

          <div className="auth-intro">

            <div className="auth-brand">
              <span>
                S
              </span>

              <strong>
                ShopSphere
              </strong>
            </div>

            <span className="section-label">
              JOIN SHOPSPHERE
            </span>

            <h1>
              Create your account
            </h1>

            <p>
              Join ShopSphere and enjoy a
              smoother, more personalized
              shopping experience.
            </p>

            <div className="auth-benefits">

              <div>
                <CheckCircle
                  size={19}
                />

                <span>
                  Save your favorite
                  products
                </span>
              </div>

              <div>
                <CheckCircle
                  size={19}
                />

                <span>
                  Track your orders
                </span>
              </div>

              <div>
                <CheckCircle
                  size={19}
                />

                <span>
                  Faster checkout
                </span>
              </div>

            </div>

          </div>

          {/* Form */}

          <div className="auth-card">

            <div className="auth-card-icon">
              <UserPlus size={23} />
            </div>

            <div className="auth-card-heading">

              <h2>
                Create Account
              </h2>

              <p>
                Fill in your details to
                get started.
              </p>

            </div>

            {error && (
              <div className="auth-error">
                {error}
              </div>
            )}

            <form
              className="auth-form"
              onSubmit={handleSubmit}
            >

              <div className="auth-form-grid">

                <div className="auth-field">

                  <label htmlFor="firstName">
                    First Name
                  </label>

                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={
                      formData.firstName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Sufiyan"
                    required
                  />

                </div>

                <div className="auth-field">

                  <label htmlFor="lastName">
                    Last Name
                  </label>

                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={
                      formData.lastName
                    }
                    onChange={
                      handleChange
                    }
                    placeholder="Yahya"
                    required
                  />

                </div>

              </div>

              <div className="auth-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
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

              <div className="auth-field">

                <label htmlFor="password">
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  value={
                    formData.password
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="At least 6 characters"
                  required
                />

              </div>

              <div className="auth-field">

                <label htmlFor="confirmPassword">
                  Confirm Password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={
                    formData.confirmPassword
                  }
                  onChange={
                    handleChange
                  }
                  placeholder="Enter password again"
                  required
                />

              </div>

              <label className="auth-checkbox">

                <input
                  type="checkbox"
                  name="agree"
                  checked={
                    formData.agree
                  }
                  onChange={
                    handleChange
                  }
                />

                <span>
                  I agree to the Terms &
                  Conditions and Privacy
                  Policy.
                </span>

              </label>

              <button
                type="submit"
                className="auth-submit-button"
              >
                Create Account
                <ArrowRight size={18} />
              </button>

            </form>

            <div className="auth-divider">
              <span>
                Already have an account?
              </span>
            </div>

            <Link
              to="/login"
              className="auth-secondary-button"
            >
              Sign In
            </Link>

            <div className="auth-security">

              <LockKeyhole size={15} />

              <span>
                Your account information is
                handled securely.
              </span>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Register;