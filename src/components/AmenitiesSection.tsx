import { Shield, Users, ShoppingBag, Activity, Landmark } from "lucide-react";

const AmenitiesSection = () => {
  const amenities = [
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "Gated Community", 
      description: "Secure, exclusive access and 24/7 surveillance."
    },
    { 
      icon: <Landmark className="w-8 h-8" />, // Using Landmark as substitute for Mosque
      title: "Grand Mosque", 
      description: "A beautiful mosque for community worship."
    },
    { 
      icon: <Users className="w-8 h-8" />, 
      title: "Kids Play Area", 
      description: "Safe, fun spaces for children to play and grow."
    },
    { 
      icon: <ShoppingBag className="w-8 h-8" />, 
      title: "Commercial Area", 
      description: "Shops, services, and conveniences for residents."
    },
    { 
      icon: <Activity className="w-8 h-8" />, 
      title: "Sports Complex", 
      description: "Modern facilities for sports and recreation."
    },
    { 
      icon: <Shield className="w-8 h-8" />, 
      title: "24/7 Security & Surveillance", 
      description: "CCTV and security teams for peace of mind."
    }
  ];

  // Details cards below amenities
  const detailCards = [
    { label: "Total Area", value: "198.7 Kanals" },
    { label: "Green Coverage", value: "6%" }
  ];

  const locationCards = [
    { label: "GT Road", value: "15 km" },
    { label: "Gujrat City", value: "15 km" },
    { label: "Motorway", value: "45 km" },
    { label: "Islamabad", value: "190 km" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Amenities
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {amenities.map((amenity, index) => (
            <div key={index} className="bg-navy-header text-slate-50 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4 flex justify-center">
                {amenity.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p>{amenity.description}</p>
            </div>
          ))}
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-8 mb-8 max-w-lg mx-auto">
          {detailCards.map((card, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-golden-accent mb-2">{card.value}</div>
              <div className="text-gray-700">{card.label}</div>
            </div>
          ))}
        </div>

        {/* Location Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8 max-w-3xl mx-auto">
          {locationCards.map((card, idx) => (
            <div key={idx} className="bg-navy-header p-6 rounded-lg shadow text-center">
              <div className="text-2xl font-bold text-golden-accent mb-2">{card.value}</div>
              <div className="text-slate-50">{card.label}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-700 italic">
            Experience the difference of a truly planned community
          </p>
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;