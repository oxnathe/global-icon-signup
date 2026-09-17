import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="bg-[#F29925] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-white/60">
              Start Your Property Journey
            </p>

            <h2 className="mt-4 max-w-3xl font-oswald text-5xl uppercase leading-[0.9] text-white md:text-7xl">
              Let's find your
              <br />
              next property.
            </h2>
          </div>

          <Link
            to="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-black px-7 py-4 text-sm font-bold text-white transition hover:bg-neutral-900"
          >
            Contact Global Icon
            <ArrowRight
              size={17}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CTA;