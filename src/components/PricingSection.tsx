import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import m3 from "@/assets/m3.jpg";
import m4 from "@/assets/m4.jpg";

const PricingSection = () => {
  const plans = [
    {
      title: "3 Marla",
      subtitle: "Starter Homes Collection",
      originalPrice: "PKR 25.8L",
      currentPrice: "PKR 23.3L",
      monthlyPrice: "PKR 65,000/month",
      savings: "PKR 3L",
      features: [
        "Corner plot availability",
        "Wide road frontage", 
        "Underground utilities",
        "24/7 gated security",
        "Parks and green spaces",
        "Commercial zone access"
      ]
    },
    {
      title: "5 Marla", 
      subtitle: "Family Residences Collection",
      originalPrice: "PKR 43.0L",
      currentPrice: "PKR 38.8L",
      monthlyPrice: "PKR 108,000/month",
      savings: "PKR 4L",
      features: [
        "Premium corner locations",
        "Extra-wide road access",
        "Full utility connections",
        "Enhanced security features",
        "Community center access",
        "Educational facilities nearby",
        "Investment-grade positioning"
      ]
    },
    {
      title: "7 Marla",
      subtitle: "Executive Homes Collection", 
      originalPrice: "PKR 60.3L",
      currentPrice: "PKR 54.3L",
      monthlyPrice: "PKR 151,000/month",
      savings: "PKR 6L",
      features: [
        "Premium boulevard locations",
        "Maximum frontage roads",
        "Complete infrastructure",
        "Luxury amenities access",
        "Commercial zone proximity",
        "Future expansion potential",
        "Executive community standards"
      ]
    }
  ];

  return (
    <></>
    // <section id="plots" className="py-20 bg-gray-50">
    //   <div className="container mx-auto px-4">
    //     <div className="text-center mb-12">
    //       <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
    //         Choose Your Perfect Plot Size
    //       </h2>
    //       <p className="text-lg text-gray-600 max-w-3xl mx-auto">
    //         Premium residential plots with flexible payment plans and world-class amenities
    //       </p>
    //     </div>

    //     <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
    //       {plans.map((plan, index) => (
    //         <Card key={index} className="relative overflow-hidden hover:shadow-2xl transition-shadow duration-300">
    //           <div className="absolute top-0 right-0 bg-golden-accent text-white px-4 py-2 text-sm font-semibold">
    //             Save {plan.savings}
    //           </div>
              
    //           <CardHeader className="text-center pb-4">
    //             <div className="text-sm text-golden-accent font-semibold mb-2">
    //               {plan.subtitle}
    //             </div>
    //             <CardTitle className="text-3xl font-bold text-text-dark">
    //               {plan.title}
    //             </CardTitle>
    //           </CardHeader>
              
    //           <CardContent className="space-y-6">
    //             <div className="text-center">
    //               <div className="text-gray-500 line-through text-lg">
    //                 {plan.originalPrice}
    //               </div>
    //               <div className="text-4xl font-bold text-text-dark mb-2">
    //                 {plan.currentPrice}
    //               </div>
    //               <div className="text-golden-accent font-semibold">
    //                 or <strong>{plan.monthlyPrice}</strong>
    //               </div>
    //             </div>

    //             <div className="space-y-3">
    //               {plan.features.map((feature, featureIndex) => (
    //                 <div key={featureIndex} className="flex items-center gap-3">
    //                   <CheckCircle size={16} className="text-golden-accent flex-shrink-0" />
    //                   <span className="text-gray-700 text-sm">{feature}</span>
    //                 </div>
    //               ))}
    //             </div>

    //             <Button 
    //               className="w-full bg-golden-accent hover:bg-golden-hover text-white font-semibold py-3"
    //             >
    //               Reserve This Plot
    //             </Button>
    //           </CardContent>
    //         </Card>
    //       ))}
    //     </div>

    //     {/* Two separate image + stat/info cards below the pricing grid */}
    //     <div className="mt-20 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    //       {/* Card: Development Progress (m3) */}
    //       <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 md:p-7 flex gap-5 md:gap-6 items-center">
    //         <img src={m3} alt="Development progress" className="w-56 h-36 md:w-72 md:h-44 object-cover rounded-xl" />
    //         <div>
    //           <div className="text-2xl md:text-3xl font-bold text-text-dark">Development on Schedule</div>
    //           <p className="text-base md:text-lg text-gray-700">Roads, utilities, and infrastructure moving steadily — quality first, always.</p>
    //         </div>
    //       </div>

    //       {/* Card: Community & Lifestyle (m4) */}
    //       <div className="bg-white rounded-2xl shadow hover:shadow-xl transition p-6 md:p-7 flex gap-5 md:gap-6 items-center">
    //         <img src={m4} alt="Community and lifestyle" className="w-56 h-36 md:w-72 md:h-44 object-cover rounded-xl" />
    //         <div>
    //           <div className="text-2xl md:text-3xl font-bold text-text-dark">Premium Community Living</div>
    //           <p className="text-base md:text-lg text-gray-700">Thoughtfully planned plots, wider streets, and a secure family environment.</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="mt-16 text-center bg-navy-header rounded-lg p-8 max-w-4xl mx-auto shadow-lg">
    //      <h3 className="text-2xl md:text-3xl font-bold text-golden-accent mb-4">Pre-Launch Investment Opportunity</h3>

    //       <p className="text-lg text-slate-50 mb-6">
    //         Limited Time Offer - Secure Tomorrow's Prices Today
    //       </p>
    //       <p className="text-slate-50 mb-6">
    //         Lock in exclusive pre-launch pricing before public release. Early investors secure the best plots at guaranteed prices.
    //       </p>
          
    //       <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
    //         <p className="text-red-700 font-semibold">
    //           Prices increase by PKR 5-10 Lakh per plot<br />
    //           after September 30th, 2025
    //         </p>
    //       </div>

    //       <Button 
    //         size="lg"
    //         className="bg-golden-accent hover:bg-golden-hover text-white font-semibold px-8 py-4"
    //       >
    //         Reserve Your Plot →
    //       </Button>

    //       <div className="grid md:grid-cols-4 gap-6 mt-8 text-center">
    //         <div>
    //           <div className="text-golden-accent font-semibold">Limited Availability</div>
    //           <div className="text-sm text-slate-50">47 Premium Plots Remaining</div>
    //         </div>
    //         <div>
    //           <div className="text-golden-accent font-semibold">First-come, first-served basis</div>
    //         </div>
    //         <div>
    //           <div className="text-golden-accent font-semibold">Strategic Location</div>
    //         </div>
    //         <div>
    //           <div className="text-golden-accent font-semibold">Modern Infrastructure</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  );
};

export default PricingSection;