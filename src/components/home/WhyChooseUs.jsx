import { CheckCircle2 } from "lucide-react";

const reasons = [
  "Carefully selected property opportunities",
  "Clear and professional property information",
  "Client-focused property guidance",
  "Strategic locations and investment opportunities",
  "A structured property discovery experience",
  "Professional support throughout your transaction",
];

function WhyChooseUs() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
              Why Global Icon
            </p>

            <h2 className="mt-4 font-oswald text-5xl uppercase leading-[0.92] md:text-7xl">
              More than
              <br />
              a property.
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-500">
              We focus on connecting clients with property opportunities that
              align with their goals, location preferences and lifestyle.
            </p>
          </div>

          <div className="rounded-3xl bg-[#f7f7f7] p-7 md:p-10">
            <div className="grid gap-5">
              {reasons.map((reason) => (
                <div key={reason} className="flex gap-4">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#F29925]"
                  />

                  <p className="text-sm font-medium text-neutral-700">
                    {reason}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;