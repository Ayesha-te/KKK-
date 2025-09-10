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
          <p className="text-lg md:text-2xl mb-8 text-gray-200">
            Premium residential plots
          </p>
          <Button size="lg" className="bg-golden-accent hover:bg-golden-hover text-white font-semibold px-8 py-4 text-lg rounded-lg">
            DISCOVER KUNJWAL CITY
          </Button>
        </div>

        {/* Bottom-centered transparent stats strip with dividers */}
        <div className="absolute inset-x-0 bottom-8 z-20">
          <div className="flex items-center justify-center text-white">
            <div className="flex items-center gap-8 md:gap-12 text-center">
              {/* Item 1 */}
              <div className="flex items-center gap-3 pr-8 md:pr-12">
                <Users className="w-6 h-6 text-golden-accent" />
                <div className="text-left">
                  <div className="text-3xl md:text-4xl font-bold text-golden-accent">500+</div>
                  <div className="text-sm md:text-base">Happy Families</div>
                </div>
              </div>
              <div className="hidden md:block h-10 w-px bg-white/40" />

              {/* Item 2 */}
              <div className="flex items-center gap-3 px-8 md:px-12">
                <Star className="w-6 h-6 text-golden-accent" />
                <div className="text-left">
                  <div className="text-3xl md:text-4xl font-bold text-golden-accent">4.9/5</div>
                  <div className="text-sm md:text-base">Customer Rating</div>
                </div>
              </div>
              <div className="hidden md:block h-10 w-px bg-white/40" />

              {/* Item 3 */}
              <div className="flex items-center gap-3 pl-8 md:pl-12">
                <Award className="w-6 h-6 text-golden-accent" />
                <div className="text-left">
                  <div className="text-3xl md:text-4xl font-bold text-golden-accent">40+</div>
                  <div className="text-sm md:text-base">Years Legacy</div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;