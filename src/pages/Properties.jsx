import { useMemo, useState } from "react";
import properties from "../data/properties";
import PropertyFilters from "../components/properties/PropertyFilters";
import PropertyGrid from "../components/properties/PropertyGrid";

function Properties() {
  const [filters, setFilters] = useState({
    purpose: "",
    type: "",
    location: "",
  });

  const filteredProperties = useMemo(() => {
    return properties.filter((property) => {
      const matchesPurpose =
        !filters.purpose || property.purpose === filters.purpose;

      const matchesType =
        !filters.type || property.type === filters.type;

      const matchesLocation =
        !filters.location ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      return matchesPurpose && matchesType && matchesLocation;
    });
  }, [filters]);

  return (
    <>
      <section className="bg-[#090909] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
            Global Icon Properties
          </p>

          <h1 className="mt-4 max-w-4xl font-oswald text-6xl uppercase leading-[0.9] md:text-8xl">
            Find your
            <br />
            <span className="text-[#F29925]">next property.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50">
            Browse our available property opportunities and use the filters to
            narrow your search.
          </p>
        </div>
      </section>

      <section className="bg-[#f7f7f7] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <PropertyFilters
            filters={filters}
            onChange={setFilters}
          />

          <div className="mt-10 flex items-center justify-between">
            <p className="text-sm text-neutral-500">
              <strong className="text-neutral-950">
                {filteredProperties.length}
              </strong>{" "}
              properties available
            </p>
          </div>

          <div className="mt-7">
            <PropertyGrid properties={filteredProperties} />
          </div>
        </div>
      </section>
    </>
  );
}

export default Properties;