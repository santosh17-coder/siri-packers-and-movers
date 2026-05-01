import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectCoverflow } from 'swiper/modules';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedCounter from '../components/AnimatedCounter.jsx';
import BookingForm from '../components/BookingForm.jsx';
import { PRIMARY_PHONE, WHATSAPP_NUM, SECONDARY_PHONE, TERTIARY_PHONE, EMAIL } from '../utils/constants.js';

const Home = () => {
  const [selectedReview, setSelectedReview] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  
  const galleryRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (galleryRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => checkScroll(), 500); // Initial check after render
    window.addEventListener('resize', checkScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  return (
    <>

      {/* ===== HERO SECTION ===== */}
      <section id="home" className="hero" aria-label="Siri Packers and Movers Hyderabad Hero" style={{ position: 'relative' }}>


        <div className="hero-content container">
          <span className="hero-badge">
            🚚 14+ Years of Trusted Packers and Movers Service
          </span>
          <h1>Best Packers and Movers in Hyderabad Safe &amp; Reliable House Shifting</h1>
          <p>Trusted by 10,000+ happy customers for household goods shifting, packing loading unloading, car &amp; bike transport, and office relocation across India.</p>
          <div className="hero-buttons">
            <div className="hero-gst-badge-inline" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: '#25d366', color: 'white', padding: '12px 18px', borderRadius: '10px', fontWeight: '800', fontSize: '0.9rem', boxShadow: '0 4px 12px rgba(37,211,102,0.3)', whiteSpace: 'nowrap' }}>
              <i className="fas fa-check-circle" style={{ fontSize: '1.1rem' }}></i>
              <span>GST: 36CIGPK1922B1ZQ</span>
            </div>
            <a href={`tel:${PRIMARY_PHONE.replace(/ /g, '')}`} className="btn btn-secondary" id="hero-call-btn" aria-label="Call Siri Packers and Movers">
              <i className="fas fa-phone"></i> Call {PRIMARY_PHONE}
            </a>
            <a href="#contact" className="btn btn-primary" id="hero-quote-btn" aria-label="Get free quote for packers and movers">
              <i className="fas fa-file-alt"></i> Get Free Quote
            </a>
          </div>


          <div className="hero-stats-grid" style={{ marginTop: '50px' }} aria-label="Siri Packers and Movers statistics">
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white' }}><AnimatedCounter end={14} suffix="+" /></div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Years Experience</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white' }}><AnimatedCounter end={10} suffix="K+" /></div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Happy Customers</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white' }}><AnimatedCounter end={99} suffix="%" /></div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Satisfaction Rate</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.2rem', fontWeight: '800', color: 'white' }}>24/7</div>
              <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', marginTop: '4px' }}>Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BOOKING FORM OVERLAY ===== */}
      <div className="hero-overlay-form-container">
        <BookingForm title="Get a Free Quote – Book Your Move Today!" className="hero-overlay-form shadow-card" />
      </div>

      {/* ===== TRUST BADGES ===== */}
      <div className="trust-badges" aria-label="Trust certifications for Siri Packers and Movers">
        <div className="trust-badge">
          <img src="/jd.png" alt="Justdial Certified Packers and Movers Hyderabad" className="trust-badge-icon" onError={(e) => e.target.style.display='none'} loading="lazy" />
          <div>Justdial Certified</div>
        </div>
        <div className="trust-badge">
          <img src="/suleka.png" alt="Sulekha Listed Packers and Movers" className="trust-badge-icon" onError={(e) => e.target.style.display='none'} loading="lazy" />
          <div>Available on Sulekha</div>
        </div>
        <div className="trust-badge">
          <img src="/logo-migrera.png" alt="Migrera Verified Movers" className="trust-badge-icon" onError={(e) => e.target.style.display='none'} loading="lazy" />
          <div>Migrera Verified</div>
        </div>
      </div>

      {/* ===== TRUSTED BY SECTION (PREMIUM BAR) ===== */}
      <section className="trusted-clients-bar py-6 md:py-8 bg-white overflow-hidden border-b border-gray-200 shadow-sm">
        <div className="container flex flex-col lg:flex-row items-center gap-4 lg:gap-10">
          <div className="flex items-center gap-2 shrink-0">
             <h3 style={{ fontSize: '1rem', color: 'var(--dark-blue)', whiteSpace: 'nowrap', margin: 0, fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>Trusted By</h3>
             <div className="w-12 h-1 bg-red-600 lg:hidden"></div>
          </div>
          <div className="w-full overflow-hidden py-6">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={40}
              slidesPerView={'auto'}
              loop={true}
              speed={6000}
              autoplay={{ delay: 0, disableOnInteraction: false }}
              observer={true}
              observeParents={true}
              className="continuous-swiper"
              style={{ transitionTimingFunction: 'linear' }}
            >
              {[
                { name: "SBI Bank", img: "/sbi.jpeg" },
                { name: "Sundaram Finance", img: "/sundharam fainance.jpeg" },
                { name: "Union Bank", img: "/union bank.jpeg" },
                { name: "IDBI Bank", img: "/idbi.jpeg" },
                { name: "ICICI Bank", img: "/icici.jpeg" },
                { name: "Reliance Finance", img: "/reliannce finance.jpeg" },
                { name: "Andhra Bank", img: "/andhra bankl.jpeg" },
                { name: "PNB Bank", img: "/pnb.jpeg" },
                { name: "Axis Bank", img: "/axis.jpeg" },
                { name: "Sulekha", img: "/suleka.png" },
                { name: "Justdial", img: "/jd.png" },
                { name: "Migrera", img: "/logo-migrera.png" },
              ].map((client, idx) => (
                <SwiperSlide key={idx} style={{ width: 'max-content', display: 'flex' }}>
                  <div className="client-logo-pill" style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', padding: '6px 18px', borderRadius: '50px', border: '1.5px solid #f0f0f0', boxShadow: '0 4px 10px rgba(0,0,0,0.04)', width: 'max-content', transition: 'all 0.3s ease' }}>
                    <div className="client-logo-circle" style={{ width: '38px', height: '38px', borderRadius: '50%', overflow: 'hidden', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <img src={client.img} alt={client.name} style={{ width: '85%', height: '85%', objectFit: 'contain' }} />
                    </div>
                    <span style={{ fontWeight: '700', color: 'var(--dark-blue)', whiteSpace: 'nowrap', fontSize: '0.85rem', letterSpacing: '0.3px' }}>{client.name}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section id="about" className="about section-padding" aria-label="About Siri Packers and Movers Hyderabad">
        <div className="container">
          <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div className="about-image-wrapper" style={{ position: 'relative' }}>
              <img src="/aboutus.png" alt="Siri Packers and Movers team packing household goods for safe shifting in Hyderabad" className="main-image" style={{ width: '100%', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} loading="lazy" />
              <div className="experience-badge" style={{ position: 'absolute', bottom: '-20px', right: '-20px', background: 'var(--primary-red)', color: 'white', padding: '20px', borderRadius: '50%', width: '120px', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', boxShadow: '0 5px 15px rgba(218,37,29,0.3)', border: '5px solid white' }}>
                <span className="years" style={{ fontSize: '1.8rem', fontWeight: 'bold', lineHeight: '1' }}>14+</span>
                <span className="text" style={{ fontSize: '0.8rem', textAlign: 'center', lineHeight: '1.2', marginTop: '5px' }}>Years<br/>Experience</span>
              </div>
            </div>
            <div className="about-text">
              <div className="section-title left-align" style={{ textAlign: 'left' }}>
                <h2>About <span>Siri Packers &amp; Movers</span></h2>
                <div className="underline" style={{ margin: '0 0 20px 0' }}></div>
              </div>
              <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}><strong>Siri Packers &amp; Movers</strong> is one of the <strong>best packers and movers in Hyderabad</strong>, providing safe and damage-free household goods shifting, packing loading unloading unpacking, and transportation services since <strong>2010</strong>.</p>
              <p style={{ marginBottom: '15px' }}>With over <strong>14+ years of experience</strong>, we have successfully completed <strong>10,000+ house shifting</strong> and relocation projects, earning a remarkable <strong>99% customer satisfaction</strong> rate. Whether you need <strong>local shifting in Hyderabad</strong>, <strong>interstate relocation</strong>, or <strong>office relocation</strong> — Siri Packers ensures your move is seamless, secure, and on time.</p>
              <p style={{ marginBottom: '20px' }}>Led by our founder, <strong>Pesara Krishna Reddy</strong>, our professional team handles every item with utmost care — from fragile electronics to heavy furniture. We use premium packing materials for 100% damage-free delivery.</p>
              <ul className="about-features" style={{ listStyle: 'none', padding: 0, display: 'grid', gap: '10px' }}>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-red)', marginRight: '10px' }}></i> 14+ Years of Trusted Service</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-red)', marginRight: '10px' }}></i> Safe Packing, Loading &amp; Unloading</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-red)', marginRight: '10px' }}></i> All India House Shifting Service</li>
                <li><i className="fas fa-check-circle" style={{ color: 'var(--primary-red)', marginRight: '10px' }}></i> Affordable &amp; Transparent Pricing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="services section-padding bg-light" aria-label="Packers and Movers Services in Hyderabad">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Services</span></h2>
            <div className="underline"></div>
            <p>Complete packing, loading, unloading, unpacking &amp; transportation solutions for Hyderabad and across India.</p>
          </div>
          <div className="services-grid">
            {[
              { title: 'Household Goods Shifting', icon: 'fa-home', img: '/householdshifting.png', desc: 'Complete household goods shifting with safe packing loading unloading and unpacking. We handle furniture, electronics, kitchenware and all household items with care.' },
              { title: 'Local Shifting', icon: 'fa-truck-moving', img: '/localshifting.png', desc: 'Fast and affordable local shifting transit services. Same-day house shifting available with quick packing, loading, and safe delivery to your new home.' },
              { title: 'Interstate Relocation', icon: 'fa-route', img: '/intercity.png', desc: 'Seamless state-to-state household goods transportation. We provide safe packing and timely delivery for Hyderabad to Bangalore, Mumbai, Chennai, Delhi & all cities.' },
              { title: 'Office Relocation', icon: 'fa-building', img: '/officereloactions.png', desc: 'Professional office relocation with minimal downtime. We handle computers, furniture and equipment with specialized packing and careful transportation.' },
              { title: 'Car & Bike Transport', icon: 'fa-car', icon2: 'fa-motorcycle', img: '/vehicletransport.png', desc: 'Secure car and bike transportation using specialized carriers. Door-to-door vehicle transport with full insurance coverage across India.' },
              { title: 'Warehouse & Storage', icon: 'fa-warehouse', img: '/warehousestorage.png', desc: 'Safe and secure warehouse storage facilities with 24/7 CCTV surveillance. Short-term and long-term storage for your household goods.' },
            ].map((srv, idx) => (
              <article className="service-card modern-card" key={idx}>
                <div className="card-img-wrapper">
                  <img src={srv.img} alt={`${srv.title} by Siri Packers and Movers Hyderabad`} loading="lazy" />
                </div>
                <div className="card-content">
                  <h3 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                    <i className={`fas ${srv.icon}`}></i>
                    {srv.icon2 && <i className={`fas ${srv.icon2}`}></i>}
                    <span>{srv.title}</span>
                  </h3>
                  <p>{srv.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS / PROCESS SECTION ===== */}
      <section id="process" className="process-section section-padding" aria-label="How house shifting works with Siri Packers">
        <div className="container">
          <div className="section-title">
            <h2>How <span>It Works</span></h2>
            <div className="underline"></div>
            <p>Our simple 4-step process for hassle-free packing, loading, transportation &amp; unpacking</p>
          </div>
          <div className="process-grid">
            {[
              { step: '01', icon: 'fa-phone-alt', title: 'Book Your Move', desc: 'Call us or fill the form to get a free quote for your house shifting or office relocation needs.' },
              { step: '02', icon: 'fa-box-open', title: 'Packing & Loading', desc: 'Our trained team arrives with premium packing materials. We carefully pack, wrap, and load all your household goods.' },
              { step: '03', icon: 'fa-truck', title: 'Safe Transportation', desc: 'Your goods are transported in well-maintained vehicles by experienced drivers. Multi-layer packing ensures a completely damage-free journey.' },
              { step: '04', icon: 'fa-check-double', title: 'Unloading & Unpacking', desc: 'We unload, unpack, and arrange your belongings at the new location. Your move is complete!' },
            ].map((item, idx) => (
              <div className="process-card" key={idx}>
                <div className="process-step-num">{item.step}</div>
                <div className="process-icon-wrapper">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="why-choose" className="section-padding bg-light" aria-label="Why choose Siri Packers and Movers Hyderabad">
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="section-title">
            <h2>Why Choose <span>Siri Packers</span></h2>
            <div className="underline"></div>
            <p>Why we are the best packers and movers in Hyderabad</p>
          </div>
          <div className="why-choose-grid">
            {[
              { icon: 'fa-award', title: '14+ Years Experience', desc: 'Proven track record as one of the most trusted packers and movers in Hyderabad since 2010.' },
              { icon: 'fa-globe-asia', title: 'All India Coverage', desc: 'House shifting and transportation services to every state and major city across India.' },
              { icon: 'fa-rupee-sign', title: 'Affordable Pricing', desc: 'Transparent quotes with no hidden charges. Best rates for packers and movers in Hyderabad.' },
              { icon: 'fa-box', title: 'Safe Packing Materials', desc: 'Premium bubble wrap, corrugated sheets, carton boxes & foam padding for damage-free packing.' },
              { icon: 'fa-clock', title: 'On-Time Delivery', desc: 'We respect your time. Punctual packing, loading, transportation and delivery guaranteed.' },
              { icon: 'fa-users', title: 'Professional Team', desc: 'Trained, verified, and courteous staff for safe handling of your household goods and belongings.' },
            ].map((item, idx) => (
              <div className="why-card" key={idx}>
                <div className="why-card-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== GALLERY SECTION ===== */}
      <section id="gallery" className="section-padding" aria-label="Gallery of packing loading and house shifting work">
        <div className="container">
          <div className="section-title">
            <h2>Our <span>Gallery</span></h2>
            <div className="underline"></div>
            <p>A glimpse of our professional packing, loading, unloading and house shifting in action.</p>
          </div>

          <div className="relative group/gallery-container" style={{ margin: '0 -15px', padding: '0 15px' }}>
            {/* Rectangular Scroll Navigation Buttons - Visible on all screens */}
            <button 
              onClick={() => {
                if(galleryRef.current) galleryRef.current.scrollBy({ left: -400, behavior: 'smooth' });
              }}
              disabled={!canScrollLeft}
              className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[60px] bg-white/95 border border-gray-200 shadow-[2px_0_10px_rgba(0,0,0,0.1)] rounded-none flex items-center justify-center transition-all ${!canScrollLeft ? 'opacity-30 cursor-not-allowed text-gray-400' : 'text-[#1c355e] hover:bg-[#1c355e] hover:text-white active:scale-90 opacity-100'}`}
              aria-label="Scroll Left"
            >
              <i className="fas fa-chevron-left" style={{ fontSize: '1rem' }}></i>
            </button>

            <button 
              onClick={() => {
                if(galleryRef.current) galleryRef.current.scrollBy({ left: 400, behavior: 'smooth' });
              }}
              disabled={!canScrollRight}
              className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-[30px] h-[60px] bg-white/95 border border-gray-200 shadow-[-2px_0_10px_rgba(0,0,0,0.1)] rounded-none flex items-center justify-center transition-all ${!canScrollRight ? 'opacity-30 cursor-not-allowed text-gray-400' : 'text-[#1c355e] hover:bg-[#1c355e] hover:text-white active:scale-90 opacity-100'}`}
              aria-label="Scroll Right"
            >
              <i className="fas fa-chevron-right" style={{ fontSize: '1rem' }}></i>
            </button>

            <div
              ref={galleryRef}
              onScroll={checkScroll}
              className="gallery-scroll flex gap-4 overflow-x-auto pb-6 pt-2 px-1"
              style={{
                scrollSnapType: 'x mandatory',
                WebkitOverflowScrolling: 'touch',
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                scrollPaddingLeft: '2px'
              }}
            >
              <style>{`.gallery-scroll::-webkit-scrollbar { display: none; }`}</style>

            {[
              { title: "Household Shifting",  subtitle: "Safe packing",          src: "/truckgallery.png" },
              { title: "Premium Packing",     subtitle: "Multi-layer protection", src: "/gallery1.png" },
              { title: "Fragile Handling",    subtitle: "Extra care",             src: "/gallery3.png" },
              { title: "Furniture Moving",    subtitle: "Scratch-free",           src: "/sofapacking.png" },
              { title: "Office Relocation",   subtitle: "Business moving",        src: "/gallery2.png" },
              { title: "Loading/Unloading",   subtitle: "Pro handling",           src: "/gallery4.png" },
              { title: "Inter-state Moving",  subtitle: "Safe long distance",      src: "/truckgallery.png" },
              { title: "Car Transportation",  subtitle: "Secure car carriers",     src: "/gallery2.png" },
              { title: "Warehouse Storage",   subtitle: "Safe godown facility",    src: "/gallery1.png" },
              { title: "Bike Shifting",       subtitle: "Expert bike transport",   src: "/sofapacking.png" },
              { title: "Local Shifting",      subtitle: "Hyderabad city moving",   src: "/gallery3.png" },
              { title: "Corporate Moving",    subtitle: "Bulk office shifting",    src: "/gallery4.png" },
              { title: "Industrial Moving",   subtitle: "Heavy machine transport", src: "/truckgallery.png" },
              { title: "Packing Supplies",    subtitle: "Quality carton boxes",    src: "/gallery1.png" },
              { title: "Unpacking Help",      subtitle: "Doorstep arrangement",    src: "/gallery2.png" },
              { title: "Insurance Claim",     subtitle: "Full safety coverage",    src: "/gallery3.png" },
            ].map((img, idx) => (
              <div
                key={idx}
                className="group shrink-0"
                style={{
                  width: 'clamp(130px, 28vw, 180px)',
                  height: 'clamp(170px, 36vw, 230px)',
                  scrollSnapAlign: 'start',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  position: 'relative',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
                  cursor: 'pointer',
                  background: '#eee',
                  flexShrink: 0,
                }}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'transform 0.4s ease',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.07)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy"
                />
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 52%)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '10px 11px',
                    color: 'white',
                    pointerEvents: 'none'
                  }}
                >
                  <h3 style={{ fontSize: 'clamp(0.7rem, 2.2vw, 0.82rem)', fontWeight: 700, margin: '0 0 2px', lineHeight: 1.2 }}>
                    {img.title}
                  </h3>
                  <p style={{ fontSize: 'clamp(0.6rem, 1.8vw, 0.7rem)', color: 'rgba(255,255,255,0.68)', margin: 0, lineHeight: 1.3 }}>
                    {img.subtitle}
                  </p>
                </div>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CUSTOMER REVIEWS ===== */}
      <section id="reviews" className="reviews section-padding bg-light" aria-label="Customer reviews for Siri Packers and Movers">
        <div className="container">
          <div className="section-title">
            <h2>Customer <span>Reviews</span></h2>
            <div className="underline"></div>
            <p>Trusted by 10,000+ families who recently moved with us. Rating: ⭐ 4.8 / 5</p>
          </div>
          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            loop={true}
            speed={4000}
            autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
            allowTouchMove={true}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="continuous-swiper"
            style={{ paddingBottom: '20px', paddingTop: '20px' }}
          >
            {[
              {
                name: "Rahul M.",
                location: "Mansoorabad, Hyderabad",
                rating: "5.0",
                text: "Excellent packers and movers service! The packing and loading was top-notch. Everything was delivered on time without a single scratch. Highly recommended for house shifting in Hyderabad."
              },
              {
                name: "Sneha Reddy",
                location: "LB Nagar, Hyderabad",
                rating: "4.8",
                text: "Very professional team. They handled my fragile items with care during my household goods shifting from Hyderabad to Bangalore. The pricing was also very reasonable and transparent."
              },
              {
                name: "Vikram Singh",
                location: "Dilsukhnagar, Hyderabad",
                rating: "4.9",
                text: "Punctual and hardworking staff. They completed the entire packing loading and unloading within 3 hours. Really impressed with their speed and efficiency. Best packers in Hyderabad!"
              },
              {
                name: "Priya Sharma",
                location: "Uppal, Hyderabad",
                rating: "5.0",
                text: "I booked them for car transport from Hyderabad to Mumbai. My vehicle was delivered within the promised timeline and in perfect condition. Great communication throughout the process."
              },
              {
                name: "Mohammed Arif",
                location: "Secunderabad",
                rating: "4.9",
                text: "Recently moved my entire house from Secunderabad to Gachibowli. The team was very careful with all my belongings. Proper unpacking and arrangement at the new location. Truly the best movers!"
              }
            ].map((review, i) => (
              <SwiperSlide key={i}>
                <div className="review-card shadow-card" style={{ padding: '25px' }}>
                  <div className="stars" style={{ color: '#ffc107', marginBottom: '10px' }}>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>{' '}
                    <span style={{ color: '#333', fontSize: '0.9rem' }}>({review.rating})</span>
                  </div>
                  <p className="review-text" style={{ fontStyle: 'italic', color: '#555', marginBottom: '10px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    "{review.text}"
                  </p>
                  <button onClick={() => setSelectedReview(review)} style={{ color: 'var(--primary-red)', fontWeight: '600', marginBottom: '20px', background: 'none', border: 'none', cursor: 'pointer', padding: 0, fontSize: '0.9rem' }}>Read More <i className="fas fa-arrow-right" style={{ fontSize: '0.8rem', marginLeft: '3px' }}></i></button>
                  <div className="reviewer">
                    <div>
                      <h4>{review.name}</h4>
                      <small style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>{review.location}</small>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* REVIEWS MODAL */}
      <AnimatePresence>
        {selectedReview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedReview(null)}
            style={{ position: 'fixed', inset: 0, zIndex: 99999, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '500px', width: '100%', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            >
              <button onClick={() => setSelectedReview(null)} style={{ position: 'absolute', top: '15px', right: '20px', background: 'rgba(0,0,0,0.05)', border: 'none', fontSize: '1.2rem', cursor: 'pointer', width: '35px', height: '35px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'var(--transition)' }} onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(218,37,29,0.1)'} onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}>
                <i className="fas fa-times" style={{ color: 'var(--text-dark)' }}></i>
              </button>
              <div className="stars" style={{ color: '#ffc107', marginBottom: '15px', fontSize: '1.3rem' }}>
                <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i>
              </div>
              <p style={{ fontStyle: 'italic', fontSize: '1.15rem', color: '#444', lineHeight: '1.8', marginBottom: '30px', position: 'relative', zIndex: 1 }}>
                <i className="fas fa-quote-left" style={{ position: 'absolute', top: '-15px', left: '-15px', fontSize: '3rem', color: 'rgba(0,0,0,0.03)', zIndex: -1 }}></i>
                {selectedReview.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <div style={{ width: '55px', height: '55px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-red), #ff6b6b)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(218,37,29,0.3)' }}>
                  {selectedReview.name.charAt(0)}
                </div>
                <div>
                  <h4 style={{ color: 'var(--dark-blue)', margin: 0, fontSize: '1.2rem', fontWeight: '700' }}>{selectedReview.name}</h4>
                  <small style={{ color: 'var(--text-muted)' }}>{selectedReview.location}</small>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="faq-section section-padding" aria-label="Frequently asked questions about packers and movers">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked <span>Questions</span></h2>
            <div className="underline"></div>
            <p>Common questions about packers and movers, house shifting &amp; transportation services</p>
          </div>
          <div className="faq-grid">
            {[
              {
                q: "What services does Siri Packers & Movers offer?",
                a: "We offer comprehensive services including household goods shifting, house shifting, local shifting in Hyderabad, interstate relocation, packing loading unloading unpacking, car & bike transportation, office relocation, and warehouse & storage services across India."
              },
              {
                q: "Why is Siri Packers considered the best packers and movers in Hyderabad?",
                a: "With 14+ years of experience, 10,000+ successful relocations, and a 99% customer satisfaction rate, Siri Packers & Movers is one of the most trusted and affordable packers and movers in Hyderabad. We are verified on Justdial, Sulekha, and Migrera."
              },
              {
                q: "How much does house shifting cost in Hyderabad?",
                a: "The cost depends on the volume of household goods, distance, and type of service. We offer transparent, affordable pricing with no hidden charges. Call +91 9948984598 or fill our form for a free, no-obligation quote."
              },
              {
                q: "Do you provide packing materials for household goods shifting?",
                a: "Yes! We use premium packing materials including bubble wrap, corrugated sheets, carton boxes, foam padding, and stretch film to ensure 100% safe packing, loading, unloading, and unpacking of all your household goods."
              },
              {
                q: "Which areas in Hyderabad do you serve?",
                a: "We serve all areas in Hyderabad including Mansoorabad, LB Nagar, Dilsukhnagar, Uppal, ECIL, Secunderabad, Kukatpally, Gachibowli, Kondapur, Madhapur, Miyapur, Begumpet, Ameerpet, and all other localities. We also provide interstate relocation across India."
              },
              {
                q: "Is my household goods safe during transportation?",
                a: "Absolutely! We use multi-layer professional packing materials, well-maintained vehicles, and a trained & experienced staff to ensure 100% safe transportation. Every item is carefully wrapped, padded, and secured for a completely damage-free house shifting experience."
              },
            ].map((item, idx) => (
              <div className="faq-item" key={idx} style={{ background: 'white', borderRadius: '12px', overflow: 'hidden', border: `1px solid ${openFaq === idx ? 'var(--primary-red)' : '#eef0f3'}`, boxShadow: openFaq === idx ? '0 4px 15px rgba(218,37,29,0.1)' : '0 2px 8px rgba(0,0,0,0.05)', transition: 'all 0.3s' }}>
                <div onClick={() => setOpenFaq(openFaq === idx ? null : idx)} style={{ padding: '18px 24px', cursor: 'pointer', fontWeight: '600', color: openFaq === idx ? 'var(--primary-red)' : 'var(--dark-blue)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span>{item.q}</span>
                  <motion.i animate={{ rotate: openFaq === idx ? 180 : 0 }} transition={{ duration: 0.3 }} className="fas fa-chevron-down" style={{ color: openFaq === idx ? 'var(--primary-red)' : 'var(--text-muted)' }}></motion.i>
                </div>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 24px 18px', color: 'var(--text-muted)', lineHeight: '1.7', borderTop: '1px solid #f0f0f0', paddingTop: '15px', fontSize: '0.95rem' }}>
                        <p>{item.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section" aria-label="Contact Siri Packers and Movers for house shifting">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Ready to Move? Get a Free Quote Today!</h2>
          <p>Trusted packers and movers in Hyderabad for household goods shifting, packing loading unloading &amp; transportation. Call now for same-day service!</p>
          <div className="cta-buttons">
            <a href="tel:+919948984598" className="btn btn-primary" id="cta-call-btn">
              <i className="fas fa-phone-alt"></i> Call {PRIMARY_PHONE}
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUM}?text=Hi Siri Packers, I need a quote for house shifting`} className="btn btn-whatsapp" target="_blank" rel="noreferrer" id="cta-whatsapp-btn">
              <i className="fab fa-whatsapp"></i> WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ===== CONTACT / LOCATION ===== */}
      <section id="contact" className="section-padding" aria-label="Contact Siri Packers and Movers in Hyderabad">
        <div className="container">
          <div className="section-title">
            <h2>Contact <span>Us</span></h2>
            <div className="underline"></div>
            <p>Get a free quote for house shifting, packing loading unloading &amp; transportation services!</p>
          </div>
          <div className="contact-container">
            {/* Left Side: Form and Map */}
            <div className="contact-left-panel" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div className="contact-form shadow-card" style={{ padding: '35px', borderRadius: '15px', borderTop: '5px solid var(--primary-red)' }}>
                <BookingForm title="Get a Free Quote for Your Move" />
              </div>
              <div className="map-container shadow-card" style={{ padding: '10px', borderRadius: '15px', marginTop: '0' }}>
                <iframe
                  src="https://maps.google.com/maps?q=17%C2%B020'57.7%22N%2078%C2%B034'05.7%22E&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="300"
                  style={{ border: 0, borderRadius: '10px' }}
                  allowFullScreen=""
                  loading="lazy"
                  title="Siri Packers and Movers office location in Mansoorabad Hyderabad"
                ></iframe>
              </div>
            </div>

            {/* Right Side: Contact Info */}
            <div className="contact-info-panel" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="https://www.google.com/maps/place/17%C2%B020'57.7%22N+78%C2%B034'05.7%22E" target="_blank" rel="noreferrer" className="info-card" style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: 'var(--shadow)', borderLeft: '4px solid var(--primary-red)', marginBottom: '0', alignItems: 'center', transition: 'all 0.3s', cursor: 'pointer', textDecoration: 'none', display: 'flex' }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)';}}>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)', fontWeight: '700' }}>Our Office</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>Mansoorabad, Hyderabad, Telangana - 500068</p>
                </div>
              </a>

              <div className="info-card" style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: 'var(--shadow)', borderLeft: '4px solid var(--primary-red)', marginBottom: '0', alignItems: 'center', transition: 'transform 0.3s', display: 'flex' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                <i className="fas fa-phone-alt"></i>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)', fontWeight: '700' }}>Call Us</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0 }}>
                    <a href={`tel:${PRIMARY_PHONE.replace(/ /g, '')}`} style={{ fontWeight: '600', color: 'var(--dark-blue)', textDecoration: 'none' }}>{PRIMARY_PHONE}</a><br/>
                    <a href={`tel:${SECONDARY_PHONE.replace(/ /g, '')}`} style={{ fontWeight: '600', color: 'var(--dark-blue)', textDecoration: 'none' }}>{SECONDARY_PHONE}</a><br/>
                    <a href={`tel:${TERTIARY_PHONE.replace(/ /g, '')}`} style={{ fontWeight: '600', color: 'var(--dark-blue)', textDecoration: 'none' }}>{TERTIARY_PHONE}</a>
                  </p>
                </div>
              </div>

              <a href={`mailto:${EMAIL}`} className="info-card" style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: 'var(--shadow)', borderLeft: '4px solid var(--primary-red)', marginBottom: '0', alignItems: 'center', transition: 'all 0.3s', cursor: 'pointer', textDecoration: 'none', display: 'flex' }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)';}}>
                <i className="fas fa-envelope"></i>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)', fontWeight: '700' }}>Email Us</h4>
                  <p style={{ color: 'var(--text-muted)', margin: 0, fontWeight: '600', color: 'var(--dark-blue)' }}>{EMAIL}</p>
                </div>
              </a>

              <a href={`https://wa.me/${WHATSAPP_NUM}?text=Hi Siri Packers, I need a quote for house shifting`} target="_blank" rel="noreferrer" className="info-card" style={{ background: 'white', padding: '25px', borderRadius: '15px', boxShadow: 'var(--shadow)', borderLeft: '4px solid #25d366', marginBottom: '0', alignItems: 'center', transition: 'all 0.3s', cursor: 'pointer', textDecoration: 'none', display: 'flex' }} onMouseEnter={(e) => {e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 10px 25px rgba(37, 211, 102, 0.2)';}} onMouseLeave={(e) => {e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow)';}}>
                <i className="fab fa-whatsapp" style={{ background: '#25d366', boxShadow: '0 4px 10px rgba(37, 211, 102, 0.3)' }}></i>
                <div>
                  <h4 style={{ fontSize: '1.2rem', marginBottom: '5px', color: 'var(--dark-blue)', fontWeight: '700' }}>WhatsApp</h4>
                  <p style={{ color: '#25d366', margin: 0, fontWeight: '600' }}>{PRIMARY_PHONE}</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
