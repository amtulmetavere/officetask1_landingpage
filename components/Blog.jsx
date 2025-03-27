import React from 'react'

import ContractsAnalytics from '../images/Contracts-Analytics.jpg';
import ContractCompliance from '../images/Contract-Compliance.jpg';
import DataCentricIncidentResponse from '../images/Data-Centric-Incident-Response.jpg';
import MedicalRecordReview from '../images/Medical-Record-Reviews.webp';
const Blog = () => {
  return (
    <section className='latestblogs'>
    <div className='details'>
      <h1>Latest Blogs and Success Stories</h1>
<hr/>
  </div>
  <div className='blocks blogs-grid'>
    <div className='bcol1'>
      <span>OUR SUCCESS STORIES</span>
      <svg width="137" height="81" viewBox="0 0 137 81" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M33.6 0.399902L0 80.7999H52.5L68.1 0.399902H33.6ZM102 0.399902L68.4 80.7999H120.9L136.5 0.399902H102Z" fill="url(#paint0_linear_174_18708)"></path>
                  <defs>
                      <linearGradient id="paint0_linear_174_18708" x1="136.5" y1="40.5999" x2="-0.0214876" y2="40.9608" gradientUnits="userSpaceOnUse">
                          <stop stop-color="#1d2434"></stop>
                          <stop offset="1" stop-color="#b02925"></stop>
                      </linearGradient>
                  </defs>
              </svg>
    <h1>Outsource Function: Lien Search Services</h1>
    <p>Legal Support World helped a US-based law firm gather authentic property details and generate lien search reports for better decision-making and desired results.</p>
    <a href="#">FIND OUT MORE</a>
    </div>
    <div className='bcol b2'>
    <a href="#">
            <img src={MedicalRecordReview} alt="MedicalRecordReview" />
           
           
          </a>
          <div className='inner'>
            <span><img src='/calender.webp'></img> 14 / 01 / 25	</span>
            <h4>Medical Record Review: Revisiting the Outsource vs. In-House Debate</h4>
            </div>
         

    </div>
    <div className='bcol b3'> <a href="#">
            <img src={ContractsAnalytics} alt="Contracts Analytics" />
          </a>
          <div className='inner'>
            <span><img src='/calender.webp'></img> 25 / 12 / 24	</span>
            <h4>Medical Record Review: Revisiting the Outsource vs. In-House Debate</h4>
            </div></div>
    <div className='bcol b4'> <a href="#">
            <img src={DataCentricIncidentResponse} alt="DataCentricIncidentResponse" />
          </a>
          <div className='inner'>
            <span><img src='/calender.webp'></img> 21 / 11 / 24	</span>
            <h4>Medical Record Review: Revisiting the Outsource vs. In-House Debate</h4>
            </div></div>
    <div className='bcol b5'> <a href="#">
            <img src={ContractCompliance} alt="ContractCompliance" />
          </a>
          <div className='inner'>
            <span><img src='/calender.webp'></img> 15 / 10 / 24	</span>
            <h4>Medical Record Review: Revisiting the Outsource vs. In-House Debate</h4>
            </div></div>
      
      
  </div>
    </section>
  )
}

export default Blog
