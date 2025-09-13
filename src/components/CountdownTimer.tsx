import { useState, useEffect } from "react";

// Import your video file from src/assets (adjust filename as needed)
import promoVideo from "../assets/WhatsApp Video 2025-09-09 at 21.35.28_d4e1c342.mp4";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 47,
    hours: 12,
    minutes: 34,
    seconds: 53
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-navy-header bg text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Pre-Launch Investment Opportunity<br />
          <span className="text-golden-accent">Secure Tomorrow's Prices Today</span>
        </h2>
        
        <p className="text-xl mb-8 text-gray-200">
          Only <span className="text-golden-accent font-bold">47 plots left</span> at pre-launch prices!
        </p>

        <div className="flex justify-center gap-8 mb-12">
          <div className="text-center">
            <div className="bg-white text-navy-header rounded-lg p-6 text-4xl font-bold w-20 h-20 flex items-center justify-center">
              {timeLeft.days}
            </div>
            <div className="mt-2 text-sm">days</div>
          </div>
          <div className="text-center">
            <div className="bg-white text-navy-header rounded-lg p-6 text-4xl font-bold w-20 h-20 flex items-center justify-center">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <div className="mt-2 text-sm">hours</div>
          </div>
          <div className="text-center">
            <div className="bg-white text-navy-header rounded-lg p-6 text-4xl font-bold w-20 h-20 flex items-center justify-center">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <div className="mt-2 text-sm">minutes</div>
          </div>
          <div className="text-center">
            <div className="bg-white text-navy-header rounded-lg p-6 text-4xl font-bold w-20 h-20 flex items-center justify-center">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
            <div className="mt-2 text-sm">seconds</div>
          </div>
        </div>

        {/* Video Section - placed just after the headline and countdown */}
        <div className="my-12 flex justify-center">
          <video
            src={promoVideo}
            controls
            autoPlay
            muted
            loop
          className="rounded-lg shadow-lg w-full max-w-5xl bg-black"


            poster={new URL("../assets/kunjwal-promo-poster.jpg", import.meta.url).href}
          >
            Your browser does not support the video tag.
          </video>
        </div>

        <p className="text-lg max-w-4xl mx-auto text-gray-200">
          Limited pre-launch opportunity with prices increasing 20-25% after public launch. Only 47 premier plots available at current rates with world-class amenities and strategic location advantages.
        </p>
      </div>
    </section>
  );
};

export default CountdownTimer;