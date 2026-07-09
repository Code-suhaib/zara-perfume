export default function Footer() {
  const socialIcons = [
    { label: "Facebook", path: "M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" },
    { label: "Twitter", path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
    { label: "Instagram", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
    { label: "YouTube", path: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" },
  ];

  const shopLinks = ["All Fragrances", "Best Sellers", "New Arrivals", "Limited Edition", "Gift Sets"];
  const careLinks = ["Shipping & Delivery", "Returns & Exchanges", "FAQ's", "Contact Us"];
  const companyLinks = ["Our Story", "Sustainability", "Ingredients", "Careers"];

  return (
    <footer className="bg-[#030303] pt-20 pb-8 border-t border-gray-800/50 fade-in-section relative overflow-hidden">
      {/* Decorative top gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-5">
              <svg className="h-8 w-8 text-gold mr-3" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M2 20h20v2H2v-2zm18-10.5l-4.5 4.5L12 4l-3.5 10L4 9.5l-2 8.5h20l-2-8.5z"></path>
              </svg>
              <div>
                <div className="font-serif-lux text-xl tracking-lux text-gold-light leading-none">ZARA</div>
                <div className="text-[0.45rem] tracking-[0.4em] text-gray-500 mt-1 uppercase">Perfumes</div>
              </div>
            </div>
            <p className="text-xs text-gray-500 mb-6 font-light leading-relaxed">
              More than a fragrance.<br/>It's an experience.
            </p>
            <div className="flex space-x-3">
              {socialIcons.map((social, i) => (
                <a 
                  key={i}
                  className="w-8 h-8 rounded-full border border-gray-800 flex items-center justify-center text-gray-500 hover:text-gold hover:border-gold hover:shadow-gold-sm transition-all duration-500" 
                  href="#"
                  aria-label={social.label}
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.path}></path>
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h5 className="text-gold tracking-[0.15em] text-[0.65rem] uppercase mb-5 font-medium">Collection</h5>
            <ul className="space-y-3 text-xs text-gray-500">
              {shopLinks.map((link, i) => (
                <li key={i}><a className="hover:text-white footer-link" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold tracking-[0.15em] text-[0.65rem] uppercase mb-5 font-medium">Customer Care</h5>
            <ul className="space-y-3 text-xs text-gray-500">
              {careLinks.map((link, i) => (
                <li key={i}><a className="hover:text-white footer-link" href="#">{link}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="text-gold tracking-[0.15em] text-[0.65rem] uppercase mb-5 font-medium">Company</h5>
            <ul className="space-y-3 text-xs text-gray-500">
              {companyLinks.map((link, i) => (
                <li key={i}><a className="hover:text-white footer-link" href="#">{link}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h5 className="text-gold tracking-[0.15em] text-[0.65rem] uppercase mb-5 font-medium">Newsletter</h5>
            <p className="text-xs text-gray-500 mb-5 font-light leading-relaxed">
              Be the first to discover new scents and exclusive offers.
            </p>
            <form className="flex items-center border border-gray-800 focus-within:border-gold transition-all duration-500 relative rounded-full px-4 py-1" onSubmit={(e) => e.preventDefault()}>
              <input 
                className="w-full bg-transparent text-sm text-white focus:outline-none py-2.5 placeholder-gray-600 border-none px-0 focus:ring-0" 
                placeholder="Enter your email" 
                type="email"
                aria-label="Email address for newsletter"
              />
              <button 
                className="absolute right-1.5 top-1.5 bottom-1.5 bg-gold text-black p-2.5 hover:bg-gold-light transition-colors rounded-full flex items-center justify-center" 
                type="submit"
                aria-label="Subscribe to newsletter"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M14 5l7 7m0 0l-7 7m7-7H3" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-6 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center text-[0.55rem] text-gray-600 uppercase tracking-[0.15em]">
          <p>© 2025 ZARA. All Rights Reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a className="hover:text-gray-400 footer-link" href="#">Privacy Policy</a>
            <a className="hover:text-gray-400 footer-link" href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
