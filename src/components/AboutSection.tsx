import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Shield, Building, TrendingUp, Users } from "lucide-react";

const AboutSection = () => {
  const plannedFeatures = [
    "Wide and well-paved roads",
    "Underground sewerage and water systems",
    "Reliable electricity supply",
    "Landscaped parks and green areas",
    "Grand mosques for community worship",
    "Educational institutions",
    "Designated graveyard",
    "Modern commercial plazas",
    "Fully-equipped community center and health club"
  ];

  return (
    <section id="about" className="py-20 bg-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-golden-accent font-semibold text-lg mb-4">DISCOVER KUNJWAL CITY</div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            A Vision of Modern Living
          </h2>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 mb-6 font-semibold">
            Kunjwal City Gujrat is a premium, master-planned residential community, strategically located at one of the most accessible and desirable locations in Gujrat, Punjab. Developed across 198.7 kanals, this gated community is designed to offer a modern lifestyle in a secure and serene environment.
          </p>
          <div className="mx-auto max-w-xl flex items-center gap-4 bg-white rounded-lg p-4 shadow-sm mb-6">
            <img src={new URL("../assets/m4.jpg", import.meta.url).href} alt="Development update" className="w-16 h-16 object-cover rounded" />
            <p className="text-sm text-gray-700 text-left">
              “We’re committed to timely delivery with uncompromised quality across every phase of development.”
              <br /><span className="text-xs text-gray-500">— Kunjwal City Development Team</span>
            </p>
          </div>
          <h3 className="text-xl font-semibold text-text-dark mb-3">
            Residential & Commercial Opportunities
          </h3>
          <p className="text-lg text-gray-600 mb-2">
            Kunjwal City offers a diverse range of plot sizes to suit every need:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-4 text-left inline-block">
            <li><span className="font-semibold">Residential plots:</span> 3 Marla to 13 Marla</li>
            <li><span className="font-semibold">Commercial plots:</span> 4 Marla to 8 Marla</li>
          </ul>
          <p className="text-lg text-gray-600 mb-8">
            Whether you're planning to build a home or grow your business, Kunjwal City provides the perfect platform for investment and living.
          </p>
        </div>

        <div className="max-w-4xl mx-auto text-center mb-12">
          <h3 className="text-xl font-semibold text-text-dark mb-3">
            Planned with Purpose, Built for Comfort
          </h3>
          <p className="text-lg text-gray-600 mb-4">
            At the core of Kunjwal City’s planning is a commitment to quality infrastructure and essential urban amenities. 
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 text-left inline-block">
            {plannedFeatures.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button 
            size="lg"
            className="bg-golden-accent hover:bg-golden-hover text-white font-semibold px-8 py-4"
          >
            Reserve Your Plot Today
          </Button>
        </div>

        <div className="mt-16 text-center">
          <blockquote className="text-2xl font-light text-gray-700 italic max-w-3xl mx-auto">
            "Every aspect of Kunjwal City has been meticulously planned to deliver lifestyle excellence and robust investment returns."
          </blockquote>
          <p className="text-golden-accent font-semibold mt-4">— Kunjwal City Development Team</p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;