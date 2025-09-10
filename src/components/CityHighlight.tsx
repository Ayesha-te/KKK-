import m1 from "@/assets/m1.jpg";

const CityHighlight = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Left: medium image */}
          <div className="w-full flex justify-center">
            <img
              src={m1}
              alt="Kunjwal City overview"
              className="w-full md:max-w-sm h-64 md:h-72 object-cover rounded-xl shadow-md"
            />
          </div>

          {/* Right: concise description */}
          <div>
            <h3 className="text-3xl md:text-4xl font-bold text-text-dark mb-4">
              Life Inside Kunjwal City
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Discover thoughtfully planned residential plots designed for comfort, connectivity, and long‑term value. From wide access roads to essential utilities, every detail supports a safe and modern lifestyle for your family.
            </p>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>Prime location with quick access to city essentials</li>
              <li>Options in 3, 5, and 7 Marla residential plots</li>
              <li>Secure, well‑lit streets and community environment</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CityHighlight;