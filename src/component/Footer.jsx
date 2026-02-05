import {
 
  Instagram,
  Facebook,
  Twitter,
  ChevronRight,
  MapPin,
  Mail,
} from 'lucide-react';
const Footer = () => {
  return (
    <footer className="bg-[#EAE5DF] text-luxury-dark pt-20 pb-10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="space-y-6">
            <div className="text-3xl font-serif font-bold italic tracking-tighter">
              Grace <span className="text-primary">Aesthetic</span>
            </div>
            <p className="text-sm text-luxury-dark/60 max-w-xs leading-relaxed uppercase tracking-widest">
              Exclusive properties and bespoke interior design for the discerning traveler.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h5 className="font-semibold uppercase tracking-widest text-xs mb-8">Navigation</h5>
              <ul className="space-y-4 text-sm text-luxury-dark/70">
                <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Aesthetics</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Portfolio</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold uppercase tracking-widest text-xs mb-8">Follow</h5>
              <ul className="space-y-4 text-sm text-luxury-dark/70">
                <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Pinterest</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Vimeo</a></li>
              </ul>
            </div>
          </div>

          <div id="contact">
            <h5 className="font-semibold uppercase tracking-widest text-xs mb-8">Get in Touch</h5>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="text-primary" size={18} />
                <span className="text-sm">hello@grace-aesthetic.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="text-primary" size={18} />
                <span className="text-sm">Dehradun, Uttarakhand, IN</span>
              </div>
              <form className="mt-8 relative">
                <input
                  type="email"
                  placeholder="SUBSCRIBE TO NEWSLETTER"
                  className="w-full bg-transparent border-b border-luxury-dark/20 py-2 text-xs focus:outline-none focus:border-primary uppercase tracking-widest"
                />
                <button type="submit" className="absolute right-0 bottom-2">
                  <ChevronRight size={18} className="text-primary" />
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="border-t border-luxury-dark/10 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] font-medium text-luxury-dark/40">
          <p>© 2024 Grace Aesthetic. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;