import React, { useState } from 'react';
import Concierge from './components/Concierge';
import MapView from './components/MapView';
import { NEIGHBORHOOD_DATA, PROPERTY_STATS } from './constants';
import { LocationCategory } from './types';

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<LocationCategory>(LocationCategory.RESTAURANTS);

  /**
   * Verified Image Mapping (based on property 1496324901478313927)
   */
  const images = {
    // Core areas
    livingRoom: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/5b7c2852-2205-4962-8d71-7afa16eff1b0.jpeg?im_w=1200", 
    kitchen: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/17fb1c41-145b-41a0-9f79-8e4d618cc876.jpeg?im_w=1200",
    diningMezzanine: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/334135a3-0c52-4f87-a209-909ab9a69ccf.jpeg?im_w=1200", 
    facade: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/c86b8943-2106-4429-a2de-3006ac9f69a0.jpeg?im_w=1200",
    tvLounge: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/7adeb2f3-4244-4d44-90d1-2215a005714f.jpeg?im_w=1440",
    
    // Labels
    streetLevelDining: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/28ddd92d-2849-4775-9b13-03848aa66bc3.jpeg?im_w=1440",
    mezzanineDiningSpace: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/30fce44f-ad84-4dff-9c85-97b974bff125.jpeg?im_w=1440",
    
    // Bedroom & Plan Images
    floorPlan: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/ccfbd3c6-cbef-4228-9351-e838d12b0f58.jpeg?im_w=1440",
    bedroom2: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/30b097e6-4b0b-445c-8aad-269b2a37554c.jpeg?im_w=1440",
    bedroom1Primary: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/87274540-4450-401b-8f27-73c3a37363af.jpeg?im_w=1440",
    bedroom1Alt: "https://a0.muscache.com/im/pictures/hosting/Hosting-1496324901478313927/original/f2e1a684-7ac8-400d-a989-14202b0c512b.jpeg?im_w=1440"
  };

  const amenities = [
    { cat: "Bathroom", items: ["Bath", "Hot water"] },
    { cat: "Bedroom & Laundry", items: ["Washer/dryer", "Bed linen", "Cotton linen", "Wardrobes"] },
    { cat: "Entertainment", items: ["TV"] },
    { cat: "Heating & Cooling", items: ["Central heating", "Radiant heating"] },
    { cat: "Home Safety", items: ["Exterior security cameras", "Smoke alarm", "Carbon monoxide alarm", "Fire extinguisher", "First aid kit"] },
    { cat: "Internet & Office", items: ["High-speed Wifi"] },
    { cat: "Kitchen & Dining", items: ["Full Kitchen", "Fridge", "Microwave", "Cooking basics (Pots/Pans/Oil)", "Dishes & Cutlery", "Freezer", "Dishwasher", "Gas cooker", "Oven", "Kettle", "Wine glasses", "Toaster", "Dining table", "Coffee"] },
    { cat: "Location Features", items: ["Private entrance", "Separate building entrance"] },
    { cat: "Services", items: ["Self check-in", "Lockbox"] }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 selection:bg-indigo-100 selection:text-indigo-900 font-sans">
      {/* Elegant Fixed Nav */}
      <header className="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-serif font-bold">S</div>
            <span className="text-xl font-serif font-bold tracking-tight text-slate-900 group-hover:text-indigo-600 transition-colors">Soho Escape</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-[13px] uppercase tracking-widest font-semibold text-slate-500">
            <a href="#space" className="hover:text-slate-900 transition-colors">The Loft</a>
            <a href="#gallery" className="hover:text-slate-900 transition-colors">Gallery</a>
            <a href="#bedrooms" className="hover:text-slate-900 transition-colors">Bedrooms</a>
            <a href="#amenities" className="hover:text-slate-900 transition-colors">Amenities</a>
            <a href="#location" className="hover:text-slate-900 transition-colors">Location</a>
            <a href="#book" className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200">Book Directly</a>
          </nav>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-[10000ms] scale-100 hover:scale-105"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${images.livingRoom})` }}
        ></div>
        <div className="relative z-10 text-center px-6 max-w-5xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="mb-8 inline-flex items-center space-x-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[11px] uppercase tracking-[0.2em] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span>W1T 3AE • Premium Direct Booking</span>
          </div>
          <h1 className="text-6xl md:text-8xl lg:text-9xl text-white font-serif mb-8 leading-[0.9] tracking-tighter">
            Central London <br /> Designer <br /> Loft
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            A luxurious large duplex apartment within the beating heart of central London.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#book" className="w-full sm:w-auto px-10 py-5 bg-white text-slate-900 font-bold rounded-full hover:scale-105 transition-all text-sm uppercase tracking-widest shadow-2xl">
              Direct Inquiry
            </a>
            <a href="#space" className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/40 text-white font-bold rounded-full hover:bg-white/10 transition-all text-sm uppercase tracking-widest">
              The Experience
            </a>
          </div>
        </div>
      </section>

      {/* Property Introduction */}
      <section id="space" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span className="text-indigo-600 font-bold uppercase tracking-widest text-xs mb-4 block">The Loft Experience</span>
              <h2 className="text-5xl md:text-6xl font-serif text-slate-900 mb-8 leading-tight">Spatial <br />Sophistication</h2>
              <p className="text-xl text-slate-500 leading-relaxed mb-10 font-light">
                A large loft with double height ceilings providing a fantastic entertaining space. The residence flows from a social lounge into an <span className="text-slate-900 font-medium">elevated Kitchen and dining area</span> on a mezzanine level. Large windows frame the classic Fitzrovia facade, while the interior remains a quiet, sophisticated sanctuary.
              </p>
              <p className="text-lg text-slate-500 leading-relaxed mb-10 font-light italic">
                Downstairs you can find two double bedrooms and two bathrooms. The sofa in the living area converts into a double bed, meaning the apartment can comfortably <span className="text-slate-900 font-medium">sleep 6 people</span>.
              </p>
              <div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-10">
                {PROPERTY_STATS.map((stat, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-slate-400 text-[10px] uppercase tracking-widest font-bold mb-1">{stat.label}</span>
                    <span className="text-2xl font-serif font-bold text-slate-900">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[2.5rem] overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.2)] aspect-[4/5]">
                <img src={images.livingRoom} className="w-full h-full object-cover" alt="Living Room & Stairs" />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-[2rem] overflow-hidden border-8 border-white shadow-2xl hidden md:block">
                <img src={images.diningMezzanine} className="w-full h-full object-cover" alt="Mezzanine View" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Bento Gallery (Social Areas) */}
      <section id="gallery" className="py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-serif text-slate-900 mb-6">Social Spaces</h2>
              <p className="text-slate-500 text-lg">A curated journey through the social levels of the duplex.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[300px]">
            {/* Feature: Living Room (Image 4) */}
            <div className="md:col-span-2 md:row-span-2 rounded-[2rem] overflow-hidden group relative shadow-lg">
              <img src={images.livingRoom} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Spiral Staircase Lounge" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Feature Spiral Staircase & Lounge
              </div>
            </div>
            {/* Mezzanine (Image 2) */}
            <div className="md:col-span-2 rounded-[2rem] overflow-hidden group relative shadow-lg">
              <img src={images.diningMezzanine} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Mezzanine Dining" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Mezzanine Landing & Dining
              </div>
            </div>
            {/* Kitchen (Image 1) */}
            <div className="rounded-[2rem] overflow-hidden group relative shadow-lg">
              <img src={images.kitchen} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Modern Kitchen" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Modern Chef's Kitchen
              </div>
            </div>
            {/* TV Lounge (Image 5) */}
            <div className="rounded-[2rem] overflow-hidden group relative shadow-lg">
              <img src={images.tvLounge} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="TV Lounge" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Media Lounge
              </div>
            </div>
            {/* Street Level Dining */}
            <div className="md:col-span-2 rounded-[2rem] overflow-hidden group relative shadow-lg">
              <img src={images.streetLevelDining} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Street Level Dining" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Street Level Dining Area
              </div>
            </div>
            {/* Facade (Image 3) */}
            <div className="md:col-span-1 rounded-[2rem] overflow-hidden group relative shadow-lg">
              <img src={images.facade} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Facade" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Building Facade
              </div>
            </div>
            {/* Mezzanine Dining Space */}
            <div className="md:col-span-1 rounded-[2rem] overflow-hidden group relative shadow-lg">
              <img src={images.mezzanineDiningSpace} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Mezzanine Dining Space" />
              <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                Mezzanine Dining Space
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floor Plan & Bedrooms */}
      <section id="bedrooms" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-start">
            <div className="space-y-12">
              <div>
                <h2 className="text-5xl font-serif text-slate-900 mb-6">Plan & Sanctuary</h2>
                <p className="text-slate-500 text-lg leading-relaxed">
                  The residence is split across two floors. Downstairs you can find two double bedrooms and two bathrooms, providing privacy and tranquility.
                </p>
              </div>
              <div className="rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100">
                <img src={images.floorPlan} className="w-full h-auto" alt="Property Floor Plan" />
                <div className="p-8 bg-slate-50">
                  <span className="text-[10px] uppercase tracking-widest font-bold text-slate-400">Layout Detail</span>
                  <h4 className="text-xl font-serif text-slate-900 mt-2">Architectural Blueprint</h4>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <div className="rounded-[2.5rem] overflow-hidden shadow-xl group relative h-[500px]">
                <img src={images.bedroom1Primary} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Primary Bedroom" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-10">
                  <div className="text-white">
                    <span className="text-[10px] uppercase tracking-widest font-bold opacity-80 mb-2 block">The Sanctuary</span>
                    <h3 className="text-3xl font-serif">Bedroom 1 (Master Suite)</h3>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-[300px] relative group">
                  <img src={images.bedroom1Alt} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Bedroom 1 detail" />
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Suite Detail
                  </div>
                </div>
                <div className="rounded-[2rem] overflow-hidden shadow-lg h-[300px] relative group">
                  <img src={images.bedroom2} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt="Bedroom 2" />
                  <div className="absolute bottom-6 left-6 px-4 py-2 bg-white/90 backdrop-blur rounded-xl text-[10px] font-bold uppercase tracking-widest shadow-sm">
                    Bedroom 2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Amenities Section */}
      <section id="amenities" className="py-32 bg-[#fafafa] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-serif text-slate-900 mb-6">What this place offers</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A comprehensive list of high-end amenities provided for your stay.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-12">
            {amenities.map((group, i) => (
              <div key={i}>
                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-indigo-600 mb-6 flex items-center">
                  <span className="w-6 h-[1px] bg-indigo-200 mr-3"></span>
                  {group.cat}
                </h4>
                <ul className="space-y-4">
                  {group.items.map((item, j) => (
                    <li key={j} className="flex items-center text-slate-600 text-sm">
                      <svg className="w-4 h-4 mr-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            {/* Not Included Section */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400 mb-6 flex items-center">
                <span className="w-6 h-[1px] bg-slate-200 mr-3"></span>
                Not Included
              </h4>
              <ul className="space-y-4 opacity-50">
                <li className="flex items-center text-slate-500 text-sm line-through decoration-slate-300">
                   <svg className="w-4 h-4 mr-3 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                   Air conditioning
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Location Emphasis */}
      <section id="location" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none -translate-y-1/2 translate-x-1/4">
          <span className="text-[400px] font-serif font-bold leading-none select-none italic">W1T</span>
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-6xl font-serif mb-8 leading-tight">Central London: <br />The Soul of the City</h2>
              <p className="text-xl text-slate-400 leading-relaxed font-light mb-12">
                Located at <span className="text-white font-medium">W1T 3AE</span>, you are minutes from the Michelin-starred haunts of Charlotte Street and the world-class shopping of Marylebone. This is London's most sophisticated district.
              </p>
              <div className="space-y-8">
                <div className="flex items-center space-x-6">
                   <div className="text-4xl font-serif text-indigo-400">06</div>
                   <div className="text-sm uppercase tracking-[0.2em] font-bold text-slate-500">Mins walk to Oxford Circus</div>
                </div>
                <div className="flex items-center space-x-6">
                   <div className="text-4xl font-serif text-indigo-400">10</div>
                   <div className="text-sm uppercase tracking-[0.2em] font-bold text-slate-500">Mins walk to Liberty London</div>
                </div>
                <div className="flex items-center space-x-6">
                   <div className="text-4xl font-serif text-indigo-400">05</div>
                   <div className="text-sm uppercase tracking-[0.2em] font-bold text-slate-500">Mins walk to Charlotte St Dining</div>
                </div>
              </div>
            </div>
            <div className="rounded-[3rem] overflow-hidden border border-white/10 shadow-3xl h-[600px]">
              <MapView />
            </div>
          </div>
        </div>
      </section>

      {/* Neighborhood Guide */}
      <section id="neighborhood" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-5xl font-serif text-slate-900 mb-6">The Local Edit</h2>
              <p className="text-slate-500 text-lg">Hand-picked spots within walking distance of Soho Escape.</p>
            </div>
            <div className="flex overflow-x-auto pb-4 md:pb-0 scrollbar-hide space-x-2">
              {Object.values(LocationCategory).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all whitespace-nowrap ${
                    activeCategory === cat 
                    ? 'bg-slate-900 text-white shadow-xl scale-105' 
                    : 'bg-slate-50 text-slate-400 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {NEIGHBORHOOD_DATA[activeCategory].map((item, idx) => (
              <div key={idx} className="group bg-white p-8 rounded-3xl border border-slate-100 hover:border-indigo-100 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500">
                <div className="text-[10px] text-indigo-600 font-bold uppercase tracking-[0.2em] mb-4">{item.distance}</div>
                <h3 className="text-2xl font-serif text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">{item.name}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{item.description}</p>
                <div className="pt-6 border-t border-slate-50 flex items-center text-slate-300 font-bold text-[10px] uppercase tracking-widest">
                  Explore Spot
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Booking Directives */}
      <section id="book" className="py-32 bg-[#fafafa]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white p-12 md:p-16 rounded-[4rem] shadow-2xl border border-slate-100 text-center">
             <span className="inline-block px-4 py-1.5 bg-green-50 text-green-700 text-[10px] font-bold uppercase tracking-[0.2em] rounded-full mb-8">Exclusive Direct Booking</span>
             <h2 className="text-5xl font-serif text-slate-900 mb-8 leading-tight">Secure Your Private Stay</h2>
             <p className="text-slate-500 mb-10 text-lg">Inquire directly for bespoke rates and availability for your London getaway.</p>
             <button className="bg-slate-900 text-white px-12 py-5 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-indigo-600 transition-all shadow-xl shadow-slate-200">
               Request Booking
             </button>
             <p className="mt-10 text-slate-400 text-sm">Experience the architectural beauty of our private loft directly.</p>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="text-center md:text-left">
              <div className="text-2xl font-serif font-bold text-slate-900 mb-2">Soho Escape</div>
              <p className="text-sm text-slate-400 font-light">Architecturally unique living in Central London.</p>
            </div>
            <div className="flex space-x-12 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-500">
              <a href="#space" className="hover:text-slate-900 transition-colors">The Loft</a>
              <a href="#location" className="hover:text-slate-900 transition-colors">Location</a>
              <a href="#book" className="hover:text-slate-900 transition-colors">Booking</a>
            </div>
          </div>
          <div className="mt-20 pt-10 border-t border-slate-50 text-center text-[10px] text-slate-300 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Soho Escape Stay. Designed with architectural intent.
          </div>
        </div>
      </footer>

      {/* AI Concierge */}
      <Concierge />
    </div>
  );
};

export default App;