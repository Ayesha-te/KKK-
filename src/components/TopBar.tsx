import { Phone, Mail, Clock } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-navy-header text-text-light py-2 px-4 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:+923094888212" className="flex items-center gap-2 hover:text-golden-accent transition-colors">
            <Phone size={14} />
            <span className="hidden sm:inline">0309 488 8212</span>
            <span className="sm:hidden">Call Now</span>
          </a>
          <a href="mailto:info@kunjwalcity.pk" className="flex items-center gap-2 hover:text-golden-accent transition-colors">
            <Mail size={14} />
            <span className="hidden md:inline">info@kunjwalcity.pk</span>
            <span className="md:hidden">Email</span>
          </a>
          <div className="hidden lg:flex items-center gap-2 text-text-light">
            <Clock size={14} />
            Mon - Sat: 9AM - 6PM
          </div>
        </div>
        <div className="text-text-light font-medium text-xs sm:text-sm">
          <span className="hidden sm:inline">40+ Years of Trusted Excellence</span>
          <span className="sm:hidden">40+ Years Legacy</span>
        </div>
      </div>
    </div>
  );
};

export default TopBar;