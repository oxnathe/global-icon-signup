import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";

import {
  ArrowRight,
  ChevronDown,
  Search,
  Trophy,
} from "lucide-react";

import { useCurrency } from "../../context/CurrencyContext";

const purposes = ["Shortlet", "Buy", "Rent / Lease"];

const propertyTypes = [
  "All Properties",
  "Apartment",
  "Detached Duplex",
  "Duplex",
  "Terrace",
  "Land",
];

const awards = [
  {
    title: "Top Real Estate Agency",
    location: "Lagos 2024",
  },
  {
    title: "Excellence in Property Sales",
    location: "Nigeria 2023",
  },
  {
    title: "Trusted Real Estate Partner",
    location: "West Africa 2023",
  },
];

function Hero() {
  const navigate = useNavigate();

  const [purpose, setPurpose] = useState("Buy");
  const [propertyType, setPropertyType] =
    useState("All Properties");
  const [location, setLocation] = useState("");

  const { currency } = useCurrency();

  const handleSearch = () => {
    const params = new URLSearchParams();

    if (location.trim()) {
      params.set("search", location.trim());
    }

    if (purpose) {
      params.set("purpose", purpose);
    }

    if (
      propertyType &&
      propertyType !== "All Properties"
    ) {
      params.set("type", propertyType);
    }

    navigate(
      `/properties${
        params.toString()
          ? `?${params.toString()}`
          : ""
      }`
    );
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#071522] font-poppins text-white">
      <div className="absolute inset-0">
        <img
          src="/images/hero/hero-property.webp"
          alt="Global Icon Realtors Lagos skyline"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-[#061827]/90 via-[#071b2c]/55 to-transparent" />

        <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#061827]/80 to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-[#061827]/90 via-[#061827]/40 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-[1400px] flex-col px-5 pb-7 pt-[95px] sm:px-8 lg:px-12">
        <div className="flex flex-1 items-center">
          <div className="grid w-full items-center gap-12 lg:grid-cols-[1fr_0.75fr]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
              }}
              className="max-w-2xl"
            >
              <div className="mb-6 flex items-center gap-4">
                <span className="h-px w-12 bg-[#F29925]" />

                <span className="font-oswald text-[10px] font-bold uppercase tracking-[0.28em] text-[#F29925] sm:text-[11px]">
                  Premium Real Estate Solutions
                </span>
              </div>

              <h1 className="font-montserrat text-[clamp(3.2rem,6.3vw,6.8rem)] font-semibold leading-[0.94] tracking-[-0.055em]">
                <span className="block">
                  Find a place
                </span>

                <span className="block">
                  that feels{" "}
                  <span className="font-light italic text-[#F29925]">
                    like yours.
                  </span>
                </span>
              </h1>

              <p className="mt-7 max-w-xl font-poppins text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
                Discover exceptional homes, premium spaces
                and property opportunities carefully selected
                for modern living and long-term value across
                Lagos.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="hidden lg:flex lg:justify-end"
            >
              <div className="w-full max-w-[470px]">
                <div className="mb-7 flex items-center justify-end gap-4">
                  <span className="font-oswald text-[10px] font-bold uppercase tracking-[0.25em] text-white/85">
                    Our Awards & Recognition
                  </span>

                  <span className="h-px w-20 bg-[#F29925]/70" />
                </div>

                <div className="grid grid-cols-3 gap-6">
                  {awards.map((award) => (
                    <div
                      key={award.title}
                      className="text-center"
                    >
                      <div className="relative mx-auto mb-3 flex h-16 w-16 items-center justify-center">
                        <div className="absolute inset-0 rounded-full border border-[#F29925]/70" />

                        <div className="absolute inset-2 rounded-full border border-[#F29925]/30" />

                        <Trophy
                          size={23}
                          strokeWidth={1.4}
                          className="text-[#F29925]"
                        />
                      </div>

                      <p className="font-oswald text-[8px] font-semibold uppercase leading-4 text-white sm:text-[9px]">
                        {award.title}
                      </p>

                      <p className="mt-2 font-poppins text-[7px] uppercase tracking-[0.18em] text-white/50 sm:text-[8px]">
                        {award.location}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.45,
            ease: "easeOut",
          }}
          className="relative z-30"
        >
          <div className="rounded-[24px] border border-white/25 bg-[#071522]/90 p-3 shadow-2xl backdrop-blur-xl sm:rounded-[28px] sm:p-4">
            <div className="grid lg:grid-cols-[1.5fr_1fr_1fr_auto]">
              {/* DISCOVER */}
              <div className="flex min-h-[66px] items-center gap-4 border-b border-white/10 px-4 sm:px-5 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20">
                  <Search
                    size={19}
                    strokeWidth={1.7}
                    className="text-white"
                  />
                </div>

                <label className="min-w-0 flex-1">
                  <span className="block font-oswald text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Discover
                  </span>

                  <input
                    type="text"
                    value={location}
                    onChange={(event) =>
                      setLocation(event.target.value)
                    }
                    onKeyDown={(event) => {
                      if (event.key === "Enter") {
                        handleSearch();
                      }
                    }}
                    placeholder="Search by location, property or keyword..."
                    className="mt-1 w-full bg-transparent font-poppins text-xs text-white outline-none placeholder:text-white/45"
                  />
                </label>
              </div>

              {/* PURPOSE */}
              <div className="flex min-h-[66px] items-center gap-4 border-b border-white/10 px-4 sm:px-5 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20">
                  <span className="text-lg text-[#F29925]">
                    ⌂
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <label className="block font-oswald text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Purpose
                  </label>

                  <select
                    value={purpose}
                    onChange={(event) =>
                      setPurpose(event.target.value)
                    }
                    className="mt-1 w-full cursor-pointer bg-transparent font-poppins text-xs font-semibold text-white outline-none"
                  >
                    {purposes.map((item) => (
                      <option
                        key={item}
                        value={item}
                        className="bg-[#071522] text-white"
                      >
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <ChevronDown
                  size={15}
                  className="pointer-events-none shrink-0 text-white/50"
                />
              </div>

              {/* PROPERTY TYPE */}
              <div className="flex min-h-[66px] items-center gap-4 border-b border-white/10 px-4 sm:px-5 lg:border-b-0 lg:border-r">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20">
                  <span className="text-lg text-[#F29925]">
                    ▦
                  </span>
                </div>

                <div className="min-w-0 flex-1">
                  <label className="block font-oswald text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
                    Property Type
                  </label>

                  <select
                    value={propertyType}
                    onChange={(event) =>
                      setPropertyType(event.target.value)
                    }
                    className="mt-1 w-full cursor-pointer bg-transparent font-poppins text-xs font-semibold text-white outline-none"
                  >
                    {propertyTypes.map((type) => (
                      <option
                        key={type}
                        value={type}
                        className="bg-[#071522] text-white"
                      >
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <ChevronDown
                  size={15}
                  className="pointer-events-none shrink-0 text-white/50"
                />
              </div>

              {/* SEARCH BUTTON */}
              <button
                type="button"
                onClick={handleSearch}
                className="group m-1 flex min-h-[62px] items-center justify-center gap-3 rounded-full bg-[#F29925] px-8 font-oswald text-[10px] font-bold uppercase tracking-[0.18em] text-black transition duration-300 hover:bg-white"
              >
                Search

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </div>
          </div>
        </motion.div>

        <div className="mt-4 flex items-center justify-between lg:hidden">
          <div className="flex items-center gap-2">
            {awards.map((award) => (
              <div
                key={award.title}
                title={award.title}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[#F29925]/60"
              >
                <Trophy
                  size={13}
                  className="text-[#F29925]"
                />
              </div>
            ))}
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-4 py-2 font-oswald text-[10px] font-bold uppercase backdrop-blur-md">
            <span className="text-[#F29925]">
              {currency === "USD" ? "$" : "₦"}
            </span>

            {currency}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <div className="flex flex-col items-center gap-2 font-oswald text-[8px] font-bold uppercase tracking-[0.3em] text-white/65">
            <div className="flex h-8 w-5 items-start justify-center rounded-full border border-white/60 p-1">
              <motion.div
                animate={{
                  y: [0, 9, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-2 w-1 rounded-full bg-white"
              />
            </div>

            Scroll Down
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;