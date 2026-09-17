import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandLogo from "../BrandLogo";

const navItems = [
  { label: "Home", path: "/" },
  { label: "Properties", path: "/properties" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-5">
        <Link to="/" onClick={closeMobileMenu} aria-label="Global Icon Realtors home">
          <BrandLogo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative text-[11px] font-bold uppercase tracking-[0.16em] transition ${
                  isActive
                    ? "text-[#F29925]"
                    : "text-neutral-600 hover:text-neutral-950"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}

          <Link
            to="/register"
            className="rounded-full bg-[#F29925] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#df8213]"
          >
            Register
          </Link>
        </nav>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 text-neutral-900 md:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-neutral-200 bg-white px-5 py-5 md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `border-b border-neutral-100 py-4 text-sm font-semibold ${
                    isActive ? "text-[#F29925]" : "text-neutral-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/register"
              onClick={closeMobileMenu}
              className="mt-5 rounded-xl bg-[#F29925] px-5 py-4 text-center text-sm font-bold text-white"
            >
              Register
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;