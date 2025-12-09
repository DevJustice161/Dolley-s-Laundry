import React, { useState } from "react";
import Modal from "./Modal";

const CommercialQuoteModal = ({ isOpen, onClose }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    businessType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");
    setErrorMsg("");

    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "commercial-quote",
          ...form,
        }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSuccessMsg(
        "Your request has been sent successfully, you'll recieve a mail shortly! "
      );
      setForm({ name: "", email: "", businessType: "", message: "" });
      setTimeout(() => {
        setSuccessMsg("");
        onClose();
      }, 5000);
      // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Request Commercial Quote">
      <p>
        Tell us about your business and we’ll send you a tailored commercial
        laundry quote.
      </p>

      <form className="modal-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Full Name</label>
          <input
            name="name"
            type="text"
            placeholder="Firstname Surname"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email Address</label>
          <input
            name="email"
            type="email"
            placeholder="you@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Business Type</label>
          <input
            name="businessType"
            type="text"
            placeholder="e.g. Medical Office, Airbnb, Hotel"
            value={form.businessType}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Tell us what you need</label>
          <textarea
            name="message"
            rows="3"
            placeholder="Share volume, frequency, special requirements..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        {successMsg && <p className="success-msg">{successMsg}</p>}
        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <button
          type="submit"
          className="btn-primary modal-submit-btn"
          disabled={loading}
        >
          {loading ? "Sending..." : "Submit Request"}
        </button>
      </form>
    </Modal>
  );
};

export default CommercialQuoteModal;
