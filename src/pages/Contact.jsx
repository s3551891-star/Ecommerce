import { useState } from "react";
import {
  CheckCircle,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Send,
} from "lucide-react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h1>
            We'd love to
            <span> hear from you.</span>
          </h1>

          <p>
            Have a question about a product, your order
            or ShopSphere? Send us a message and we'll
            be happy to help.
          </p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container contact-grid">
          <div className="contact-info">
            <div className="section-heading">
              <span className="section-label">
                CONTACT INFORMATION
              </span>

              <h2>Let's start a conversation.</h2>

              <p>
                Reach out through any of the options below.
                We're here to make your shopping experience
                better.
              </p>
            </div>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Mail size={20} />
                </div>

                <div>
                  <span>Email</span>
                  <strong>support@shopsphere.com</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MessageCircle size={20} />
                </div>

                <div>
                  <span>Customer Support</span>
                  <strong>We're here to help</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <Clock3 size={20} />
                </div>

                <div>
                  <span>Support Hours</span>
                  <strong>Mon - Fri, 9:00 AM - 6:00 PM</strong>
                </div>
              </div>

              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <MapPin size={20} />
                </div>

                <div>
                  <span>Location</span>
                  <strong>Online Shopping Experience</strong>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <div className="contact-success-icon">
                  <CheckCircle size={28} />
                </div>

                <h2>Message sent!</h2>

                <p>
                  Thank you for contacting ShopSphere.
                  Your message has been received.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="secondary-button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <div className="contact-form-heading">
                  <span className="section-label">
                    SEND A MESSAGE
                  </span>

                  <h2>How can we help?</h2>
                </div>

                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-form-row">
                    <div className="contact-field">
                      <label htmlFor="name">
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                      />
                    </div>

                    <div className="contact-field">
                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="contact-field">
                    <label htmlFor="subject">
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </div>

                  <div className="contact-field">
                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      rows="6"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="contact-submit"
                  >
                    Send Message
                    <Send size={17} />
                  </button>

                  <p className="contact-form-note">
                    This is a frontend demo form. No
                    message is sent to a real server.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;