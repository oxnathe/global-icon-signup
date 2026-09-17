import PropertyCard from "./PropertyCard";

function PropertyGrid({ properties }) {
  if (!properties.length) {
    return (
      <div className="rounded-2xl border border-dashed border-neutral-300 bg-white px-6 py-20 text-center">
        <h3 className="font-montserrat text-lg font-bold">
          No properties found
        </h3>

        <p className="mt-2 text-sm text-neutral-500">
          Try changing your filters to see more properties.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}

export default PropertyGrid;