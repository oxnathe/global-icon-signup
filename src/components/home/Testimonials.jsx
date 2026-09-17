import { Quote } from "lucide-react";

function Testimonials() {
  return (
    <section className="bg-[#f7f7f7] py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F29925]/10 text-[#F29925]">
          <Quote size={24} />
        </div>

        <p className="mt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
          Client Experience
        </p>

        <h2 className="mt-4 font-oswald text-4xl uppercase leading-tight md:text-6xl">
          Your property journey
          <br />
          deserves attention.
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-neutral-500">
          Real client testimonials will be displayed here as Global Icon
          Realtors builds its verified collection of client experiences.
        </p>
      </div>
    </section>
  );
}

export default Testimonials;