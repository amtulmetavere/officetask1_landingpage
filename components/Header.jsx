import React from 'react'
import { useState, useEffect } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);
  return (
    <div>
      <div class="header-main">
        <header class="header-new">
            <div class="container">
                <div class="sitedetail">
                    <div class="headertop col-lg-3">
                        <div class="logo">
                            <a href="https://www.legalsupportworld.com" aria-label="site-logo">
						<img width="188" height="53" alt="logo" src="https://www.legalsupportworld.com/wp-content/uploads/2017/10/logo.png" data-lazy-src="https://www.legalsupportworld.com/wp-content/uploads/2017/10/logo.png" data-ll-status="loaded" class="entered lazyloaded"/>
                        <noscript>
                            <img width="188" height="53" alt="logo" src="https://www.legalsupportworld.com/wp-content/uploads/2017/10/logo.png"/></noscript>
							                               </a>
                        </div>
                        <div className={`navhummerbsr ${isOpen ? "open" : ""}`} onClick={() => setIsOpen(!isOpen)}>
                            <span></span>
                            <span></span>
                            <span></span>

                        </div>
                    </div>
                    <div class="siteextra col-lg-9 text-right">
                        <div class="d-flex justify-content-end">
							<div class="email-icon call-us d-flex align-items-center">
								<span class="btbox-icon"><img class="lazyload entered lazyloaded" width="18" height="18" src="https://www.legalsupportworld.com/wp-content/themes/legalsupport/images/email-icon.webp" alt="emailIcon" data-lazy-src="https://www.legalsupportworld.com/wp-content/themes/legalsupport/images/email-icon.webp" data-ll-status="loaded"/><noscript><img class="lazyload" width="18" height="18" src="https://www.legalsupportworld.com/wp-content/themes/legalsupport/images/email-icon.webp" alt="emailIcon"/></noscript></span>
                                <a class="email-phoneno-header" href="mailto:info@legalsupportworld.com">info@legalsupportworld.com</a>
                            </div>
                            <div class="call-us d-flex align-items-center">
								<span class="btbox-icon"><img class="lazyload entered lazyloaded" width="18" height="18" src="https://www.legalsupportworld.com/wp-content/themes/legalsupport/images/phone-icon.webp" alt="phoneIcon" data-lazy-src="https://www.legalsupportworld.com/wp-content/themes/legalsupport/images/phone-icon.webp" data-ll-status="loaded"/><noscript><img class="lazyload" width="18" height="18" src="https://www.legalsupportworld.com/wp-content/themes/legalsupport/images/phone-icon.webp" alt="phoneIcon"/></noscript></span>
                                <a class="tracking-phoneno-header" href="tel:+19148639894">+1 914 863 9894  </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <nav className={`navigation ${isFixed ? "fixed" : ""}`}>
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class={`nav-bar ${isOpen ? "open" : ""}`}>
                            <div class="nav-container">
                                {/* <!-- Call Primary Menu--> */}
									<div class="menu-header-menu-container"><ul id="menu-header-menu" class="desktop-menu"><li id="menu-item-132" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-5 current_page_item menu-item-132"><a href="https://www.legalsupportworld.com/" aria-current="page">Home</a></li>
<li id="menu-item-888" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-888"><a href="https://www.legalsupportworld.com/about-lsw/">About Us</a>
<ul class="sub-menu">
	<li id="menu-item-6689" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-6689"><a href="https://www.legalsupportworld.com/our-team/">Our Team</a></li>
	<li id="menu-item-135" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-135"><a href="https://www.legalsupportworld.com/legal-security/">Security &amp; Infrastructure</a></li>
	<li id="menu-item-5884" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5884"><a href="https://www.legalsupportworld.com/pricing-model/">Pricing Model</a></li>
	<li id="menu-item-5885" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-5885"><a href="https://www.legalsupportworld.com/free-trial/">Free Trial</a></li>
</ul>
</li>
<li id="menu-item-136" class="mega-menu-custom menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-136"><a href="https://www.legalsupportworld.com/services/">Services</a>
<ul class="ssub-menu">
<ul class="subsub-menu">
	<li class="sub-head"><a href="https://www.legalsupportworld.com/litigation-support-services/">Litigation Support Services</a>
	</li>
		<li ><a href="https://www.legalsupportworld.com/managed-document-review-services/">Managed Document Review Services</a></li>
		<li ><a href="https://www.legalsupportworld.com/cyber-incident-response-services/">Cyber Incident Response Services</a></li>
		<li class="sub-head"><a href="https://www.legalsupportworld.com/paralegal-services/">Paralegal Support Services</a></li>
		<li ><a href="https://www.legalsupportworld.com/legal-research-services/">Legal Research &amp; Writing Services</a></li>
        
	</ul>
    <ul class="subsub-menu">
	<li class="sub-head"><a href="https://www.legalsupportworld.com/contract-review-and-management-services/">Contract Lifecycle Management</a>
	</li>
		<li ><a href="https://www.legalsupportworld.com/contract-review-and-management-services/#contract-drafting-services">Contract Drafting Services</a></li>
		<li ><a href="https://www.legalsupportworld.com/contract-review-and-management-services/#contract-review-services">Contract Review Services</a></li>
		<li><a href="#">Contract Abstraction Services</a></li>
      
	</ul>
	<ul class="subsub-menu"><li class="sub-head">
	<a href="#">Specialities</a>
    </li>
		<li ><a href="https://www.legalsupportworld.com/real-estate-legal-services/">Real Estate Law</a></li>
		<li ><a href="https://www.legalsupportworld.com/legal-support-for-employment-law-firms/">Employment law</a></li>
		<li ><a href="https://www.legalsupportworld.com/lemon-law-services/">Lemon Law</a></li>
		<li ><a href="https://www.legalsupportworld.com/personal-injury-litigation-support/">Personal Injury Law</a></li>
        </ul>
    </ul>

</li>
<li id="menu-item-443" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-443"><a href="https://www.legalsupportworld.com/success-stories/">Success Stories</a></li>
<li id="menu-item-114" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-114"><a href="https://www.legalsupportworld.com/blog/">Blog</a></li>
<li id="menu-item-134" class="tracking-header-contact-button menu-item menu-item-type-post_type menu-item-object-page menu-item-134"><a href="https://www.legalsupportworld.com/contact-us/">Contact Us</a></li>
</ul></div>
								{/* <!--Close-->  */}
                            </div>
                            <div class="trial">
                                <form role="search" method="get" class="search-form" action="https://www.legalsupportworld.com/">
									<input type="search" id="" class="search-field" placeholder="Search..." value="" name="s"/>
									<button type="submit" class="search-submit" aria-label="searchButton">
                                        
                                    
                                    {/* <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --> */}
                                    <svg class="search-icon-svg" xmlns="https://www.w3.org/2000/svg" height=".9em" viewBox="0 0 512 512"
                                     className="search-icon-svg" style={{ fill: "#fff" }}>
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"></path></svg></button>
								</form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    </div>
  )
}

export default Header
