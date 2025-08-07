'use client'

import Navbar from './components/navigation';
import HeroSection from './components/hero';
import WhyChoose from './components/choice';
import SlideShowing from './components/slideshowing';
import PayrollTabs from './components/businessdrive';
import StatsSection from './components/status';
import ContactSection from './components/contact';
import Clients from './components/clients';
import AboutSection from './components/about';

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="hero mt-[80px]">
        <HeroSection />
      </div>

      {/* Why Choose */}
      <div className="hero mt-[80px]">
        <WhyChoose />
      </div>

      {/* Slide showing */}
      <div className="hero mt-[80px]">
        <SlideShowing />
      </div>

      {/* Payroll Tabs */}
      <div className="hero mt-[80px]">
        <PayrollTabs />
      </div>

      {/* About Us Section */}
      <div>
        <AboutSection />
      </div>
 

      {/* Clients */}
      <div>
        <Clients />
      </div>

      {/* Stats */}
      <div >
        <StatsSection />
      </div>

      {/* Contact */}
      <div id="contact" >
        <ContactSection />
      </div>
    </>
  );
}
