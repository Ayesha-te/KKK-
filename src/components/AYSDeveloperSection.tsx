import { Building2, Users2, ShieldCheck, Award } from "lucide-react";

const AYSDeveloperSection = () => {
  const features = [
    {
      icon: <ShieldCheck />,
      title: "Trusted Legacy",
      description: "AYS Developers (Pvt.) Ltd. is a respected name in Pakistan’s real estate sector, delivering quality with integrity."
    },
    {
      icon: <Award />,
      title: "Visionary Leadership",
      description: "Led by Mr. Amjad and Mr. Yahya Amjad, the company sets new benchmarks in residential and commercial development."
    },
    {
      icon: <Building2 />,
      title: "Modern Infrastructure",
      description: "Projects planned with a focus on modern infrastructure and sustainable community living."
    },
    {
      icon: <Users2 />,
      title: "Customer Satisfaction",
      description: "Every project reflects excellence, transparency, and reliability, ensuring long-term value for residents and investors."
    }
  ];

  return (
    <section id="ays-developers" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="text-golden-accent font-semibold text-lg mb-4">
            AYS Developers (Pvt.) Ltd.
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Building Trust, Creating Value
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-lg text-gray-700 mb-6">
            Kunjwal City, Gujrat is proudly developed by <span className="font-semibold">AYS Developers (Pvt.) Ltd.</span>, a trusted name in the Pakistani real estate sector. Known for their commitment to quality, integrity, and long-term value, AYS Developers continue to set new standards in residential and commercial development.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            The company is led by <span className="font-semibold">Mr. Amjad</span> and <span className="font-semibold">Mr. Yahya Amjad</span>, whose leadership brings a visionary approach to urban development. With a focus on customer satisfaction, modern infrastructure, and community-driven planning, AYS Developers (Pvt.) Ltd. ensures that every project reflects excellence, transparency, and reliability.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Their reputation for delivering sustainable and well-planned communities positions Kunjwal City Gujrat as not just a place to live, but a place to thrive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {features.map((feature, idx) => (
            <div key={feature.title} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
              <div className="text-golden-accent mb-4 flex justify-center">
                <div className="p-3 bg-golden-accent/10 rounded-full">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-text-dark mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AYSDeveloperSection;