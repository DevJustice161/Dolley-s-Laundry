import React from "react";

const Testimonials = () => {
  const clients = [
    {
      name: "Medical Office Manager",
      text: "Dolley’s Laundry keeps our clinic stocked and compliant with all necessary supplies. They are reliable every week, ensuring that we never run out of essentials. Highly recommended for their consistent service.",
      stars: "★★★★★",
      img: "./client1.jpg",
    },
    {
      name: "Jerome Freud",
      text: "Quick, efficient, and super friendly! I can't recommend Dolley's Laundry enough for their deep cleaning service. They tackled stains I thought were impossible to remove. My laundry feels brand new!",
      stars: "★★★★★",
      img: "./client2.jpg",
    },
    {
      name: "Laila Tassel",
      text: "As an Airbnb manager, I can't recommend Dolley's Laundry enough! Their services feels fresh and inviting after every service. The team is consistently on time and professional, leaving my spaces into serene and tidy.",
      stars: "★★★★★",
      img: "./client3.jpg",
    },
  ];

  return (
    <section className="testimonials-section">
      <h4 className="section-tag">TESTIMONIALS</h4>
      <h2 className="section-title">What Our Clients Are Saying</h2>
      <p className="section-sub">Real words from real happy homes.</p>

      <div className="testimonials-grid">
        {clients.map((client, index) => (
          <div key={index} className="testimonial-card">
            <div className="client-desc">
              <p className="stars">{client.stars}</p>
              <p className="client-text">{client.text}</p>
            </div>
            <hr />
            <div className="client-info">
              <img src={client.img} alt={client.name} />
              <h4>{client.name}</h4>
            </div>
          </div>
        ))}
      </div>

      <div className="indicator"></div>
    </section>
  );
};

export default Testimonials;
