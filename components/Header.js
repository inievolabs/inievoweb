import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsDrawerOpen(false);
        setActiveAccordion(null);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
    if (!isDrawerOpen) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
  };

  const closeDrawer = () => {
    setIsDrawerOpen(false);
    document.body.classList.remove('scroll-locked');
  };

  const handleAccordionClick = (index) => {
    if (activeAccordion === index) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(index);
    }
  };

  return (
    <>
      <header className={`site-header ${isSticky ? 'sticky' : ''}`} id="site-header">
        <div className="header-container">
          <a href="#site-header" className="brand-logo" aria-label="Intactic Innovations Home">
            <Image
              src="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Intactic_ltgcnt.png"
              alt="Intactic Logo"
              width={220}
              height={33}
              priority
              className="logo-img"
              style={{ objectFit: 'contain' }}
            />
          </a>

          <nav className="desktop-nav" aria-label="Desktop Navigation">
            <ul className="nav-list">
              <li className="nav-item has-megamenu">
                <a href="#services" className="nav-link">Services <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
                <div className="megamenu-panel">
                  <div className="megamenu-grid">
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-cubes-stacked"></i> Collaboration Model</h4>
                      <ul className="megamenu-links">
                        <li><a href="#services">Staff Augmentation</a></li>
                        <li><a href="#services">Managed Services</a></li>
                        <li><a href="#services">Digital Transformation</a></li>
                        <li><a href="#services">Technology Consulting</a></li>
                        <li><a href="#services">MVP Development</a></li>
                      </ul>
                    </div>
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-star"></i> Top Services</h4>
                      <ul className="megamenu-links">
                        <li><a href="#ai-section">ML & AI Development</a></li>
                        <li><a href="#ai-section">Data Engineering</a></li>
                        <li><a href="#ai-section">Data Migration</a></li>
                        <li><a href="#ai-section">Business Intelligence</a></li>
                        <li><a href="#products">Insurtech</a></li>
                        <li><a href="#services">3D Modeling Services</a></li>
                        <li><a href="#services">Game Studio</a></li>
                        <li><a href="#tech-stack">QA Testing & Automation</a></li>
                        <li><a href="#moodle">LMS Development</a></li>
                        <li><a href="#tech-stack">Web & Mobile App Development</a></li>
                        <li><a href="#industries">eCommerce Development</a></li>
                        <li><a href="#tech-stack">Adobe Experience Manager</a></li>
                        <li><a href="#tech-stack">SharePoint Services</a></li>
                        <li><a href="#industries">Blockchain Development</a></li>
                      </ul>
                    </div>
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-building-shield"></i> Enterprise Focused</h4>
                      <ul className="megamenu-links">
                        <li><a href="#products">Field Force Automation</a></li>
                        <li><a href="#industries">Banking Solution</a></li>
                        <li><a href="#tech-stack">Cloud Solutions</a></li>
                        <li><a href="#recognitions">Cyber Security</a></li>
                        <li><a href="#products">ERP Development</a></li>
                        <li><a href="#ai-section">Data Science & BI</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item has-dropdown">
                <a href="#industries" className="nav-link">Industries <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
                <div className="dropdown-panel industries-dropdown">
                  <ul className="dropdown-links grid-2-col">
                    <li><a href="#industries"><i className="fa-solid fa-landmark-dome"></i> Fintech</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-pills"></i> Pharma</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-tower-broadcast"></i> Telecom</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-house-chimney"></i> Real Estate</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-laptop-code"></i> Software/ITES</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-cart-shopping"></i> e-Commerce</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-graduation-cap"></i> Education</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-store"></i> Retail</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-car"></i> Automotive</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-rocket"></i> Startup</a></li>
                    <li><a href="#industries"><i className="fa-solid fa-handshake-angle"></i> Non Profit</a></li>
                  </ul>
                </div>
              </li>

              <li className="nav-item has-megamenu">
                <a href="#products" className="nav-link">Products <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
                <div className="megamenu-panel products-megamenu">
                  <div className="megamenu-grid">
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-wallet"></i> Fintech</h4>
                      <ul className="megamenu-links">
                        <li><a href="#products">Digital Banking Software</a></li>
                        <li><a href="#products">E-wallet Software</a></li>
                        <li><a href="#products">Digital Lending & Credit</a></li>
                        <li><a href="#products">Insurance 360</a></li>
                        <li><a href="#products">Cross Border Payments Solution</a></li>
                      </ul>
                    </div>
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-heart-pulse"></i> Healthcare</h4>
                      <ul className="megamenu-links">
                        <li><a href="#products">Omnizia</a></li>
                        <li><a href="#products">Time2Publish</a></li>
                      </ul>
                    </div>
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-graduation-cap"></i> LMS</h4>
                      <ul className="megamenu-links">
                        <li><a href="#products">Proctoring Pro</a></li>
                      </ul>
                    </div>
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-microchip"></i> AI Solution</h4>
                      <ul className="megamenu-links">
                        <li><a href="#ai-section">NeuraFlow - Conversational AI Agent</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="nav-item has-megamenu">
                <a href="#contact" className="nav-link">Resources <i className="fa-solid fa-chevron-down nav-arrow"></i></a>
                <div className="megamenu-panel resources-megamenu">
                  <div className="megamenu-grid grid-2-col-only">
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-circle-info"></i> Inside Intactic</h4>
                      <ul className="megamenu-links">
                        <li><a href="#contact">About Us</a></li>
                        <li><a href="#contact">Blog</a></li>
                        <li><a href="#case-studies">Case Studies</a></li>
                        <li><a href="#careers">Career</a></li>
                        <li><a href="#contact">Contact</a></li>
                        <li><a href="#contact">Our Resources</a></li>
                        <li><a href="#contact">Investor Relations</a></li>
                      </ul>
                    </div>
                    <div className="megamenu-col">
                      <h4 className="megamenu-title"><i className="fa-solid fa-award"></i> Recognitions</h4>
                      <ul className="megamenu-links">
                        <li><a href="#recognitions">Partners</a></li>
                        <li><a href="#contact">Enterprise-Grade Security</a></li>
                        <li><a href="#contact">Sustainability</a></li>
                        <li><a href="#contact">Media</a></li>
                        <li><a href="#contact">Join as Partner</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>


            </ul>
          </nav>

          <div className="header-actions">
            <a href="https://calendly.com/meeting-brainstation-23/30min" target="_blank" rel="noopener noreferrer" className="cta-button">
              <span>Schedule a Call</span>
            </a>
            <button className="mobile-toggle" aria-label="Toggle Navigation Menu" onClick={toggleDrawer}>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
              <span className="hamburger-bar"></span>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${isDrawerOpen ? 'active' : ''}`} id="mobile-drawer">
        <div className="drawer-header">
          <a href="#site-header" className="drawer-logo" onClick={closeDrawer}>
            <Image
              src="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Intactic_ltgcnt.png"
              alt="Intactic Logo"
              width={160}
              height={32}
              style={{ objectFit: 'contain' }}
            />
          </a>
          <button className="drawer-close" aria-label="Close Navigation Menu" onClick={closeDrawer}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="drawer-content">
          <ul className="drawer-menu-list">
            <li className={`drawer-menu-item has-accordion ${activeAccordion === 'services' ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => handleAccordionClick('services')}>
                Services <i className="fa-solid fa-chevron-down accordion-arrow"></i>
              </button>
              <div className="accordion-panel">
                <div className="accordion-section">
                  <span className="section-title">Collaboration Model</span>
                  <ul className="sub-links">
                    <li><a href="#services" onClick={closeDrawer}>Staff Augmentation</a></li>
                    <li><a href="#services" onClick={closeDrawer}>Managed Services</a></li>
                    <li><a href="#services" onClick={closeDrawer}>Digital Transformation</a></li>
                    <li><a href="#services" onClick={closeDrawer}>Technology Consulting</a></li>
                    <li><a href="#services" onClick={closeDrawer}>MVP Development</a></li>
                  </ul>
                </div>
                <div className="accordion-section">
                  <span className="section-title">Top Services</span>
                  <ul className="sub-links">
                    <li><a href="#ai-section" onClick={closeDrawer}>ML & AI Development</a></li>
                    <li><a href="#ai-section" onClick={closeDrawer}>Data Engineering</a></li>
                    <li><a href="#tech-stack" onClick={closeDrawer}>Web & Mobile App Dev</a></li>
                    <li><a href="#industries" onClick={closeDrawer}>eCommerce Development</a></li>
                    <li><a href="#tech-stack" onClick={closeDrawer}>QA Testing & Automation</a></li>
                    <li><a href="#tech-stack" onClick={closeDrawer}>Adobe Experience Manager</a></li>
                    <li><a href="#tech-stack" onClick={closeDrawer}>SharePoint Services</a></li>
                    <li><a href="#industries" onClick={closeDrawer}>Blockchain Development</a></li>
                  </ul>
                </div>
                <div className="accordion-section">
                  <span className="section-title">Enterprise Focused</span>
                  <ul className="sub-links">
                    <li><a href="#products" onClick={closeDrawer}>Field Force Automation</a></li>
                    <li><a href="#industries" onClick={closeDrawer}>Banking Solution</a></li>
                    <li><a href="#tech-stack" onClick={closeDrawer}>Cloud Solutions</a></li>
                    <li><a href="#recognitions" onClick={closeDrawer}>Cyber Security</a></li>
                    <li><a href="#products" onClick={closeDrawer}>ERP Development</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={`drawer-menu-item has-accordion ${activeAccordion === 'industries' ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => handleAccordionClick('industries')}>
                Industries <i className="fa-solid fa-chevron-down accordion-arrow"></i>
              </button>
              <div className="accordion-panel">
                <ul className="sub-links">
                  <li><a href="#industries" onClick={closeDrawer}>Fintech</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Pharma</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Telecom</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Real Estate</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Software/ITES</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>e-Commerce</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Education</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Retail</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Automotive</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Startup</a></li>
                  <li><a href="#industries" onClick={closeDrawer}>Non Profit</a></li>
                </ul>
              </div>
            </li>

            <li className={`drawer-menu-item has-accordion ${activeAccordion === 'products' ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => handleAccordionClick('products')}>
                Products <i className="fa-solid fa-chevron-down accordion-arrow"></i>
              </button>
              <div className="accordion-panel">
                <div className="accordion-section">
                  <span className="section-title">Fintech</span>
                  <ul className="sub-links">
                    <li><a href="#products" onClick={closeDrawer}>Digital Banking Software</a></li>
                    <li><a href="#products" onClick={closeDrawer}>E-wallet Software</a></li>
                    <li><a href="#products" onClick={closeDrawer}>Digital Lending & Credit</a></li>
                    <li><a href="#products" onClick={closeDrawer}>Insurance 360</a></li>
                  </ul>
                </div>
                <div className="accordion-section">
                  <span className="section-title">Healthcare</span>
                  <ul className="sub-links">
                    <li><a href="#products" onClick={closeDrawer}>Omnizia</a></li>
                    <li><a href="#products" onClick={closeDrawer}>Time2Publish</a></li>
                  </ul>
                </div>
                <div className="accordion-section">
                  <span className="section-title">LMS & AI</span>
                  <ul className="sub-links">
                    <li><a href="#products" onClick={closeDrawer}>Proctoring Pro</a></li>
                    <li><a href="#ai-section" onClick={closeDrawer}>NeuraFlow - Conversational AI</a></li>
                  </ul>
                </div>
              </div>
            </li>

            <li className={`drawer-menu-item has-accordion ${activeAccordion === 'resources' ? 'active' : ''}`}>
              <button className="accordion-trigger" onClick={() => handleAccordionClick('resources')}>
                Resources <i className="fa-solid fa-chevron-down accordion-arrow"></i>
              </button>
              <div className="accordion-panel">
                <div className="accordion-section">
                  <span className="section-title">Inside Intactic</span>
                  <ul className="sub-links">
                    <li><a href="#contact" onClick={closeDrawer}>About Us</a></li>
                    <li><a href="#contact" onClick={closeDrawer}>Blog</a></li>
                    <li><a href="#case-studies" onClick={closeDrawer}>Case Studies</a></li>
                    <li><a href="#careers" onClick={closeDrawer}>Career</a></li>
                    <li><a href="#contact" onClick={closeDrawer}>Contact</a></li>
                  </ul>
                </div>
                <div className="accordion-section">
                  <span className="section-title">Recognitions</span>
                  <ul className="sub-links">
                    <li><a href="#recognitions" onClick={closeDrawer}>Partners</a></li>
                    <li><a href="#contact" onClick={closeDrawer}>Security & Sustainability</a></li>
                    <li><a href="#contact" onClick={closeDrawer}>Media</a></li>
                  </ul>
                </div>
              </div>
            </li>


          </ul>

          <div className="drawer-footer">
            <a href="https://calendly.com/meeting-brainstation-23/30min" target="_blank" rel="noopener noreferrer" className="drawer-cta">
              <span>Schedule a Call</span>
            </a>
          </div>
        </div>
      </div>
      <div className={`drawer-overlay ${isDrawerOpen ? 'active' : ''}`} id="drawer-overlay" onClick={closeDrawer}></div>
    </>
  );
}
