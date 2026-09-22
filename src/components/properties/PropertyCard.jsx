import { BedDouble, Bath, Maximize, MapPin, Phone } from "lucide-react";
import { SocialIcon } from "react-social-icons";
import { Link } from "react-router-dom";

import { useCurrency } from "../../context/CurrencyContext";

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

function PropertyCard({ property }) {
  const { currency } = useCurrency();

  const phoneNumber = "2347065114147";

  const whatsappMessage = encodeURIComponent(
    `Hello Global Icon Realtors, I'm interested in the ${property.title} in ${property.location}. Please send me more details.`
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  return (
    <article className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to={`/properties/${property.id}`}
        className="relative block aspect-[4/3] overflow-hidden"
      >
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-neutral-900">
          {property.purpose}
        </div>

        <div className="absolute bottom-4 left-4 rounded-full bg-black/75 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-md">
          {property.type}
        </div>
      </Link>

      <div className="p-5">
        <div className="flex items-start gap-2 text-neutral-400">
          <MapPin size={14} className="mt-0.5 shrink-0" />

          <p className="text-xs">
            {property.location}
          </p>
        </div>

        <Link to={`/properties/${property.id}`}>
          <h3 className="mt-3 font-montserrat text-lg font-bold leading-tight transition hover:text-[#F29925]">
            {property.title}
          </h3>
        </Link>

        <p className="mt-4 font-oswald text-2xl text-[#F29925]">
          {formatPrice(property.price, currency)}
        </p>

        <div className="mt-5 flex flex-wrap gap-4 border-t border-neutral-100 pt-4 text-xs text-neutral-500">
          {property.bedrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <BedDouble size={15} />
              {property.bedrooms} Beds
            </span>
          )}

          {property.bathrooms > 0 && (
            <span className="flex items-center gap-1.5">
              <Bath size={15} />
              {property.bathrooms} Baths
            </span>
          )}

          <span className="flex items-center gap-1.5">
            <Maximize size={15} />
            {property.area}
          </span>
        </div>

        <div className="mt-5 flex items-center gap-3 border-t border-neutral-100 pt-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`WhatsApp about ${property.title}`}
            title="WhatsApp"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#25D366] transition duration-300 hover:scale-105 hover:bg-[#1ebe5d]"
          >
            <SocialIcon
              network="whatsapp"
              url={whatsappUrl}
              bgColor="transparent"
              fgColor="#ffffff"
              style={{
                width: 26,
                height: 26,
              }}
            />
          </a>

          <a
            href="tel:+2347065114147"
            aria-label={`Call Global Icon Realtors about ${property.title}`}
            title="Call Now"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-[#071522] text-white transition duration-300 hover:scale-105 hover:bg-[#F29925] hover:text-black"
          >
            <Phone size={19} strokeWidth={2} />
          </a>

          <Link
            to={`/properties/${property.id}`}
            className="ml-auto font-oswald text-[10px] font-bold uppercase tracking-[0.12em] text-neutral-500 transition hover:text-[#F29925]"
          >
            View Property
          </Link>
        </div>
      </div>
    </article>
  );
}

export default PropertyCard;