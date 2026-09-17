import { motion } from "framer-motion";
import {
  ArrowRight,
  BedDouble,
  Bath,
  MapPin,
  Search,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-[#080808] text-white">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#F29925]/10 blur-3xl" />

        <div className="absolute right-[-10%] top-[-10%] h-[520px] w-[520px] rounded-full bg-[#F29925]/8 blur-3xl" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      </div>

      {/* Main hero */}
      <div className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl items-center px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <div className="grid w-full items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative z-10"
          >
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-10 bg-[#F29925]" />

              <span className="font-montserrat text-[10px] font-bold uppercase tracking-[0.3em] text-[#F29925]">
                Global Icon Realtors
              </span>
            </div>

            {/* Main heading */}
            <h1 className="max-w-3xl font-oswald text-[clamp(3.8rem,8vw,7.6rem)] font-medium uppercase leading-[0.86] tracking-[-0.045em]">
              Find a place
              <br />

              <span className="text-white/95">that feels</span>
              <br />

              <span className="text-[#F29925]">like yours.</span>
            </h1>

            {/* Description */}
            <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Discover exceptional homes, premium spaces and property
              opportunities carefully selected for modern living and long-term
              value across Lagos.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                to="/properties"
                className="group inline-flex h-14 items-center justify-center gap-3 bg-[#F29925] px-7 text-xs font-bold uppercase tracking-[0.14em] text-black transition-all duration-300 hover:bg-white"
              >
                Explore Properties

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex h-14 items-center justify-center border border-white/15 px-7 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:border-white/40 hover:bg-white/5"
              >
                Talk to Us
              </Link>
            </div>

            {/* Bottom credibility row */}
            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-white/10 pt-6">
              <div>
                <p className="font-oswald text-2xl text-white">LAGOS</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Property Focus
                </p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="font-oswald text-2xl text-white">BUY</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Property
                </p>
              </div>

              <div>
                <p className="font-oswald text-2xl text-white">RENT</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Property
                </p>
              </div>

              <div>
                <p className="font-oswald text-2xl text-white">INVEST</p>
                <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-white/35">
                  Opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: "easeOut",
            }}
            className="relative min-h-[520px] sm:min-h-[620px]"
          >
            {/* Main image frame */}
            <div className="absolute inset-x-0 top-0 h-[78%] overflow-hidden sm:left-[7%]">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              <img
                src="/images/hero/hero-property.jpg"
                alt="Luxury property represented by Global Icon Realtors"
                className="h-full w-full object-cover transition-transform duration-[2000ms] hover:scale-105"
              />

              {/* Image number */}
              <div className="absolute left-5 top-5 z-20 flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center border border-white/25 bg-black/20 text-[10px] font-bold backdrop-blur-sm">
                  01
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/80">
                  Featured Property
                </span>
              </div>

              {/* Vertical label */}
              <div className="absolute bottom-6 right-5 z-20 hidden [writing-mode:vertical-rl] sm:block">
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/60">
                  Global Icon Collection
                </span>
              </div>
            </div>

            {/* Floating property card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.7,
                ease: "easeOut",
              }}
              className="absolute bottom-0 left-0 z-30 w-[88%] max-w-[430px] bg-white p-6 text-black shadow-2xl sm:left-0 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 flex items-center gap-2">
                    <Sparkles size={13} className="text-[#F29925]" />

                    <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/45">
                      Featured Residence
                    </span>
                  </div>

                  <h2 className="font-oswald text-2xl font-medium uppercase leading-none sm:text-3xl">
                    Modern Lagos Residence
                  </h2>
                </div>

                <span className="shrink-0 bg-[#080808] px-3 py-2 text-[9px] font-bold uppercase tracking-wider text-white">
                  New
                </span>
              </div>

              <div className="mt-5 flex items-center gap-2 text-xs text-black/50">
                <MapPin size={14} className="text-[#F29925]" />
                <span>Lekki, Lagos</span>
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-5 border-t border-black/10 pt-5">
                <div className="flex items-center gap-2">
                  <BedDouble size={15} className="text-black/45" />
                  <span className="text-xs font-medium">4 Beds</span>
                </div>

                <div className="flex items-center gap-2">
                  <Bath size={15} className="text-black/45" />
                  <span className="text-xs font-medium">4 Baths</span>
                </div>

                <div className="ml-auto">
                  <p className="text-[8px] font-bold uppercase tracking-widest text-black/35">
                    Enquire
                  </p>

                  <p className="mt-0.5 font-oswald text-lg">
                    Contact for price
                  </p>
                </div>
              </div>

              <Link
                to="/properties"
                className="group mt-6 flex items-center justify-between border-t border-black/10 pt-5 text-[10px] font-bold uppercase tracking-[0.16em]"
              >
                <span>View Property Collection</span>

                <span className="flex h-9 w-9 items-center justify-center bg-[#F29925] transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight size={15} />
                </span>
              </Link>
            </motion.div>

            {/* Floating location badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
              className="absolute right-0 top-[54%] z-30 hidden border border-white/15 bg-black/70 px-5 py-4 backdrop-blur-xl sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center bg-[#F29925] text-black">
                  <MapPin size={16} />
                </div>

                <div>
                  <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/35">
                    Location
                  </p>

                  <p className="mt-1 text-xs font-semibold text-white">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Search / discovery panel */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          delay: 1,
          ease: "easeOut",
        }}
        className="relative z-40 mx-auto -mt-4 max-w-7xl px-5 pb-8 sm:px-8 lg:px-10"
      >
        <div className="border border-white/10 bg-white/[0.07] p-4 backdrop-blur-2xl sm:p-5">
          <div className="grid gap-3 md:grid-cols-[1.1fr_1fr_1fr_1fr_auto]">
            <div className="flex min-h-[62px] items-center gap-3 border border-white/10 bg-black/30 px-4">
              <Search size={17} className="shrink-0 text-[#F29925]" />

              <div>
                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                  Discover
                </p>

                <p className="mt-1 text-xs font-medium text-white">
                  Find your next property
                </p>
              </div>
            </div>

            <div className="flex min-h-[62px] flex-col justify-center border border-white/10 bg-black/30 px-4">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                Purpose
              </span>

              <span className="mt-1 text-xs font-medium text-white">
                Buy or Rent
              </span>
            </div>

            <div className="flex min-h-[62px] flex-col justify-center border border-white/10 bg-black/30 px-4">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                Location
              </span>

              <span className="mt-1 text-xs font-medium text-white">
                Lagos
              </span>
            </div>

            <div className="flex min-h-[62px] flex-col justify-center border border-white/10 bg-black/30 px-4">
              <span className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/30">
                Property Type
              </span>

              <span className="mt-1 text-xs font-medium text-white">
                All Properties
              </span>
            </div>

            <Link
              to="/properties"
              className="flex min-h-[62px] items-center justify-center gap-2 bg-[#F29925] px-6 text-[10px] font-bold uppercase tracking-[0.15em] text-black transition hover:bg-white"
            >
              Search
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;