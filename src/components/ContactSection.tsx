import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import m2 from "@/assets/m2.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-text-dark mb-6">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ready to Secure Your Family's Future?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <p className="text-gray-600 mb-6">
                Our expert team is ready to help you find the perfect plot and guide you through every step of the investment process. Contact us today!
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-golden-accent/10 p-3 rounded-full">
                    <Phone className="text-golden-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Contact Number</h4>
                    <p className="text-gray-600">03 111 786 602</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-golden-accent/10 p-3 rounded-full">
                    <MapPin className="text-golden-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Address</h4>
                    <p className="text-gray-600">
                      15 Km Sargodha Road<br />
                      Gujrat, Punjab, Pakistan
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-golden-accent/10 p-3 rounded-full">
                    <Clock className="text-golden-accent" size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-dark">Office Hours</h4>
                    <p className="text-gray-600">
                      Monday – Sunday: 9AM to 6PM
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-text-dark mb-4">Book Your Site Visit</h4>
                  <p className="text-gray-600 mb-4">
                    Fill out this form and our team will contact you within 2 hours to schedule your visit.
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-golden-accent font-bold">2 Hours</div>
                      <div className="text-xs text-gray-600">Response Time</div>
                    </div>
                    <div>
                      <div className="text-golden-accent font-bold">100%</div>
                      <div className="text-xs text-gray-600">Privacy Protected</div>
                    </div>
                    <div>
                      <div className="text-golden-accent font-bold">Free</div>
                      <div className="text-xs text-gray-600">Site Visit</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-golden-accent/5 rounded-lg p-6">
              <h4 className="font-semibold text-text-dark mb-4">Why Choose Kunjwal City?</h4>
              <div className="flex items-center gap-4">
                <img src={m2} alt="Development progress" className="w-64 h-48 object-cover rounded-lg" />
                <div>
                  <ul className="space-y-2 text-gray-600">
                    <li>• 40+ years of trusted excellence in real estate</li>
                    <li>• Prime location with excellent connectivity</li>
                    <li>• Flexible payment plans available</li>
                    <li>• Clear documentation and transparent process</li>
                    <li>• World-class amenities and infrastructure</li>
                  </ul>
                  <p className="text-xs text-gray-500 mt-2">— “Each milestone is delivered with precision and transparency.” — Development Team</p>
                </div>
              </div>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-text-dark">Send Us A Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      First Name *
                    </label>
                    <Input placeholder="Your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-text-dark mb-2">
                      Last Name *
                    </label>
                    <Input placeholder="Your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="your.email@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Phone Number *
                  </label>
                  <Input placeholder="+92 300 000 0000" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Interested In
                  </label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>3 Marla Plot</option>
                    <option>5 Marla Plot</option>
                    <option>7 Marla Plot</option>
                    <option>Commercial Plot</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-text-dark mb-2">
                    Message
                  </label>
                  <Textarea 
                    placeholder="Tell us about your requirements..."
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-golden-accent hover:bg-golden-hover text-white font-semibold py-3"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;