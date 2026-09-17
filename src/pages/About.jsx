import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function About() {
  return (
    <>
      <section className="bg-[#090909] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
            About Global Icon Realtors
          </p>

          <h1 className="mt-4 max-w-5xl font-oswald text-6xl uppercase leading-[0.88] md:text-8xl">
            Property decisions
            <br />
            <span className="text-[#F29925]">with purpose.</span>
          </h1>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#F29925]">
              Who We Are
            </p>

            <h2 className="mt-4 font-oswald text-5xl uppercase leading-[0.92] md:text-6xl">
              A modern
              <br />
              real estate company.
            </h2>
          </div>

          <div className="text-sm leading-8 text-neutral-500">
            <p>
              Global Icon Realtors is a property-focused company built around
              helping clients discover real estate opportunities that align
              with their goals.
            </p>

            <p className="mt-6">
              Our website brings properties, locations and essential
              information together in one clear experience so clients can
              explore opportunities before engaging our team.
            </p>

            <Link
              to="/properties"
              className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#F29925] px-6 py-4 font-bold text-white"
            >
              Explore Properties
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;