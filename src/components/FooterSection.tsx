import logoImage from "@/assets/logo.png";

const FooterSection = () => {
  return (
  <footer className="bg-navy-header text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src={logoImage} 
                alt="Kunjwal City Logo" 
                className="w-16 h-16 mr-4"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Kunjwal City</h3>
                <div className="text-golden-accent" dir="rtl">جہاں دل بس جائے!</div>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Building trust for over 40 years. Kunjwal City offers premium residential plots in Gujrat with modern amenities and transparent dealing.
            </p>
            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Plot Pricing</h4>
              <div className="space-y-2 text-gray-300">
               
              </div>
              <div className="text-golden-accent mt-2 font-semibold">Payment Plans Available</div>
              <div className="text-gray-300 text-sm">Flexible installments up to 3 years with 0% markup</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Contact Information</h4>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-golden-accent">Head Office</h5>
                <div className="text-gray-300">
                  13-km, Sargodha Road<br />
                  Gujrat, Punjab
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-golden-accent">Office Hours</h5>
                <div className="text-gray-300">
                  Mon - Sat: 9:00 AM - 6:00 PM<br />
                  Sunday: By Appointment
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Ready to Secure Your Family's Future?</h4>
            <p className="text-gray-300 mb-6">
              Our expert team is ready to help you find the perfect plot and guide you through every step of the investment process. Contact us today!
            </p>
            <div className="space-y-4">
              <div>
                <h5 className="font-semibold text-golden-accent">Office Hours</h5>
                <div className="text-gray-300">
                  Mon - Sat: 9AM - 6PM<br />
                  Sunday: By Appointment
                </div>
              </div>
              <div>
                <h5 className="font-semibold text-golden-accent">Book Your Site Visit</h5>
                <div className="text-gray-300 text-sm mb-4">
                  Fill out this form and our team will contact you within 2 hours to schedule your visit.
                </div>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-golden-accent font-bold">2 Hours</div>
                    <div className="text-xs text-gray-300">Response Time</div>
                  </div>
                  <div>
                    <div className="text-golden-accent font-bold">100%</div>
                    <div className="text-xs text-gray-300">Privacy Protected</div>
                  </div>
                  <div>
                    <div className="text-golden-accent font-bold">Free</div>
                    <div className="text-xs text-gray-300">Site Visit</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Kunjwal City. All rights reserved. | A project by AYS Developers</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;