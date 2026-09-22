import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import properties from "../data/properties";

import PropertyFilters from "../components/properties/PropertyFilters";

import PropertyGrid from "../components/properties/PropertyGrid";

function Properties() {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const urlPurpose = searchParams.get("purpose") || "";
  const urlType = searchParams.get("type") || "";

  const [filters, setFilters] = useState({
    purpose:
      urlPurpose === "Buy"
        ? "For Sale"
        : urlPurpose === "Rent / Lease"
          ? "For Rent"
          : urlPurpose === "Shortlet"
            ? "Shortlet"
            : "",
    type: urlType,
    location: "",
  });

  const filteredProperties = useMemo(() => {
    const search = searchQuery.trim().toLowerCase();

    return properties.filter((property) => {
      const matchesPurpose =
        !filters.purpose ||
        property.purpose.toLowerCase() ===
          filters.purpose.toLowerCase();

      const matchesType =
        !filters.type ||
        filters.type === "All Properties" ||
        property.type.toLowerCase() ===
          filters.type.toLowerCase();

      const searchableText = [
        property.title,
        property.location,
        property.type,
        property.description,
        property.purpose,
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        !search || searchableText.includes(search);

      const matchesLocation =
        !filters.location ||
        property.location
          .toLowerCase()
          .includes(filters.location.toLowerCase());

      return (
        matchesPurpose &&
        matchesType &&
        matchesSearch &&
        matchesLocation
      );
    });
  }, [filters, searchQuery]);

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
            <span className="text-[#F29925]">
              next property.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-sm leading-7 text-white/50">
            Browse our available property opportunities and use
            the filters to narrow your search.
          </p>

          {searchQuery && (
            <div className="mt-6">
              <p className="font-oswald text-[10px] font-bold uppercase tracking-[0.22em] text-white/40">
                Search results for
              </p>

              <p className="mt-2 font-montserrat text-2xl font-semibold text-white">
                "{searchQuery}"
              </p>
            </div>
          )}
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
            {filteredProperties.length > 0 ? (
              <PropertyGrid
                properties={filteredProperties}
              />
            ) : (
              <div className="rounded-3xl border border-neutral-200 bg-white px-6 py-20 text-center shadow-sm">
                <p className="font-oswald text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
                  No Matches
                </p>

                <h2 className="mt-3 font-montserrat text-2xl font-semibold text-neutral-950">
                  No properties found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-neutral-500">
                  We couldn't find a property matching your
                  search. Try another property type, location,
                  or search term.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default Properties;