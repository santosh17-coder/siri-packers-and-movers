import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollToTop from './components/ScrollToTop.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';

function App() {
  // Splash phases: 'pulling' -> 'resting' -> 'exit' -> 'done'
  const [splashPhase, setSplashPhase] = useState('pulling');

  useEffect(() => {
    // Phase 1: Truck pulls text from left to center (0 → 0.8s)
    const t1 = setTimeout(() => setSplashPhase('resting'), 800);
    // Phase 2: Rest at center — brand display (0.8s → 2.2s)
    const t2 = setTimeout(() => setSplashPhase('exit'), 2200);
    // Phase 3: Truck carries text off screen to right (2.2s → 3.2s)
    const t3 = setTimeout(() => setSplashPhase('done'), 3200);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  const primaryPhone = import.meta.env.PRIMARY_PHONE || "+91 9948984598";
  const whatsappNum = import.meta.env.WHATSAPP_NUM || "919948984598";
  const showSplash = splashPhase !== 'done';

  return (
    <Router>
      <ScrollToTop />

      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[999999] bg-gradient-to-br from-[#070b14] via-[#0f1a2e] to-[#17243b] flex items-center justify-center overflow-hidden"
          >
            {/* Animated road at the bottom */}
            <div className="absolute left-0 w-full h-[clamp(40px,8vw,60px)] bg-[#1a1a1a] border-y-2 border-[#333]" style={{ bottom: 'calc(50% - clamp(20px,4vw,30px))' }}>
              <div className="road-dashes animate-road-scroll absolute top-1/2 left-0 w-[200%] h-1 -translate-y-1/2"></div>
            </div>

            {/* The entire payload: truck + rope + text — moves together */}
            <motion.div
              className="flex items-end absolute z-2 w-max"
              style={{ bottom: 'calc(50% + clamp(10px,2vw,24px))' }}
              initial={{ x: '-110%' }}
              animate={
                splashPhase === 'exit'
                  ? { x: '110vw' }
                  : { x: '-5%' }
              }
              transition={
                splashPhase === 'exit'
                  ? { duration: 1.0, ease: 'easeIn' }
                  : { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }
              }
            >
              {/* ===== THE TRUCK ===== */}
              <div className="relative w-[clamp(110px,22vw,240px)] h-[clamp(70px,14vw,150px)] shrink-0">
                {/* Truck body */}
                <div className="absolute left-0 bottom-[clamp(12px,2.5vw,22px)] w-[62%] h-[65%] bg-gradient-to-b from-primary-red to-[#b91c14] rounded-t-md flex items-center justify-center shadow-[0_4px_20px_rgba(218,37,29,0.5),inset_0_2px_0_rgba(255,255,255,0.2)] border border-white/15">
                  <div className="flex flex-col items-center leading-none">
                    <span className="text-white font-[Poppins] font-black text-[clamp(0.7rem,2vw,1.4rem)] tracking-[2px] [text-shadow:0_2px_8px_rgba(0,0,0,0.5)]">SIRI</span>
                    <span className="text-white/85 font-[Poppins] font-normal text-[clamp(0.35rem,1vw,0.65rem)] tracking-[3px] uppercase">Packers</span>
                  </div>
                </div>
                {/* Truck cabin */}
                <div className="absolute right-0 bottom-[clamp(12px,2.5vw,22px)] w-[34%] h-[50%] bg-gradient-to-b from-dark-blue to-dark-blue-deep rounded-tl rounded-tr-xl shadow-[0_4px_15px_rgba(0,0,0,0.4)]">
                  <div className="absolute top-[12%] right-[10%] w-[55%] h-[40%] bg-gradient-to-br from-[#87ceeb] to-[#b0e2ff] rounded-tl rounded-tr-lg rounded-bl rounded-br border-2 border-white/30 shadow-[inset_0_0_6px_rgba(135,206,235,0.5)]"></div>
                </div>
                {/* Wheels */}
                <motion.div
                  className="truck-wheel-hub absolute bottom-[clamp(3px,0.8vw,6px)] left-[8%] w-[clamp(16px,3vw,32px)] h-[clamp(16px,3vw,32px)] bg-[radial-gradient(circle,#555_40%,#222_42%,#333_60%,#111_62%,#444_100%)] rounded-full border-[2px] md:border-[3px] border-[#666] shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                  animate={{ rotate: splashPhase === 'resting' ? 0 : 3600 }}
                  transition={{ duration: splashPhase === 'exit' ? 1.0 : 0.8, ease: 'linear' }}
                />
                <motion.div
                  className="truck-wheel-hub absolute bottom-[clamp(3px,0.8vw,6px)] right-[8%] w-[clamp(16px,3vw,32px)] h-[clamp(16px,3vw,32px)] bg-[radial-gradient(circle,#555_40%,#222_42%,#333_60%,#111_62%,#444_100%)] rounded-full border-[2px] md:border-[3px] border-[#666] shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
                  animate={{ rotate: splashPhase === 'resting' ? 0 : 3600 }}
                  transition={{ duration: splashPhase === 'exit' ? 1.0 : 0.8, ease: 'linear' }}
                />
                {/* Exhaust smoke */}
                {splashPhase !== 'resting' && (
                  <div className="absolute -left-[10px] bottom-[25px]">
                    <span className="block w-2 h-2 bg-gray-300/40 rounded-full absolute animate-smoke"></span>
                    <span className="block w-2 h-2 bg-gray-300/40 rounded-full absolute -left-[4px] animate-smoke-d1"></span>
                    <span className="block w-2 h-2 bg-gray-300/40 rounded-full absolute -left-[8px] animate-smoke-d2"></span>
                  </div>
                )}
              </div>

              {/* ===== THE ROPE ===== */}
              <div className="shrink-0 flex items-center -mx-[5px] mb-[clamp(15px,3vw,25px)]">
                <svg width="clamp(40px, 6vw, 80px)" height="30" viewBox="0 0 80 30" style={{ width: 'clamp(40px, 6vw, 80px)' }}>
                  <motion.path
                    d="M0,15 Q20,0 40,15 Q60,30 80,15"
                    fill="none"
                    stroke="#ffc107"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                </svg>
              </div>

              {/* ===== BRAND TEXT (tied to the truck) ===== */}
              <motion.div
                className="flex flex-col items-start pl-2.5 mb-2.5"
                initial={{ opacity: 0, scale: 0.7 }}
                animate={
                  splashPhase === 'pulling'
                    ? { opacity: 1, scale: 1 }
                    : splashPhase === 'resting'
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 1, scale: 1 }
                }
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <div className="leading-none">
                  <span className="font-[Poppins] font-black text-[clamp(1.4rem,6vw,5rem)] text-primary-red [text-shadow:0_0_30px_rgba(218,37,29,0.6),0_4px_15px_rgba(0,0,0,0.5)] tracking-[2px] md:tracking-[4px]">SIRI</span>
                </div>
                <div className="leading-none mt-1">
                  <span className="font-[Poppins] font-light text-[clamp(0.65rem,2.5vw,2rem)] text-white tracking-[3px] md:tracking-[6px] uppercase">Packers & Movers</span>
                </div>
                <div className="mt-1 md:mt-2">
                  <span className="text-[clamp(0.45rem,1.1vw,0.85rem)] text-gold tracking-[1.5px] md:tracking-[3px] font-medium [text-shadow:0_0_10px_rgba(255,193,7,0.3)]">Safe • Reliable • Trusted Since 2010</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Loading bar at bottom (during 'resting' phase) */}
            <motion.div
              className="absolute bottom-[clamp(50px,10vw,80px)] left-1/2 -translate-x-1/2 w-[min(300px,80vw)] h-1 bg-white/10 rounded overflow-hidden z-5"
              initial={{ opacity: 0 }}
              animate={splashPhase === 'resting' ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.div
                className="w-full h-full bg-gradient-to-r from-primary-red to-gold rounded origin-left"
                initial={{ scaleX: 0 }}
                animate={splashPhase === 'resting' || splashPhase === 'exit' ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 1.4, ease: 'linear' }}
              />
              <span className="absolute top-3 left-1/2 -translate-x-1/2 text-white/50 text-[clamp(10px,2vw,12px)] tracking-[2px] whitespace-nowrap">Loading your move...</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="app-wrapper"
        >
          <Header />
          <main>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />

              </Routes>
            </AnimatePresence>
          </main>
          <Footer />

          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.15, rotate: 10 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            href={`tel:${primaryPhone.replace(/ /g, '')}`}
            className="fixed bottom-[110px] right-[30px] bg-dark-blue text-white w-[65px] h-[65px] rounded-full flex justify-center items-center text-[1.8rem] shadow-[0_6px_15px_rgba(28,53,94,0.4)] z-[1000] transition-all duration-300 animate-pulse-blue hover:scale-110 hover:bg-primary-red hover:!animate-none"
            aria-label="Contact Us"
          >
            <i className="fas fa-phone-alt"></i>
          </motion.a>

          <motion.a
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.15, rotate: -10 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200, delay: 0.1 }}
            href={`https://wa.me/${whatsappNum.replace(/["';]/g, '').trim()}?text=Hi Siri Packers, I want to know more about your services`}
            className="fixed bottom-[30px] right-[30px] bg-whatsapp text-white w-[65px] h-[65px] rounded-full flex justify-center items-center text-[2.2rem] shadow-[0_6px_15px_rgba(37,211,102,0.4)] z-[1000] transition-all duration-300 animate-pulse-green hover:scale-110 hover:bg-whatsapp-dark hover:!animate-none"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-whatsapp"></i>
          </motion.a>
        </motion.div>
      )}
    </Router>
  );
}

export default App;
