import "./main.css";

export default function Home() {
  return (
    <div className="checkout-container">
      <h1 className="checkout-title">
        Card Payment <br />
        Checkout Form
      </h1>
      <div className="checkout-wrapper">
        {/* Payment Gateway Section */}
        <div className="payment-gateway">
          <img src="https://diro.io/wp-content/uploads/2022/06/payment-gateway.jpg" alt="Payment Gateway Logo" />
        </div>

        {/* Registration Form */}
        <div className="registration-form">
          <h2>Complete registration payment</h2>

          {/* Personal Details Section */}
          <div className="form-section">
            <h3>Personal details</h3>
            <div className="form-group">
              <div className="form-item">
                <label>Address line</label>
                <input type="text" placeholder="P.O.Box 1223" />
              </div>
              <div className="form-item">
                <label>City</label>
                <input type="text" placeholder="Arusha" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-item">
                <label>State</label>
                <input type="text" placeholder="Arusha, Tanzania" />
              </div>
              <div className="form-item">
                <label>Postal code</label>
                <input type="text" placeholder="9090" />
              </div>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="form-section">
            <h3>Payment methods</h3>
            <div className="payment-options">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9q0sqA5NdwQUjBroTrgKxBchTW7cB40KjUQ&s"
                alt="VISA"
                className="payment-image"
              />
              <img
                src="https://media.designrush.com/inspirations/656399/conversions/1-preview.jpg"
                alt="Stripe"
                className="payment-image"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Paypal_2014_logo.png"
                alt="PayPal"
                className="payment-image"
              />
              <img
                src="https://i.pinimg.com/564x/8d/ec/e1/8dece15cc40aaf66ed47f6591b639d06.jpg"
                alt="Google Pay"
                className="payment-image"
              />
            </div>
          </div>

          {/* Card Details */}
          <div className="form-section">
            <h3>Card details</h3>
            <div className="form-item">
              <label>Cardholder's name</label>
              <input type="text" placeholder="Seen on your card" />
            </div>
            <div className="form-item">
              <label>Card number</label>
              <input type="text" placeholder="Seen on your card" />
            </div>
            <div className="form-group">
              <div className="form-item">
                <label>Expiry</label>
                <input type="text" placeholder="MM/YY" />
              </div>
              <div className="form-item">
                <label>CVC</label>
                <input type="text" placeholder="123" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
