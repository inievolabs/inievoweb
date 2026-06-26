import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-upper">
        <div className="footer-brand-col">
          <a href="#site-header" className="footer-logo">
            <Image
              src="https://res.cloudinary.com/det1qnlrh/image/upload/v1782432654/Intactic-white_vmyikx.png"
              alt="Intactic Logo"
              width={200}
              height={40}
              style={{ width: 'auto', height: '36px', objectFit: 'contain', marginBottom: '8px' }}
            />
          </a>

          <div className="footer-socials">
            <a href="https://www.facebook.com/brainstation23/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
            <a href="https://twitter.com/BrainStation23" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i className="fa-brands fa-twitter"></i></a>
            <a href="https://www.linkedin.com/company/brainstation-23" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i className="fa-brands fa-linkedin-in"></i></a>
            <a href="https://www.youtube.com/channel/UCQ5AqU2eGEzvxiG8GUFF6Cw" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
          </div>
        </div>

        <div className="footer-links-col">
          <h4>Services</h4>
          <ul>

            <li><a href="#services">Managed Services</a></li>
            <li><a href="#services">MVP Development</a></li>
            <li><a href="#services">Technology Consulting</a></li>
            <li><a href="#services">Digital Transformation</a></li>

          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Products</h4>
          <ul>
            <li><a href="#products">Proctoring Pro</a></li>
            <li><a href="#products">Wallet23</a></li>
            <li><a href="#products">Remity</a></li>
            <li><a href="#products">PocketEdge</a></li>
            <li><a href="#products">Omnizia</a></li>

          </ul>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <ul>
            <li><a href="#contact">About Us</a></li>
            <li><a href="#contact">Blog Insights</a></li>
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="https://brainstation-23.easy.jobs/" target="_blank" rel="noopener noreferrer">Careers</a></li>
            <li><a href="#contact">Contact Inquiry</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-middle">
        <div className="compliance-logos">
          <span className="compliance-badge" title="ISO 27001 Security Certified"><i className="fa-solid fa-user-shield"></i> ISO 27001</span>
          <span className="compliance-badge" title="AWS Advanced Consulting Partner"><i className="fa-brands fa-aws"></i> AWS Partner</span>
          <span className="compliance-badge" title="Certified Moodle Partner"><i className="fa-solid fa-graduation-cap"></i> Moodle Partner</span>
          <span className="compliance-badge" title="ISTQB Member"><i className="fa-solid fa-vial"></i> ISTQB Certified</span>
        </div>
      </div>

      <div className="footer-lower">
        <p>&copy; 2026 Intactic Innovations. All rights reserved.</p>
        <div className="footer-policies">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
          <a href="#contact">NDA Agreement Templates</a>
        </div>
      </div>
    </footer>
  );
}
