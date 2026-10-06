import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  LockKeyhole,
  LogIn,
} from "lucide-react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import { useShop } from "../context/ShopContext";

function Login() {
  const navigate = useNavigate();

  const { loginUser } =
    useShop();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [error, setError] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    const result =
      loginUser({
        email: email.trim(),
      });

    if (!result.success) {
      setError(
        "No account found with this email. Please register first."
      );

      return;
    }

    navigate("/profile");
  };

  return (
    <div className="auth-page">

      <section className="auth-section">

        <div className="auth-container">

          {/* Intro */}

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
              WELCOME BACK
            </span>

            <h1>
              Sign in to your account
            </h1>

            <p>
              Access your profile, orders,
              wishlist and personalized
              shopping experience.
            </p>

            <div className="auth-benefits">

              <div>
                <CheckCircle
                  size={19}
                />

                <span>
                  View your order history
                </span>
              </div>

              <div>
                <CheckCircle
                  size={19}
                />

                <span>
                  Manage your profile
                </span>
              </div>

              <div>
                <CheckCircle
                  size={19}
                />

                <span>
                  Access your wishlist
                </span>
              </div>

            </div>

          </div>

          {/* Login Card */}

          <div className="auth-card">

            <div className="auth-card-icon">
              <LogIn size={23} />
            </div>

            <div className="auth-card-heading">

              <h2>
                Welcome Back
              </h2>

              <p>
                Sign in to continue shopping.
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

              <div className="auth-field">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(
                      e.target.value
                    );
                    setError("");
                  }}
                  placeholder="you@example.com"
                  required
                />

              </div>

              <div className="auth-field">

                <div className="auth-label-row">

                  <label htmlFor="password">
                    Password
                  </label>

                  <span>
                    Demo Authentication
                  </span>

                </div>

                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(
                      e.target.value
                    );
                    setError("");
                  }}
                  placeholder="Enter your password"
                  required
                />

              </div>

              <button
                type="submit"
                className="auth-submit-button"
              >
                Sign In
                <ArrowRight size={18} />
              </button>

            </form>

            <div className="auth-divider">
              <span>
                Don't have an account?
              </span>
            </div>

            <Link
              to="/register"
              className="auth-secondary-button"
            >
              Create Account
            </Link>

            <div className="auth-security">

              <LockKeyhole size={15} />

              <span>
                Frontend demo authentication.
              </span>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Login;