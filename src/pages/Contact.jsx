import { Mail, MapPin, Phone } from "lucide-react";

function Contact() {
  return (
    <section className="bg-[#f7f7f7] py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5">
        <div className="max-w-3xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
            Contact Global Icon
          </p>

          <h1 className="mt-4 font-oswald text-6xl uppercase leading-[0.88] md:text-8xl">
            Let's talk
            <br />
            <span className="text-[#F29925]">property.</span>
          </h1>

          <p className="mt-7 max-w-xl text-sm leading-7 text-neutral-500">
            Tell us what you are looking for and our team can help you explore
            available property opportunities.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          <a
            href="tel:+2349019028248"
            className="rounded-2xl border border-neutral-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Phone className="text-[#F29925]" size={23} />

            <h2 className="mt-8 font-montserrat font-bold">
              Call Us
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              +234 901 902 8248
            </p>
          </a>

          <div className="rounded-2xl border border-neutral-200 bg-white p-7">
            <MapPin className="text-[#F29925]" size={23} />

            <h2 className="mt-8 font-montserrat font-bold">
              Location
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Lagos, Nigeria
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-white p-7">
            <Mail className="text-[#F29925]" size={23} />

            <h2 className="mt-8 font-montserrat font-bold">
              Enquiries
            </h2>

            <p className="mt-2 text-sm text-neutral-500">
              Contact our team for property enquiries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;