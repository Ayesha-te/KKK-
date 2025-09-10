import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import familyTestimonial from "@/assets/mosque.png"; // Using mosque image as placeholder for family testimonial

const CustomerStoriesSection = () => {
  return (
    <section className="py-20 bg-slate-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Customer Stories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            What Our Family Members Say About Us
          </p>
        </div>
        
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Real stories from real families who have made Kunjwal City their home. Join the community of satisfied investors.
        </p>

        <div className="relative max-w-4xl mx-auto mb-12">
          <Card className="relative z-10">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <img 
                    src={familyTestimonial} 
                    alt="Ahmed & Fatima Khan" 
                    className="w-64 h-48 object-cover rounded-lg"
                  />
                  <div className="text-center mt-4">
                    <div className="bg-golden-accent text-white px-4 py-2 rounded text-sm font-semibold">
                      5 Marla
                    </div>
                  </div>

                </div>
                <div className="flex-1">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-golden-accent text-golden-accent" />
                    ))}
                  </div>
                  <blockquote className="text-xl text-gray-700 italic mb-6">
                    "Kunjwal City exceeded all our expectations. The transparency in dealing and the quality of development made our decision easy. Our children now have a safe place to grow up."
                  </blockquote>
                  <div className="text-text-dark">
                    <div className="font-semibold text-lg">Ahmed & Fatima Khan</div>
                    <div className="text-gray-600">Lahore • Invested 2023</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-4 gap-8 text-center mb-12">
          <div>
            <div className="text-4xl font-bold text-golden-accent mb-2">500+</div>
            <div className="text-gray-600">Happy Families</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-accent mb-2">4.9/5</div>
            <div className="text-gray-600">Customer Rating</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-accent mb-2">100%</div>
            <div className="text-gray-600">Transparent Dealing</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-golden-accent mb-2">40+</div>
            <div className="text-gray-600">Years Legacy</div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-700 mb-6">
            Secure your family's future with our trusted legacy project
          </p>
          <Button 
            size="lg"
            className="bg-golden-accent hover:bg-golden-hover text-white font-semibold px-8 py-4"
          >
            Book Your Plot Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CustomerStoriesSection;