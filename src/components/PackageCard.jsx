import { motion } from "framer-motion";
import { Check, Crown } from "lucide-react";

export default function PackageCard({
  pkg,
  selected,
  onSelect,
}) {
  return (
    <motion.button
      type="button"
      onClick={() => onSelect(pkg.id)}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      className={`relative w-full overflow-hidden rounded-2xl border-2 p-6 text-left transition-all duration-300 ${
        selected
          ? "border-orange-500 bg-orange-50 shadow-xl shadow-orange-500/10"
          : "border-neutral-200 bg-white hover:border-orange-200"
      }`}
    >
      {pkg.popular && (
        <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-orange-500 px-3 py-1.5 text-[9px] font-bold tracking-wider text-white">
          <Crown size={11} />
          MOST POPULAR
        </div>
      )}

      <div className="flex items-start justify-between">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-orange-500">
            {pkg.eyebrow}
          </p>

          <h3 className="mt-2 font-montserrat text-2xl font-extrabold tracking-tight text-neutral-950">
            {pkg.name}
          </h3>

          <p className="mt-1 text-sm text-neutral-500">
            {pkg.description}
          </p>
        </div>

        <div
          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${
            selected
              ? "border-orange-500 bg-orange-500"
              : "border-neutral-300"
          }`}
        >
          {selected && (
            <Check
              size={14}
              strokeWidth={3}
              className="text-white"
            />
          )}
        </div>
      </div>

      <div className="mt-6 space-y-2.5">
        {pkg.features.map((feature) => (
          <div
            key={feature}
            className="flex items-start gap-2.5 text-xs text-neutral-600"
          >
            <Check
              size={15}
              className="mt-0.5 shrink-0 text-orange-500"
            />

            <span>{feature}</span>
          </div>
        ))}
      </div>
    </motion.button>
  );
}