import React from 'react'
import litigationImage from "../images/Litigation.png"; 

const services = [
    {
      id: 1,
      title: "Litigation Support Services",
      description:
        "We at Legal Support World can easily assist you in every phase of litigation, from prior to litigation being filed, all the way into the courtroom.",
      image: litigationImage,
      link: "https://www.legalsupportworld.com/litigation-support-services/",
    },
    {
      id: 2,
      title: "Contract Management",
      description:
        "Our contract management services ensure smooth handling of your business agreements with expert legal support.",
      image: litigationImage,
      link: "https://www.legalsupportworld.com/contract-management-services/",
    },
    {
      id: 3,
      title: "Legal Research",
      description:
        "Get in-depth legal research support from experienced professionals to strengthen your case and legal strategies.",
      image: litigationImage,
      link: "https://www.legalsupportworld.com/legal-research-services/",
    },
    {
      id: 4,
      title: "Paralegal Services",
      description:
        "Our paralegal support services help law firms streamline their workflow with reliable legal assistance.",
      image: litigationImage,
      link: "https://www.legalsupportworld.com/paralegal-services/",
    },
    {
      id: 5,
      title: "Deposition Summary",
      description:
        "We provide professional deposition summary services, making legal proceedings easier for attorneys.",
      image: litigationImage,
      link: "https://www.legalsupportworld.com/deposition-summary-services/",
    },
    {
      id: 6,
      title: "Medical Record Review",
      description:
        "Expert medical record review services to help attorneys handle personal injury and medical malpractice cases.",
      image: litigationImage,
      link: "https://www.legalsupportworld.com/medical-record-review-services/",
    },
  ];
const Services = () => {
  return (
    <section className='services'>
    <div className='details'>
        <h1>Legal Support Services We Offer</h1>
        <p>Your Needs and Our Legal Solutions = Remarkable Results

</p>
<hr/>
    </div>
    <div className='blocks service-grid'>
    {services.map((service) => (
        <div key={service.id} className="servicebox">
          <a href={service.link} target="_blank" rel="noopener noreferrer">
            <img width="64" height="64" alt={service.title} src={service.image} className="service-image" /></a>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <span className="read-more">Read More</span>
          
        </div>
      ))}
        
        
    </div>
</section>
  )
}

export default Services
