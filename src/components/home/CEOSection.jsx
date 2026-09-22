import { ArrowUpRight } from "lucide-react";

function CEOSection() {
  return (
    <section className="overflow-hidden bg-[#071522] py-24 text-white md:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_0.85fr] lg:gap-20">
          {/* LEFT — MESSAGE */}
          <div>
            <p className="font-oswald text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F29925]">
              A Word From Our CEO
            </p>

            <h2 className="mt-5 max-w-2xl font-montserrat text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Building more than
              <span className="block text-[#F29925]">
                property transactions.
              </span>
            </h2>

            <div className="mt-8 max-w-xl space-y-5 text-sm leading-7 text-white/60 md:text-base">
              <p>
                At Global Icon Realtors, we believe real estate is about more
                than buying and selling property. It is about creating
                opportunities, building lasting relationships and helping
                people make confident decisions about their future.
              </p>

              <p>
                Our vision is to build a real estate company defined by trust,
                professionalism and access to exceptional property
                opportunities across Lagos and beyond.
              </p>
            </div>

            <div className="mt-9 flex items-end justify-between gap-6 border-t border-white/10 pt-7">
              <div>
                <p className="font-montserrat text-base font-bold">
                  Precious Onyinyechi Ndukwe-Onwuka
                </p>

                <p className="mt-1 font-oswald text-[10px] uppercase tracking-[0.18em] text-white/40">
                  Founder & CEO
                </p>
              </div>

              <div className="hidden h-12 w-12 items-center justify-center rounded-full border border-[#F29925]/40 text-[#F29925] sm:flex">
                <ArrowUpRight size={20} />
              </div>
            </div>
          </div>

          {/* RIGHT — CEO IMAGE */}
          <div className="relative">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#F29925]/10 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="aspect-[4/5]">
                <img
                  src="/images/ceo/ceo.jpeg"
                  alt="[Precious Onyinyechi Ndukwe-Onwuka], Founder & CEO of Global Icon Realtors"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071522] via-[#071522]/60 to-transparent px-6 pb-6 pt-20">
                <p className="font-oswald text-[10px] uppercase tracking-[0.2em] text-[#F29925]">
                  Global Icon Realtors
                </p>

                <p className="mt-2 font-montserrat text-xl font-bold">
                  Precious Onyinyechi Ndukwe-Onwuka
                </p>

                <p className="mt-1 text-xs text-white/50">
                  Founder & CEO
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-5 hidden h-24 w-24 border-l-2 border-b-2 border-[#F29925] md:block" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CEOSection;