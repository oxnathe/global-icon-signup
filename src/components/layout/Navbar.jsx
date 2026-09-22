import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";
import BrandLogo from "../BrandLogo";
import { useCurrency } from "../../context/CurrencyContext";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currencyOpen, setCurrencyOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { currency, setCurrency, currencies } = useCurrency();

  // Scroll to the top — same method used by the Footer
  const handlePageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  const handleCurrencyChange = (code) => {
    setCurrency(code);
    setCurrencyOpen(false);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/10 bg-[#071522]/95 shadow-2xl backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      {/* Scroll color accent */}
      <div
        className={`absolute inset-x-0 bottom-0 h-[2px] origin-left transition-transform duration-500 ${
          scrolled ? "scale-x-100" : "scale-x-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, #F29925 0%, #FFFFFF 48%, #071522 100%)",
        }}
      />

      {/* Premium color glow when scrolling */}
      <div
        className={`pointer-events-none absolute inset-0 -z-10 transition-opacity duration-500 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(90deg, rgba(242,153,37,0.16) 0%, rgba(7,21,34,0.94) 35%, rgba(255,255,255,0.06) 65%, rgba(7,21,34,0.98) 100%)",
        }}
      />

      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-10 ${
          scrolled ? "h-[72px]" : "h-[82px]"
        }`}
      >
        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            closeMobileMenu();
            handlePageTop();
          }}
          aria-label="Global Icon Realtors home"
          className="shrink-0"
        >
          <BrandLogo />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          onClick={handlePageTop}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `group relative py-2 font-oswald text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
                  isActive
                    ? "text-[#F29925]"
                    : scrolled
                      ? "text-white/85 hover:text-[#F29925]"
                      : "text-white/90 hover:text-[#F29925]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.label}

                  <span
                    className={`absolute bottom-0 left-1/2 h-[2px] -translate-x-1/2 bg-[#F29925] transition-all duration-300 ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-3 lg:flex">
          {/* Currency */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setCurrencyOpen((open) => !open)
              }
              className={`flex h-10 items-center gap-2 rounded-full border px-4 font-oswald text-[11px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 ${
                scrolled
                  ? "border-[#F29925]/60 bg-white/5 text-white hover:border-[#F29925] hover:bg-white/10"
                  : "border-white/30 bg-black/10 text-white backdrop-blur-sm hover:border-[#F29925] hover:bg-white/10"
              }`}
              aria-expanded={currencyOpen}
              aria-label="Select currency"
            >
              <span className="text-[#F29925]">
                {
                  currencies.find(
                    (item) => item.code === currency
                  )?.symbol
                }
              </span>

              <span>{currency}</span>

              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${
                  currencyOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Currency Dropdown */}
            {currencyOpen && (
              <div className="absolute right-0 top-12 w-32 overflow-hidden rounded-xl border border-neutral-200 bg-white p-1 shadow-2xl">
                {currencies.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() =>
                      handleCurrencyChange(item.code)
                    }
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left font-poppins text-xs font-semibold transition ${
                      currency === item.code
                        ? "bg-[#071522] text-white"
                        : "text-neutral-700 hover:bg-neutral-100"
                    }`}
                  >
                    <span
                      className={
                        currency === item.code
                          ? "text-[#F29925]"
                          : "text-neutral-500"
                      }
                    >
                      {item.symbol}
                    </span>

                    {item.code}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Become a Realtor */}
          <Link
            to="/register"
            onClick={handlePageTop}
            className="group flex h-10 items-center gap-2 rounded-full bg-[#F29925] px-6 font-oswald text-[11px] font-bold uppercase tracking-[0.08em] text-black transition-all duration-300 hover:bg-white"
          >
            Become a Realtor

            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() =>
            setMobileOpen((open) => !open)
          }
          className={`flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition lg:hidden ${
            scrolled
              ? "border-[#F29925]/50 bg-[#071522]/80 text-white"
              : "border-white/30 bg-black/20 text-white"
          }`}
          aria-label={
            mobileOpen
              ? "Close menu"
              : "Open menu"
          }
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? (
            <X size={21} />
          ) : (
            <Menu size={21} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="border-t border-white/10 px-5 py-5 shadow-2xl backdrop-blur-xl lg:hidden"
          style={{
            background:
              "linear-gradient(135deg, rgba(7,21,34,0.98) 0%, rgba(7,21,34,0.98) 65%, rgba(242,153,37,0.12) 100%)",
          }}
        >
          <nav
            className="flex flex-col"
            onClick={handlePageTop}
          >
            {/* Main Links */}
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `border-b border-white/10 py-4 font-oswald text-sm font-semibold uppercase tracking-[0.08em] transition ${
                    isActive
                      ? "text-[#F29925]"
                      : "text-white hover:text-[#F29925]"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Mobile Currency */}
            <div className="flex items-center justify-between border-b border-white/10 py-4">
              <span className="font-oswald text-sm font-semibold uppercase tracking-[0.08em] text-white">
                Currency
              </span>

              <div className="flex items-center gap-2">
                {currencies.map((item) => (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() =>
                      handleCurrencyChange(item.code)
                    }
                    className={`rounded-full px-3 py-2 font-poppins text-[10px] font-bold transition ${
                      currency === item.code
                        ? "bg-[#F29925] text-black"
                        : "border border-white/20 text-white/70 hover:border-[#F29925]/50 hover:text-white"
                    }`}
                  >
                    {item.symbol} {item.code}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Become a Realtor */}
            <Link
              to="/register"
              onClick={() => {
                closeMobileMenu();
                handlePageTop();
              }}
              className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#F29925] px-5 py-4 font-oswald text-sm font-bold uppercase tracking-[0.08em] text-black transition hover:bg-white"
            >
              Become a Realtor

              <ArrowRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;