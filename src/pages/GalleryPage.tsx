import TopBar from "@/components/TopBar";
import FooterSection from "@/components/FooterSection";
import React from "react";
import Navigation from "@/components/Navigation";

// Import your images from src/assets (adjust filenames as needed)
import img1 from "../assets/1.jpg";
import img2 from "../assets/2.jpg";
import img3 from "../assets/543367148_122112662450979669_1035539012718234355_n.jpg";
import img4 from "../assets/4.jpg";
// Add more image imports as needed

const images = [
  { src: img1, alt: "Kunjwal City - Entrance View" },
  { src: img2, alt: "Kunjwal City - Night Lights" },
  { src: img3, alt: "Kunjwal City - Mosque" },
  { src: img4, alt: "Kunjwal City - Parks" },
  // Add more objects for additional images
];

const GalleryPage = () => {
  return (
    <>
      <TopBar />
      <Navigation />

      <section className="py-20 bg-gray-100 min-h-screen">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-4">
              Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore the beauty, progress, and vibrant lifestyle at Kunjwal
              City.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {images.map((img, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                {/* Image Wrapper */}
                <div className="flex items-center justify-center h-72 bg-gray-200">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="max-h-72 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  />
                </div>

                {/* Caption */}
                <div className="p-4 text-center">
                  <span className="text-gray-700 text-sm">{img.alt}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default GalleryPage;
