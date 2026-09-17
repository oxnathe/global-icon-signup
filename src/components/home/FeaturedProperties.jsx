import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import properties from "../../data/properties";
import PropertyCard from "../properties/PropertyCard";

function FeaturedProperties() {
  const featured = properties.filter((property) => property.featured);

  return (
    <section className="bg-[#f7f7f7] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
              Featured Properties
            </p>

            <h2 className="mt-4 font-oswald text-5xl uppercase leading-[0.92] text-neutral-950 md:text-7xl">
              Spaces worth
              <br />
              discovering.
            </h2>
          </div>

          <Link
            to="/properties"
            className="group inline-flex items-center gap-2 text-sm font-bold text-neutral-900"
          >
            View all properties
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;