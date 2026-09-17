import { ArrowRight, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const locations = [
  "Lekki",
  "Ikoyi",
  "Victoria Island",
  "Ajah",
  "Chevron",
  "Yaba",
];

function Locations() {
  return (
    <section className="bg-[#090909] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
              Popular Locations
            </p>

            <h2 className="mt-4 font-oswald text-5xl uppercase leading-[0.92] md:text-7xl">
              Explore Lagos
              <br />
              <span className="text-[#F29925]">by location.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-7 text-white/45">
              Explore property opportunities across some of Lagos's most
              sought-after residential and commercial areas.
            </p>
          </div>

          <div className="grid border-l border-t border-white/10 sm:grid-cols-2">
            {locations.map((location) => (
              <Link
                key={location}
                to={`/properties?location=${encodeURIComponent(location)}`}
                className="group flex min-h-[145px] items-end justify-between border-b border-r border-white/10 p-6 transition hover:bg-white/[0.04]"
              >
                <div>
                  <MapPin
                    size={17}
                    className="mb-7 text-[#F29925]"
                  />

                  <h3 className="font-montserrat text-lg font-bold">
                    {location}
                  </h3>
                </div>

                <ArrowRight
                  size={18}
                  className="text-white/30 transition group-hover:translate-x-1 group-hover:text-[#F29925]"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Locations;