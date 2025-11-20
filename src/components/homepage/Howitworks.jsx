import React from "react";

const Howitworks = () => {
  return (
    <div className="how-it-works-container">
      <section className="help-section">
        <h4 className="section-tag">HOW IT WORKS</h4>
        <h2 className="section-title">How We Can Help</h2>
        <p className="section-sub">
          Simple, seamless, and stress-free cleaning at your doorstep.
        </p>

        <div className="help-content">
          <div className="indicator"></div>
          <div className="help-left">
            <ul>
              <div className="main">
                <li>
                  <div className="icon">
                    <img src="./vector-phone.png" alt="phone icon" />
                  </div>
                  <div className="desc">
                    <p className="desc-head first-head">Schedule Pickup</p>
                    <p className="desc-text">
                      Choose a pickup time online or by phone
                    </p>
                  </div>
                </li>
              </div>
              <div className="main">
                <li>
                  <div className="icon">
                    <img src="./vector-account.png" alt="account icon" />
                  </div>
                  <div className="desc">
                    <p className="desc-head">We Clean & Package Your Laundry</p>
                    <p className="desc-text">
                      Washed, dried, folded, and bagged
                    </p>
                  </div>
                </li>
              </div>
              <div className="main">
                <li>
                  <div className="icon">
                    <img src="./vector-calendar.png" alt="calendar icon" />
                  </div>
                  <div className="desc">
                    <p className="desc-head">Fresh Laundry Delivered</p>
                    <p className="desc-text">Next-day or scheduled delivery</p>
                  </div>
                </li>
              </div>
            </ul>
          </div>

          <div className="help-right">
            <img src="./laundry-folded.jpg" alt="Laundry Folded" />
          </div>
        </div>
      </section>

      {/* <section className="cta-section">
        <h2 className="cta-title">Ready For A Fresh, Laundry?</h2>
        <p className="cta-sub">
          Book today and discover why our customers recommend our laundry
          service so much.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary">Schedule Instant Pickup</button>
          <button className="btn-outline">Request Customized Quote</button>
        </div>
      </section> */}
    </div>
  );
};

export default Howitworks;
