import { Link } from "react-router-dom";

import { Phone, Mail, MapPin } from "lucide-react";

import { SocialIcon } from "react-social-icons";

function Footer() {
  const handlePageTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const instagramUrl =
    "https://www.instagram.com/globaliconrealtorsgroup?stkn=YTJ3b2g4dmpnd2Fl";

  return (
    <footer className="bg-[#080808] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link
              to="/"
              onClick={handlePageTop}
              className="inline-block"
            >
              <span className="font-oswald text-3xl font-semibold uppercase tracking-tight">
                Global Icon
                <span className="text-[#F29925]"> Realtors</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-white/45">
              A real estate company focused on helping clients discover,
              acquire and explore exceptional property opportunities.
            </p>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-3 text-sm text-white/60 transition hover:text-[#F29925]"
            >
              <SocialIcon
                url={instagramUrl}
                bgColor="#E4405F"
                fgColor="#ffffff"
                style={{
                  width: 28,
                  height: 28,
                }}
              />

              <span>@globaliconrealtorsgroup</span>
            </a>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F29925]">
              Navigation
            </p>

            <div className="mt-5 flex flex-col gap-3">
              <Link
                to="/"
                onClick={handlePageTop}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Home
              </Link>

              <Link
                to="/properties"
                onClick={handlePageTop}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Properties
              </Link>

              <Link
                to="/about"
                onClick={handlePageTop}
                className="text-sm text-white/55 transition hover:text-white"
              >
                About
              </Link>

              <Link
                to="/contact"
                onClick={handlePageTop}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Contact
              </Link>

              <Link
                to="/register"
                onClick={handlePageTop}
                className="text-sm text-white/55 transition hover:text-white"
              >
                Become a Realtor
              </Link>
            </div>
          </div>

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#F29925]">
              Contact
            </p>

            <div className="mt-5 space-y-4">
              <div className="flex gap-3 text-sm text-white/55">
                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F29925]"
                />

                <span>Lagos, Nigeria</span>
              </div>

              <div className="flex gap-3 text-sm text-white/55">
                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F29925]"
                />

                <a
                  href="tel:+2347065114147"
                  className="transition hover:text-white"
                >
                  +234 706 511 4147
                </a>
              </div>

              <div className="flex gap-3 text-sm text-white/55">
                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-[#F29925]"
                />

                <span>Property enquiries</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6">
          <p className="text-[10px] text-white/30">
            © {new Date().getFullYear()} Global Icon Realtors. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;