import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Animated counter that triggers when in viewport
function Counter({ target, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const end = parseInt(target, 10);
          if (end === 0) { setCount(0); return; }
          const duration = 1800;
          const startTime = performance.now();

          const step = (currentTime) => {
            const progress = Math.min((currentTime - startTime) / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(easeProgress * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(step);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return <span ref={elementRef} className="count-up">{count}{suffix}</span>;
}

// Tech icon pill component
function TechPill({ icon, label }) {
  return (
    <div className="tech-pill">
      <i className={icon}></i>
      <span>{label}</span>
    </div>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesCount = 3;
  const [activeTab, setActiveTab] = useState('front-end');
  const [activeCaseTab, setActiveCaseTab] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '', budget: 25000, nda: true });
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slidesCount);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrevSlide = () => setCurrentSlide((prev) => (prev - 1 + slidesCount) % slidesCount);
  const handleNextSlide = () => setCurrentSlide((prev) => (prev + 1) % slidesCount);

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    const fieldName = id.replace('form-', '');
    setFormData((prev) => ({ ...prev, [fieldName]: type === 'checkbox' ? checked : value }));
    setFormErrors((prev) => ({ ...prev, [fieldName]: false }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    if (!formData.name.trim()) errors.name = true;
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) errors.email = true;
    if (!formData.message.trim()) errors.message = true;
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
    } else {
      setShowSuccess(true);
    }
  };

  const closeSuccessModal = () => {
    setShowSuccess(false);
    setFormData({ name: '', email: '', company: '', message: '', budget: 25000, nda: true });
  };

  const heroSlides = [
    {
      badge: { icon: 'fa-solid fa-bolt', text: 'Global Digital Partner' },
      tag: 'Global Software Development Agency',
      title: <>Build <span className="gradient-text">AI-Powered</span>, Scalable Software for Startups to Enterprises.</>,
      desc: 'From fintech to eCommerce, we deliver end-to-end solutions tailored to your business—fast, flexible, and reliable.',
      cta1: { label: 'Schedule a Call', href: '#contact' },
      stats: [
        { num: '850+', label: 'Tech Professionals' },
        { num: '30+', label: 'Countries Served' },
      ],
      img1: 'https://brainstation-23.com/wp-content/uploads/2025/11/bs-211.webp',
      img2: 'https://brainstation-23.com/wp-content/uploads/2025/11/bs-212.webp',
      img1Radius: '12px 12px 0px 12px',
      img2Radius: '0px 12px 12px 12px',
    },
    {
      badge: { icon: 'fa-solid fa-users', text: 'Resource Augmentation' },
      tag: 'Dedicated Engineering Teams',
      title: <>Scale Your Dev Team With <span className="gradient-text">Top 1%</span> Bangladeshi Talents in 4 Weeks</>,
      desc: 'From startups to enterprises—build scalable, secure software with our 18+ years of expertise and ISO 27001-certified teams.',
      cta1: { label: 'Hire Your Team Now', href: '#contact' },
      stats: [
        { num: '19+', label: 'Years of Experience' },
        { num: '88%+', label: 'Employee Retention' },
      ],
      img1: 'https://brainstation-23.com/wp-content/uploads/2025/10/HeroImg-2.1.webp',
      img2: 'https://brainstation-23.com/wp-content/uploads/2025/10/Hero-Img-v2.2.webp',
      img1Radius: '12px 12px 12px 0px',
      img2Radius: '12px 0px 12px 12px',
    },
    {
      badge: { icon: 'fa-solid fa-wallet', text: 'Fintech Solutions' },
      tag: 'Accelerate Financial Innovation',
      title: <>Launch Wallet or Payments in <span className="gradient-text">90 Days</span>, Compliant</>,
      desc: 'Empowering Banks, NBFIs & Fintechs to accelerate digital transformation with faster launches, lower costs & seamless UX.',
      cta1: { label: 'Book A Demo', href: 'https://calendly.com/meeting-brainstation-23/30min' },
      stats: [
        { num: '6', label: 'Global Offices' },
        { num: 'ISO 27001', label: 'Certified Teams' },
      ],
      img1: 'https://brainstation-23.com/wp-content/uploads/2025/10/Hero-Img-v3.1.webp',
      img2: 'https://brainstation-23.com/wp-content/uploads/2025/10/Hero-Img-v3.2.webp',
      img1Radius: '12px 12px 0px 12px',
      img2Radius: '0px 12px 12px 12px',
    },
  ];

  const caseStudiesData = [
    {
      badge: 'AI & ML, LMS',
      color: '#4992C1',
      title: 'Streamlining Attendance at IIITK with Facial Recognition',
      desc: 'The Indian Institute of Information Technology, Kottayam (IIITK) is an autonomous engineering institute located in Valavoor, Palai, Kottayam District, Kerala, India. Brain Station 23 developed a high-accuracy, scalable facial recognition attendance system to streamline student operations and reduce processing times.',
      link: '/iiitk/',
      stats: [
        { num: '80%', lbl: 'Processing Time Reduced' },
        { num: '99.5%', lbl: 'Facial Recognition Accuracy' },
      ],
      img: 'https://brainstation-23.com/wp-content/uploads/2025/06/image-23.png',
    },
    {
      badge: 'Fintech',
      color: '#1D9EDA',
      title: 'City Bank: Revolutionizing Digital Banking with CityTouch',
      desc: 'City Bank partnered with Brain Station 23 to launch CityTouch, a cutting-edge digital banking platform, enhancing user experience and driving financial inclusion. With 446,000+ users and $3B+ in transactions, CityTouch set a new benchmark in Bangladesh’s fintech landscape.',
      link: '/city-bank/',
      stats: [
        { num: '500K+', lbl: 'City Touch Users in 2025' },
        { num: '$3B', lbl: 'Transaction Volume' },
      ],
      img: 'https://brainstation-23.com/wp-content/uploads/2025/06/image-25.png',
    },
    {
      badge: 'AEM Solutions',
      color: '#6C63FF',
      title: 'Transforming Biopharma Engagement: AEM-Powered HCP Portal Boosts Learning & Compliance in Europe',
      desc: 'Discover how Brain Station 23 built a GDPR-compliant, multi-language HCP portal on Adobe Experience Manager (AEM), streamlining medical content access and LMS integration for a European biopharma leader. The solution enhanced engagement, ensured regulatory compliance, and scaled operations across EU markets.',
      link: '/european-biopharmaceutical-company/',
      stats: [
        { num: '40%', lbl: 'HCP Engagement Rate' },
        { num: '100%', lbl: 'GDPR Compliance Efficiency' },
      ],
      img: 'https://brainstation-23.com/wp-content/uploads/2025/06/image-23.png',
    },
    {
      badge: 'E-Commerce',
      color: '#E63B6F',
      title: 'Shwapno: Driving Retail Transformation through Scalable E-Commerce and Digital Excellence',
      desc: 'Brain Station 23 partnered with Shwapno, the #1 retail supermarket in Bangladesh, to develop a powerful, microservice-based e-commerce platform tailored for enterprise-scale retail. Built for scalability, speed, and a seamless user experience, the solution has revolutionized online grocery shopping, driving massive growth, boosting operational efficiency, and solidifying Shwapno’s dominance in Bangladesh’s retail landscape.',
      link: '/empowering-shwapno/',
      stats: [
        { num: '40%', lbl: 'Surge in Mobile App ratings' },
        { num: '3X', lbl: 'Growth in Daily orders placed' },
      ],
      img: 'https://brainstation-23.com/wp-content/uploads/2025/06/image-25.png',
    },
  ];

  return (
    <>
      <Head>
        <title>Intactic Innovations | Engineered on Leading Tech Stacks</title>
        <meta name="description" content="Intactic Innovations — From startups to enterprises, build scalable, secure software with 18+ years of expertise and ISO 27001-certified teams." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Header />

      <main className="homepage-main">

        {/* ── 1. HERO CAROUSEL ── */}
        <section className="hero-section" id="hero">
          {/* Background mesh gradients */}
          <div className="hero-bg-glow-1" aria-hidden="true" />
          <div className="hero-bg-glow-2" aria-hidden="true" />

          <div className="hero-slides-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {heroSlides.map((slide, idx) => (
              <div key={idx} className={`hero-slide-full ${currentSlide === idx ? 'active' : ''}`}>
                <div className="hero-slide-inner">
                  <div className="hero-text-col">
                    <span className="hero-badge">
                      <i className={slide.badge.icon}></i> {slide.badge.text}
                    </span>
                    <p className="hero-sub">{slide.tag}</p>
                    <h1 className="hero-h1">{slide.title}</h1>
                    <p className="hero-desc">{slide.desc}</p>
                    <div className="hero-cta-row">
                      <a href={slide.cta1.href} className="btn-hero-primary">{slide.cta1.label} <i className="fa-solid fa-arrow-right-long"></i></a>
                      <a href="#services" className="btn-hero-secondary">Explore Services <i className="fa-solid fa-angle-down"></i></a>
                    </div>
                  </div>
                  
                  <div className="hero-img-col">
                    <div className="hero-visual-grid">
                      {/* Overlapping 3D Image Card 1 */}
                      <div className="hero-card-stacked hero-card-img-1">
                        <Image
                          src={slide.img1}
                          alt={slide.badge.text}
                          width={300}
                          height={220}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          priority={idx === 0}
                          unoptimized
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                      
                      {/* Overlapping 3D Image Card 2 */}
                      <div className="hero-card-stacked hero-card-img-2">
                        <Image
                          src={slide.img2}
                          alt={slide.badge.text}
                          width={260}
                          height={180}
                          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                          unoptimized
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>

                      {/* Stat Card 1 (Glassmorphic) */}
                      <div className="hero-card-stacked hero-card-stat-1">
                        <span className="hero-grid-stat-num">{slide.stats[0].num}</span>
                        <span className="hero-grid-stat-lbl">{slide.stats[0].label}</span>
                      </div>
                      
                      {/* Stat Card 2 (Dark/Brand Glow) */}
                      <div className="hero-card-stacked hero-card-stat-2">
                        <span className="hero-grid-stat-num">{slide.stats[1].num}</span>
                        <span className="hero-grid-stat-lbl">{slide.stats[1].label}</span>
                      </div>

                      {/* Decorative Floating Tech Badges */}
                      <div className="hero-floating-badge badge-float-1">
                        <i className="fa-solid fa-microchip"></i> AI & Cloud
                      </div>
                      <div className="hero-floating-badge badge-float-2">
                        <i className="fa-solid fa-code"></i> Next.js
                      </div>
                      <div className="hero-floating-badge badge-float-3">
                        <i className="fa-solid fa-shield-halved"></i> ISO 27001
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button className="hero-arrow hero-arrow-left" onClick={handlePrevSlide} aria-label="Previous">
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="hero-arrow hero-arrow-right" onClick={handleNextSlide} aria-label="Next">
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          {/* Dots */}
          <div className="hero-dots">
            {heroSlides.map((_, idx) => (
              <button key={idx} className={`hero-dot ${currentSlide === idx ? 'active' : ''}`} onClick={() => setCurrentSlide(idx)} aria-label={`Slide ${idx + 1}`}></button>
            ))}
          </div>

        </section>

        {/* ── 2. CORE CAPABILITIES / SERVICES ── */}
        <section className="capabilities-section" id="services">
          <div className="caps-bg-grid" aria-hidden="true" />
          <div className="section-container">
            <div className="caps-header">
              <div>
                <span className="section-pretitle">Our Capabilities</span>
                <h2 className="section-title">Drive Growth with Our Core<br /><span className="gradient-text">Capabilities</span></h2>
                <p className="caps-subtitle">Full-spectrum engineering services to build, scale, and evolve your digital products.</p>
              </div>
              <a href="#contact" className="btn-outline">Explore All Services <i className="fa-solid fa-arrow-right-long"></i></a>
            </div>
            <div className="caps-grid">
              {[
                {
                  icon: 'fa-solid fa-people-group',
                  title: 'Staff Augmentation',
                  desc: 'Instantly scale your team with vetted AI-cloud experts. Pay only for the talent you need, when you need it.',
                  tag: 'Talent',
                  accent: '#1D9EDA',
                  highlights: ['Top 1% Engineers', '4-week onboarding', 'NDA-protected'],
                },
                {
                  icon: 'fa-solid fa-layer-group',
                  title: 'Managed Services',
                  desc: 'End-to-end support for your applications, infrastructure, and platforms—so you can focus on innovation.',
                  tag: 'Operations',
                  accent: '#6C63FF',
                  highlights: ['24/7 Monitoring', 'SLA-backed', 'Auto-scaling'],
                },
                {
                  icon: 'fa-solid fa-rocket',
                  title: 'MVP Development',
                  desc: 'Launch market-ready MVPs in 8–12 weeks. AI-accelerated builds with 40% faster iteration cycles.',
                  tag: 'Fast Launch',
                  accent: '#FBAF32',
                  highlights: ['8–12 week delivery', 'Agile sprints', 'Investor-ready'],
                },
                {
                  icon: 'fa-solid fa-magnifying-glass-chart',
                  title: 'Technology Consulting',
                  desc: 'Cut tech waste by 30% with our strategic audits. Align tools with business goals for maximum ROI.',
                  tag: 'Strategy',
                  accent: '#00C896',
                  highlights: ['Architecture review', 'Cost optimization', 'Roadmapping'],
                },
                {
                  icon: 'fa-solid fa-arrows-spin',
                  title: 'Digital Transformation',
                  desc: 'Modernize legacy systems with AI-driven automation. Achieve 50% operational efficiency gains.',
                  tag: 'Modernization',
                  accent: '#E63B6F',
                  highlights: ['Legacy migration', 'Process automation', 'Cloud-native'],
                },
                {
                  icon: 'fa-solid fa-brain',
                  title: 'ML & AI Development',
                  desc: 'Deploy custom neural models, optimize LLM token usage, and train conversational agents for deep analytics.',
                  tag: 'AI/ML',
                  accent: '#FF6B35',
                  highlights: ['LLM fine-tuning', 'RAG pipelines', 'AI agents'],
                },
              ].map((svc, i) => (
                <a href="#contact" key={i} className="cap-card" style={{ '--cap-accent': svc.accent, textDecoration: 'none', color: 'inherit' }}>
                  <div className="cap-card-top">
                    <div className="cap-icon"><i className={svc.icon}></i></div>
                    <span className="cap-tag">{svc.tag}</span>
                  </div>
                  <h3>{svc.title}</h3>
                  <p>{svc.desc}</p>
                  <ul className="cap-highlights">
                    {svc.highlights.map((h, j) => (
                      <li key={j}><i className="fa-solid fa-circle-check"></i> {h}</li>
                    ))}
                  </ul>
                  <span className="cap-link">Get Started <i className="fa-solid fa-arrow-right"></i></span>
                  <div className="cap-card-glow" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 4. INDUSTRIES ── */}
        <section className="industries-section" id="industries">
          <div className="section-container">
            <div className="industries-header">
              <span className="section-pretitle">Industries We Power</span>
              <h2 className="section-title text-center">With Innovation</h2>
            </div>
            <div className="industries-grid">
              {[
                { icon: 'fa-solid fa-graduation-cap', label: 'EdTech', desc: 'LMS solutions built with Moodle: live classes, assessments, compliance & reporting to empower learners.' },
                { icon: 'fa-solid fa-landmark-dome', label: 'Fintech', desc: 'Secure, scalable fintech & blockchain platforms built to transform payments, lending, and risk management.' },
                { icon: 'fa-solid fa-cart-shopping', label: 'E-Commerce', desc: 'Transform your store with certified nopCommerce themes, plugins & custom apps for speed, UX & conversion.' },
                { icon: 'fa-solid fa-pills', label: 'Pharma', desc: 'Regulation-first pharma & healthcare software: compliant platforms supporting HCPs, education & analytics.' },
                { icon: 'fa-solid fa-tower-broadcast', label: 'Telecom', desc: 'Enterprise-grade telecom applications that scale securely to serve millions with reliability & speed.' },
                { icon: 'fa-solid fa-store', label: 'Retail', desc: 'Smart retail systems streamlining inventory, customer journeys & omnichannel sales for business growth.' },
                { icon: 'fa-solid fa-laptop-code', label: 'Software/ITES', desc: 'Cutting-edge custom software & IT-enabled solutions solving complex problems with innovation & agility.' },
                { icon: 'fa-solid fa-rocket', label: 'Start-Ups', desc: 'Lean, fast-moving digital builds for startups: MVPs, product-market fit & scalable tech from day one.' },
              ].map((ind, i) => (
                <a href="#contact" key={i} className="industry-card" style={{ textDecoration: 'none', color: 'inherit' }}>
                  <div className="industry-icon"><i className={ind.icon}></i></div>
                  <h3>{ind.label}</h3>
                  <p>{ind.desc}</p>
                  <span className="industry-link">Learn More <i className="fa-solid fa-arrow-right"></i></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. STATS STRIP ── */}
        <section className="stats-section">
          <div className="section-container stats-grid-wrap">
            {[
              { target: '18', suffix: '+', label: 'Years of Service', icon: 'fa-solid fa-calendar-days' },
              { target: '850', suffix: '+', label: 'Tech Professionals', icon: 'fa-solid fa-users' },
              { target: '500', suffix: '+', label: 'Projects Delivered', icon: 'fa-solid fa-briefcase' },
              { target: '30', suffix: '+', label: 'Countries Served', icon: 'fa-solid fa-earth-americas' },
              { target: '96', suffix: '%', label: 'Client Retention', icon: 'fa-solid fa-heart' },
            ].map((stat, i) => (
              <div key={i} className="stat-block">
                <div className="stat-icon"><i className={stat.icon}></i></div>
                <div className="stat-num-wrap">
                  <Counter target={stat.target} suffix={stat.suffix} />
                </div>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* ── 6. AI DEVELOPMENT EXCELLENCE ── */}
        <section className="ai-section" id="ai-section">
          <div className="ai-bg-pattern" aria-hidden="true"></div>
          <div className="section-container">
            <div className="ai-layout">
              <div className="ai-text">
                <span className="section-pretitle text-light">AI-Powered Development</span>
                <h2 className="section-title text-light">AI-Driven Development<br />Excellence</h2>
                <p className="section-desc text-light">We harness the power of Generative AI, LLMs, and advanced machine learning to build intelligent solutions that transform how businesses operate, decide, and grow.</p>
                <div className="ai-feature-list">
                  {[
                    { icon: 'fa-solid fa-robot', title: 'Conversational AI Agents', desc: 'Custom chatbots and voice assistants powered by GPT-4, Claude, and fine-tuned domain models.' },
                    { icon: 'fa-solid fa-chart-line', title: 'Predictive Analytics', desc: 'ML pipelines that extract insights from historical data to drive business decisions in real-time.' },
                    { icon: 'fa-solid fa-brain', title: 'Neural Network Solutions', desc: 'Deep learning models for image recognition, NLP, fraud detection, and recommendation systems.' },
                  ].map((f, i) => (
                    <div key={i} className="ai-feat-item">
                      <div className="ai-feat-icon"><i className={f.icon}></i></div>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <a href="#contact" className="btn-hero-primary">Explore AI Capabilities <i className="fa-solid fa-arrow-right-long"></i></a>
              </div>
              <div className="ai-visual">
                <div className="ai-card-grid">
                  {[
                    { icon: 'fa-solid fa-microchip', label: 'GPT-4 Integration', sub: 'OpenAI APIs' },
                    { icon: 'fa-solid fa-diagram-project', label: 'LangChain & LlamaIndex', sub: 'RAG Pipelines' },
                    { icon: 'fa-brands fa-python', label: 'Python ML Stack', sub: 'TensorFlow, PyTorch' },
                    { icon: 'fa-solid fa-cloud', label: 'Cloud AI Services', sub: 'AWS SageMaker, GCP Vertex' },
                    { icon: 'fa-solid fa-database', label: 'Vector Databases', sub: 'Pinecone, Chroma' },
                    { icon: 'fa-solid fa-shield-halved', label: 'AI Safety & Ethics', sub: 'Responsible AI' },
                  ].map((card, i) => (
                    <div key={i} className="ai-tech-card">
                      <i className={card.icon}></i>
                      <span className="ai-card-label">{card.label}</span>
                      <span className="ai-card-sub">{card.sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. TECHNOLOGY STACKS ── */}
        <section className="tech-stack-section" id="tech-stack">
          <div className="section-container">
            <span className="section-pretitle">Technology Specialization</span>
            <h2 className="section-title text-center">Engineered on Leading Tech Stacks</h2>
            <div className="tech-tabs-nav">
              {[
                { key: 'front-end', label: 'Front-End' },
                { key: 'back-end', label: 'Back-End' },
                { key: 'cloud-devops', label: 'Cloud & DevOps' },
                { key: 'mobile-databases', label: 'Mobile & DB' },
                { key: 'platforms-qa', label: 'Platforms & QA' },
              ].map((tab) => (
                <button
                  key={tab.key}
                  className={`tech-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="tech-tabs-content">
              {activeTab === 'front-end' && (
                <div className="tech-pills-grid">
                  <TechPill icon="fa-brands fa-react" label="React" />
                  <TechPill icon="fa-brands fa-angular" label="Angular" />
                  <TechPill icon="fa-brands fa-vuejs" label="Vue.js" />
                  <TechPill icon="fa-brands fa-js" label="TypeScript" />
                  <TechPill icon="fa-brands fa-sass" label="Next.js" />
                  <TechPill icon="fa-brands fa-css3-alt" label="Tailwind CSS" />
                  <TechPill icon="fa-solid fa-layer-group" label="Svelte" />
                  <TechPill icon="fa-solid fa-code" label="Nuxt.js" />
                </div>
              )}
              {activeTab === 'back-end' && (
                <div className="tech-pills-grid">
                  <TechPill icon="fa-brands fa-node-js" label="Node.js" />
                  <TechPill icon="fa-brands fa-java" label="Java / Spring" />
                  <TechPill icon="fa-brands fa-python" label="Python / Django" />
                  <TechPill icon="fa-brands fa-php" label="PHP / Laravel" />
                  <TechPill icon="fa-brands fa-microsoft" label=".NET Core" />
                  <TechPill icon="fa-solid fa-g" label="Golang" />
                  <TechPill icon="fa-solid fa-gem" label="Ruby on Rails" />
                  <TechPill icon="fa-solid fa-server" label="GraphQL" />
                </div>
              )}
              {activeTab === 'cloud-devops' && (
                <div className="tech-pills-grid">
                  <TechPill icon="fa-brands fa-aws" label="AWS" />
                  <TechPill icon="fa-brands fa-docker" label="Docker" />
                  <TechPill icon="fa-solid fa-circle-nodes" label="Kubernetes" />
                  <TechPill icon="fa-solid fa-cloud" label="Google Cloud" />
                  <TechPill icon="fa-brands fa-microsoft" label="Azure" />
                  <TechPill icon="fa-solid fa-gears" label="Terraform" />
                  <TechPill icon="fa-brands fa-github" label="GitHub Actions" />
                  <TechPill icon="fa-solid fa-infinity" label="CI/CD Pipelines" />
                </div>
              )}
              {activeTab === 'mobile-databases' && (
                <div className="tech-pills-grid">
                  <TechPill icon="fa-brands fa-apple" label="iOS / Swift" />
                  <TechPill icon="fa-brands fa-android" label="Android / Kotlin" />
                  <TechPill icon="fa-solid fa-mobile-screen" label="React Native" />
                  <TechPill icon="fa-solid fa-feather" label="Flutter" />
                  <TechPill icon="fa-solid fa-database" label="PostgreSQL" />
                  <TechPill icon="fa-solid fa-leaf" label="MongoDB" />
                  <TechPill icon="fa-solid fa-fire" label="Firebase" />
                  <TechPill icon="fa-solid fa-bolt" label="Redis" />
                </div>
              )}
              {activeTab === 'platforms-qa' && (
                <div className="tech-pills-grid">
                  <TechPill icon="fa-solid fa-graduation-cap" label="Moodle LMS" />
                  <TechPill icon="fa-solid fa-cube" label="Adobe Experience" />
                  <TechPill icon="fa-brands fa-microsoft" label="SharePoint" />
                  <TechPill icon="fa-solid fa-vial" label="Selenium QA" />
                  <TechPill icon="fa-solid fa-spider" label="Playwright" />
                  <TechPill icon="fa-solid fa-square-check" label="Cypress" />
                  <TechPill icon="fa-solid fa-bug" label="Postman API" />
                  <TechPill icon="fa-solid fa-magnifying-glass" label="Jira" />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ── 9. PROCESS SECTION ── */}
        <section className="process-section" id="process">
          <div className="section-container">
            <span className="section-pretitle">Delivery Workflow</span>
            <h2 className="section-title">How We Guarantee Delivery</h2>
            <div className="process-steps">
              {[
                { num: '01', title: 'Discover & Map', desc: '1-week rapid alignment process mapping resource allocations, tech stacks, and delivery schedules before kickoff.', tag: '1-Week Alignment' },
                { num: '02', title: 'Assemble & Embed', desc: 'Rapid deployment of matching engineer profiles. Onboarding is completed and teams start sprints within 14 days.', tag: '2-Week Onboarding' },
                { num: '03', title: 'Iterate & QA', desc: 'Continuous building cycles with strict automated testing scripts, static security scanners, and weekly deployment updates.', tag: '99.9% Defect-Free Goal' },
                { num: '04', title: 'Scale with Confidence', desc: 'Smooth transition pipelines, comprehensive knowledge databases, and 24/7 server SLA maintenance for sustainable expansion.', tag: 'Growth Autopiloted' },
              ].map((step, i) => (
                <div key={i} className="process-step-card">
                  <div className="step-number">{step.num}</div>
                  <div className="step-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                    <span className="step-tag">{step.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 10. CASE STUDIES ── */}
        <section className="case-studies-section" id="case-studies">
          <div className="section-container">
            <span className="section-pretitle text-center" style={{ display: 'block', textAlign: 'center' }}>Success Stories</span>
            <h2 className="section-title text-center">Delivering High Impact Globally</h2>
            
            <div className="case-tabs-nav">
              {caseStudiesData.map((c, idx) => (
                <button
                  key={idx}
                  className={`case-tab-btn ${activeCaseTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveCaseTab(idx)}
                  style={{ '--case-color': c.color }}
                >
                  <span className="case-tab-badge">{c.badge}</span>
                  <span className="case-tab-title">{c.title.split(':')[0]}</span>
                </button>
              ))}
            </div>

            <div className="case-tab-content">
              {caseStudiesData.map((c, idx) => (
                idx === activeCaseTab && (
                  <div key={idx} className="case-details-layout" style={{ '--case-color': c.color }}>
                    <div className="case-text-side">
                      <span className="case-badge-v2">{c.badge}</span>
                      <h3>{c.title}</h3>
                      <p className="case-desc-text">{c.desc}</p>
                      
                      <div className="case-stats-row-v2">
                        {c.stats.map((s, j) => (
                          <div key={j} className="case-stat-v2">
                            <span className="case-stat-num">{s.num}</span>
                            <span className="case-stat-lbl">{s.lbl}</span>
                          </div>
                        ))}
                      </div>
                      <a href={`https://brainstation-23.com${c.link}`} target="_blank" rel="noopener noreferrer" className="case-read-btn-v2" style={{ backgroundColor: c.color }}>
                        View Case Study <i className="fa-solid fa-arrow-right-long"></i>
                      </a>
                    </div>
                    <div className="case-visual-side">
                      <div className="case-img-frame">
                        <Image
                          src={c.img}
                          alt={c.title}
                          width={600}
                          height={400}
                          style={{ objectFit: 'contain', width: '100%', height: 'auto', borderRadius: '12px' }}
                          unoptimized
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>

        {/* ── 11. RECOGNITIONS / CERTIFICATIONS ── */}
        <section className="recognition-section" id="recognitions">
          <div className="section-container">
            <span className="section-pretitle text-center" style={{ display: 'block', textAlign: 'center' }}>Awards & Recognitions</span>
            <h2 className="section-title text-center">Globally Recognized Excellence</h2>
            <div className="recognition-grid">
              {[
                { icon: 'fa-solid fa-award', label: 'Clutch Top Developer', sub: '2024 Global Leader' },
                { icon: 'fa-solid fa-shield-halved', label: 'ISO 27001 Certified', sub: 'Information Security' },
                { icon: 'fa-solid fa-star', label: 'Moodle Certified Partner', sub: 'Bangladesh #1' },
                { icon: 'fa-brands fa-microsoft', label: 'Microsoft Partner', sub: 'Gold Cloud Platform' },
                { icon: 'fa-brands fa-aws', label: 'AWS Partner', sub: 'Advanced Consulting' },
                { icon: 'fa-solid fa-certificate', label: 'CMMI Level 3', sub: 'Process Maturity' },
              ].map((r, i) => (
                <div key={i} className="recognition-card">
                  <div className="recog-icon"><i className={r.icon}></i></div>
                  <strong>{r.label}</strong>
                  <span>{r.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 12. CAREERS CALLOUT ── */}
        <section className="careers-callout" id="careers">
          <div className="careers-inner">
            <h2>Join a Team of Innovators</h2>
            <p>We're looking for passionate developers, engineers, and digital architects. Elevate your career by building platforms for global enterprises.</p>
            <div className="careers-perks">
              <span><i className="fa-solid fa-check"></i> Hybrid Work</span>
              <span><i className="fa-solid fa-check"></i> Tech Allowances</span>
              <span><i className="fa-solid fa-check"></i> Global Projects</span>
              <span><i className="fa-solid fa-check"></i> ISO Certified Workplace</span>
            </div>
            <a href="https://brainstation-23.easy.jobs/" target="_blank" rel="noopener noreferrer" className="btn-hero-primary">
              View Open Positions <i className="fa-solid fa-briefcase"></i>
            </a>
          </div>
        </section>



        {/* ── 14. CONTACT FORM ── */}
        <section className="contact-section" id="contact">
          <div className="contact-bg-shapes">
            <div className="contact-shape-1"></div>
            <div className="contact-shape-2"></div>
          </div>
          <div className="section-container contact-container">
            <div className="contact-info">
              <span className="section-pretitle">Start Your Journey</span>
              <h2>Ready to Scale<br />Your Team?</h2>
              <p>Tell us about your project requirements, technology stacks, or resource needs. An engineering lead will coordinate a review feedback document within 24 hours.</p>
              <div className="contact-features">
                <div className="c-feat"><i className="fa-solid fa-clock"></i> <span>24-Hour Lead Response Time</span></div>
                <div className="c-feat"><i className="fa-solid fa-user-check"></i> <span>Zero-Risk 2-Week Developer Trial</span></div>
                <div className="c-feat"><i className="fa-solid fa-lock"></i> <span>Strict Confidentiality & NDA Protection</span></div>
              </div>
              <div className="contact-social-row">
                {[
                  { icon: 'fa-brands fa-linkedin', href: 'https://www.linkedin.com/company/brainstation-23' },
                  { icon: 'fa-brands fa-facebook', href: 'https://www.facebook.com/brainstation23/' },
                  { icon: 'fa-brands fa-twitter', href: 'https://twitter.com/BrainStation23' },
                  { icon: 'fa-brands fa-youtube', href: 'https://www.youtube.com/channel/UCQ5AqU2eGEzvxiG8GUFF6Cw' },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" className="contact-social-btn">
                    <i className={s.icon}></i>
                  </a>
                ))}
              </div>
            </div>
            <div className="contact-form-wrapper">
              <form id="lead-form" className="lead-form" onSubmit={handleFormSubmit} noValidate>
                <div className="form-row">
                  <div className={`form-group ${formErrors.name ? 'invalid' : ''}`}>
                    <label htmlFor="form-name">Name *</label>
                    <input type="text" id="form-name" required placeholder="John Doe" value={formData.name} onChange={handleInputChange} />
                    <span className="error-msg">Please enter your name</span>
                  </div>
                  <div className={`form-group ${formErrors.email ? 'invalid' : ''}`}>
                    <label htmlFor="form-email">Work Email *</label>
                    <input type="email" id="form-email" required placeholder="john@company.com" value={formData.email} onChange={handleInputChange} />
                    <span className="error-msg">Please enter a valid email</span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="form-company">Organization</label>
                  <input type="text" id="form-company" placeholder="e.g. Enterprise Ltd" value={formData.company} onChange={handleInputChange} />
                </div>
                <div className={`form-group ${formErrors.message ? 'invalid' : ''}`}>
                  <label htmlFor="form-message">Project Description *</label>
                  <textarea id="form-message" required placeholder="Outline your project scope, timeline, and required tech stacks..." value={formData.message} onChange={handleInputChange}></textarea>
                  <span className="error-msg">Please describe your project</span>
                </div>
                <div className="form-group">
                  <label className="budget-label-row">
                    <span>Estimated Monthly Budget</span>
                    <span className="budget-value">{Number(formData.budget) >= 100000 ? '$100,000+' : `$${Number(formData.budget).toLocaleString()}`}</span>
                  </label>
                  <input type="range" id="form-budget" min="5000" max="100000" step="5000" value={formData.budget} onChange={handleInputChange} className="range-slider" />
                  <div className="range-limits"><span>$5,000</span><span>$100,000+</span></div>
                </div>
                <div className="form-group nda-toggle-group">
                  <label className="toggle-switch">
                    <input type="checkbox" id="form-nda" checked={formData.nda} onChange={handleInputChange} />
                    <span className="toggle-slider"></span>
                  </label>
                  <span className="toggle-label">We require a Mutual NDA prior to project sharing</span>
                </div>
                <button type="submit" className="submit-btn">
                  <span>Submit Project Inquiry</span> <i className="fa-solid fa-paper-plane"></i>
                </button>
                {showSuccess && (
                  <div className="form-success-overlay active" id="form-success-msg">
                    <div className="success-content">
                      <i className="fa-solid fa-circle-check"></i>
                      <h3>Thank you!</h3>
                      <p>Your project details have been successfully received. We will respond within 24 hours.</p>
                      <button type="button" className="btn btn-primary" id="success-close" onClick={closeSuccessModal}>Done</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
