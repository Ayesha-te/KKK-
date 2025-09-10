import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Users, Star, Award } from "lucide-react";
import hero1 from "@/assets/hero-background.jpg";
import hero2 from "@/assets/herooo.jpg";
import hero3 from "@/assets/new.jpg";

const HeroSection = () => {
  const images = [hero1, hero2, hero3];

  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <Carousel
          className="h-full"
          opts={{ loop: true, align: "start" }}
        >
          <CarouselContent className="h-full">
            {images.map((src, i) => (
              <CarouselItem key={i} className="h-[100vh] p-0">
                <div
                  className="h-full bg-cover bg-center"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${src})`,
                  }}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Overlay content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Kunjwal City</h1>
          <div className="text-2xl md:text-3xl mb-6 font-light" dir="rtl">جہاں دل بس جائے!</div>
          
          <Button size="lg" className="bg-golden-accent hover:bg-golden-hover text-white font-semibold px-8 py-4 text-lg rounded-lg">
            DISCOVER KUNJWAL CITY
          </Button>
        </div>

      
      </div>
    </section>
  );
};

export default HeroSection;