import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const types = [
  {
    name: "Apartments",
    description: "Contemporary apartments for modern city living.",
  },
  {
    name: "Duplexes",
    description: "Spacious homes designed around comfort and lifestyle.",
  },
  {
    name: "Terraces",
    description: "Stylish family residences in strategic locations.",
  },
  {
    name: "Land",
    description: "Land opportunities for development and investment.",
  },
  {
    name: "Commercial",
    description: "Property solutions for business and enterprise.",
  },
  {
    name: "Luxury",
    description: "Exceptional properties for premium living.",
  },
];

function PropertyTypes() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-2xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
            Explore Property Types
          </p>

          <h2 className="mt-4 font-oswald text-5xl uppercase leading-[0.92] md:text-7xl">
            Find the right
            <br />
            property.
          </h2>
        </div>

        <div className="mt-12 grid border-l border-t border-neutral-200 md:grid-cols-2 lg:grid-cols-3">
          {types.map((type, index) => (
            <Link
              key={type.name}
              to={`/properties?type=${encodeURIComponent(type.name)}`}
              className="group min-h-[220px] border-b border-r border-neutral-200 p-7 transition hover:bg-[#F29925] hover:text-white md:p-9"
            >
              <div className="flex items-start justify-between">
                <span className="font-oswald text-4xl text-neutral-200 transition group-hover:text-white/30">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>

              <h3 className="mt-12 font-montserrat text-xl font-bold">
                {type.name}
              </h3>

              <p className="mt-3 max-w-xs text-sm leading-6 text-neutral-500 transition group-hover:text-white/70">
                {type.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PropertyTypes;