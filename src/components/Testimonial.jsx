import React from 'react'
const testimonial = [
    {
      id: 1,
      testimonialtext:
        "I have worked with LSW for 5 years. The lawyers here are an essential part of our in-house legal team. We get the work on-time & in an accurate manner. Their team has a great knowledge about US laws. Highly recommended to all the lawyers looking for legal support.",
      author:  "A CIVIL ATTORNEY",
      location:  " - MARYLAND, US",
    },
    {
      id: 2,
      testimonialtext:
        "We’ve been using the services of LSW since 3 years now, at both the lawyer and paralegal level, and have been thoroughly satisfied with the quality of their deliverables. We value our association with LSW and will never be reluctant in working together with them in the near future. ",
        author:  "A LAW FIRM",
        location: " - KANSAS, US",
    },
    {
      id: 3,
      testimonialtext:
        "I was really impressed to see how LSW managed to put together an amazing team for a crucial contract review project. Not only did it help save a lot of money for our client, it also made it easier for us to finish the project on-time. We will certainly use their services again.",
        author:  "A CRIMINAL LAWYER",
        location: " - Bristol, UK",
    },
    
  ];

const Testimonial = () => {
  return (
    <section className="testimonial text-center">
      <div className="container">
      <div class="testimonial-content">
        <h2>What Our Clients Say</h2>
        <div class="underline"></div>
        </div>
        <div
          id="testimonial4"
          className="carousel slide testimonial4_indicators testimonial4_control_button thumb_scroll_x swipe_x"
          data-bs-ride="carousel"
          data-bs-pause="hover"
          data-bs-interval="5000"
          data-bs-duration="2000"
        >
        <div className="carousel-inner" role="listbox">
  {testimonial.map((testimonial, index) => (
    <div
      key={testimonial.id}
      className={`carousel-item ${index === 0 ? "active" : ""}`} // Only first slide is active
    >
      <div className="testimonial4_slide">
        <p className="testimonial-text">{testimonial.testimonialtext}</p>
        <p className="author">{testimonial.author}</p>
        <p className="location">{testimonial.location}</p>
      </div>
    </div>
  ))}
</div>
      
          <a className="carousel-control-prev" href="#testimonial4" role="button" data-bs-slide="prev">
          <span>
          <img width="24" height="24" src="https://img.icons8.com/forma-light/24/circled.png" alt="circled"/>
            <img className='arrowp' width="24" height="24" src="https://img.icons8.com/?size=100&id=39944&format=png&color=000000" alt="circled"/>
           
          </span>
            
          </a>
          <a className="carousel-control-next" href="#testimonial4" role="button" data-bs-slide="next">
            <span> <img width="24" height="24" src="https://img.icons8.com/forma-light/24/circled.png" alt="circled"/>
            <img className='arrown' width="24" height="24" src="https://img.icons8.com/?size=100&id=39969&format=png&color=000000" alt="circled"/>
            </span>
            
          </a>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
