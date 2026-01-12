import React, { useEffect } from 'react';

const AirbnbWidget: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.airbnb.co.uk/embeddable/airbnb_jssdk";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      const scripts = document.querySelectorAll('script[src="https://www.airbnb.co.uk/embeddable/airbnb_jssdk"]');
      scripts.forEach(s => s.remove());
    };
  }, []);

  return (
    <div className="flex flex-col items-center py-6 w-full">
      <div 
        className="airbnb-embed-frame" 
        data-id="1496324901478313927" 
        data-view="home" 
        data-hide-price="true" 
        style={{ width: '100%', maxWidth: '100%', minHeight: '380px', margin: 'auto' }}
      >
        <a href="https://www.airbnb.co.uk/rooms/1496324901478313927?check_in=2026-01-08&amp;check_out=2026-01-11&amp;guests=1&amp;adults=4&amp;s=66&amp;source=embed_widget">
          View on Airbnb
        </a>
      </div>
    </div>
  );
};

export default AirbnbWidget;