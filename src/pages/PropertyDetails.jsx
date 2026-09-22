import { Link, useParams } from "react-router-dom";

import {
  ArrowLeft,
  Bath,
  BedDouble,
  CheckCircle2,
  Maximize,
  MapPin,
} from "lucide-react";

import properties from "../data/properties";
import { useCurrency } from "../context/CurrencyContext";

const NGN_PER_USD = 1330;

function formatPrice(price, currency) {
  if (currency === "USD") {
    const usdPrice = price / NGN_PER_USD;

    return `$${usdPrice.toLocaleString("en-US", {
      maximumFractionDigits: 0,
    })}`;
  }

  return `₦${price.toLocaleString("en-NG")}`;
}

function PropertyDetails() {
  const { propertyId } = useParams();
  const { currency } = useCurrency();

  const property = properties.find(
    (item) => String(item.id) === String(propertyId)
  );

  if (!property) {
    return (
      <section className="flex min-h-[70vh] items-center justify-center px-5">
        <div className="text-center">
          <h1 className="font-oswald text-5xl uppercase">
            Property not found
          </h1>

          <Link
            to="/properties"
            className="mt-6 inline-flex rounded-xl bg-[#F29925] px-6 py-3 text-sm font-bold text-white"
          >
            Back to Properties
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f7f7] py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-5">
        <Link
          to="/properties"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-[#F29925]"
        >
          <ArrowLeft size={16} />
          Back to Properties
        </Link>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="overflow-hidden rounded-3xl bg-black">
              <img
                src={property.images[0]}
                alt={property.title}
                className="aspect-[4/3] h-full w-full object-cover"
              />
            </div>

            {property.images.length > 1 && (
              <div className="mt-4 grid grid-cols-2 gap-4">
                {property.images.slice(1).map((image) => (
                  <img
                    key={image}
                    src={image}
                    alt={property.title}
                    className="aspect-[4/3] w-full rounded-2xl object-cover"
                  />
                ))}
              </div>
            )}
          </div>

          <div className="rounded-3xl bg-white p-7 shadow-sm md:p-9">
            <span className="inline-flex rounded-full bg-[#F29925]/10 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#F29925]">
              {property.purpose}
            </span>

            <h1 className="mt-5 font-oswald text-4xl uppercase leading-[0.95] md:text-5xl">
              {property.title}
            </h1>

            <div className="mt-5 flex items-center gap-2 text-sm text-neutral-500">
              <MapPin size={17} className="text-[#F29925]" />
              {property.location}
            </div>

            <p className="mt-7 font-oswald text-3xl text-[#F29925]">
              {formatPrice(property.price, currency)}
            </p>

            <div className="mt-7 grid grid-cols-2 gap-3">
              {property.bedrooms > 0 && (
                <div className="rounded-xl bg-neutral-50 p-4">
                  <BedDouble size={18} className="text-[#F29925]" />

                  <p className="mt-2 text-xs text-neutral-400">
                    Bedrooms
                  </p>

                  <p className="mt-1 font-semibold">
                    {property.bedrooms}
                  </p>
                </div>
              )}

              {property.bathrooms > 0 && (
                <div className="rounded-xl bg-neutral-50 p-4">
                  <Bath size={18} className="text-[#F29925]" />

                  <p className="mt-2 text-xs text-neutral-400">
                    Bathrooms
                  </p>

                  <p className="mt-1 font-semibold">
                    {property.bathrooms}
                  </p>
                </div>
              )}

              <div className="rounded-xl bg-neutral-50 p-4">
                <Maximize size={18} className="text-[#F29925]" />

                <p className="mt-2 text-xs text-neutral-400">
                  Size
                </p>

                <p className="mt-1 font-semibold">
                  {property.area}
                </p>
              </div>

              <div className="rounded-xl bg-neutral-50 p-4">
                <CheckCircle2 size={18} className="text-[#F29925]" />

                <p className="mt-2 text-xs text-neutral-400">
                  Type
                </p>

                <p className="mt-1 font-semibold">
                  {property.type}
                </p>
              </div>
            </div>

            <div className="mt-8 border-t border-neutral-100 pt-7">
              <h2 className="font-montserrat text-sm font-bold uppercase tracking-wider">
                Property Overview
              </h2>

              <p className="mt-4 text-sm leading-7 text-neutral-500">
                {property.description}
              </p>
            </div>

            <Link
              to="/contact"
              className="mt-8 flex w-full items-center justify-center rounded-xl bg-[#F29925] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#df8213]"
            >
              Enquire About This Property
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PropertyDetails;