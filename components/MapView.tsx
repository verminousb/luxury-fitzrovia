import React from 'react';

const MapView: React.FC = () => {
  // W1T 3AE center coordinates
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.74836691462!2d-0.14131562337910116!3d51.52062537181514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ad60a221f73%3A0xe54955a1532f30b2!2sLondon%20W1T%203AE!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk";

  return (
    <div className="relative w-full h-full overflow-hidden">
      <iframe
        title="W1T 3AE Map"
        src={mapUrl}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="filter grayscale-[0.2] contrast-[1.1]"
      ></iframe>
      
      {/* Interactive Legend */}
      <div className="absolute top-6 right-6 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 max-w-[200px] hidden sm:block">
        <div className="w-10 h-10 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mb-4 shadow-lg shadow-indigo-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </div>
        <h5 className="text-xs font-bold uppercase tracking-widest text-slate-900 mb-2">Prime Address</h5>
        <p className="text-[11px] text-slate-500 leading-relaxed font-medium">Fitzrovia W1T 3AE. The absolute center of London's social life.</p>
      </div>
    </div>
  );
};

export default MapView;