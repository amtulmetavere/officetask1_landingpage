import React from 'react'

const About = () => {
  return (
<section className="about-main-section pt-4 pt-md-5 pb-4 pb-md-5">
    <div className="container">
        <div className=" aboutd row align-items-center">
            {/* <!-- Left Image Block --> */}
            <div className="aboutpic col-lg-5 d-none d-md-block">
                <div className="image-block-box">
                                            
            <img width="400" height="426" className="about-img entered lazyloaded" src="https://www.legalsupportworld.com/wp-content/uploads/2024/11/legal-support.webp" alt="Legal Support Service" data-lazy-src="https://www.legalsupportworld.com/wp-content/uploads/2024/11/legal-support.webp" data-ll-status="loaded"/><noscript><img width="400" height="426" className="about-img" 
                             src="https://www.legalsupportworld.com/wp-content/uploads/2024/11/legal-support.webp" 
                             alt="Legal Support Service" /></noscript>
                                    </div>
            </div>

            {/* <!-- Right Content Block --> */}
            <div className="col-lg-7">
                <div className="section-heading-main pl-lg-4">
                    {/* <!-- Section Title --> */}
                    <h1 className="h2">
                        Legal Support Services                    </h1>
                    <hr className="stock-border"/>
					<div className="text-justify">
                    {/* <!-- Paragraphs --> */}
                    <p>Founded in 2008, Legal Support World (LSW) is one of the world’s leading legal outsourcing companies, providing fully integrated and cost-effective legal support solutions to attorneys, law firms, and companies across the globe. At the core of our legal support services, it is our aim to ensure success for our clients by providing maximum value, improved productivity, and offering up-to-date technology.</p>
<p>By leveraging our competencies, legal businesses can easily concentrate on their primary business activities. With the help of our vast industry exposure and technological expertise, our team can present customized legal support services that assist our clients in reaching their particular objectives and targets.</p>
<p>Our team, consisting of skilled attorneys and paralegals, would act as an extension of your in-house legal department and help you add value to your business and increase profitability. Our legal support provides a significant advantage over competitors in terms of quality, pricing, and turnaround time, firmly establishing us among the top legal support companies.</p>
					</div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About
