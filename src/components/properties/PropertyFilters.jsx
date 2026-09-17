function PropertyFilters({ filters, onChange }) {
  return (
    <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
        <select
          value={filters.purpose}
          onChange={(event) =>
            onChange({ ...filters, purpose: event.target.value })
          }
          className="h-12 rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none focus:border-[#F29925]"
        >
          <option value="">Any Purpose</option>
          <option value="For Sale">For Sale</option>
          <option value="For Rent">For Rent</option>
        </select>

        <select
          value={filters.type}
          onChange={(event) =>
            onChange({ ...filters, type: event.target.value })
          }
          className="h-12 rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none focus:border-[#F29925]"
        >
          <option value="">Any Property Type</option>
          <option value="Apartment">Apartment</option>
          <option value="Detached Duplex">Detached Duplex</option>
          <option value="Duplex">Duplex</option>
          <option value="Terrace">Terrace</option>
          <option value="Land">Land</option>
          <option value="Commercial">Commercial</option>
        </select>

        <input
          value={filters.location}
          onChange={(event) =>
            onChange({ ...filters, location: event.target.value })
          }
          placeholder="Location"
          className="h-12 rounded-xl border border-neutral-200 bg-neutral-50 px-4 text-sm outline-none placeholder:text-neutral-400 focus:border-[#F29925]"
        />

        <button
          type="button"
          onClick={() =>
            onChange({
              purpose: "",
              type: "",
              location: "",
            })
          }
          className="h-12 rounded-xl bg-[#F29925] px-5 text-sm font-bold text-white transition hover:bg-[#df8213]"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}

export default PropertyFilters;