import { motion } from "framer-motion";

import {
  ArrowDown,
  ArrowRight,
  Building2,
  CheckCircle2,
  GraduationCap,
  ShieldCheck,
  Users,
} from "lucide-react";
import { SocialIcon } from "react-social-icons";

import BrandLogo from "./components/BrandLogo";
import RegistrationForm from "./components/RegistrationForm";

function App() {
  return (
    <main>
      {/* =========================
          HERO SECTION
      ========================== */}

      {/* Decorative Elements */}
      <section className="relative overflow-hidden bg-black">
        <div className="pointer-events-none absolute -bottom-60 -left-40 h-[500px] w-[500px] rounded-full border border-[#F29925]/10" />

        <div className="pointer-events-none absolute right-[25%] top-[25%] h-2 w-2 rounded-full bg-[#F29925]" />

        <div className="relative mx-auto max-w-7xl px-5">
          {/* =========================
              NAVIGATION
          ========================== */}

          <nav className="flex items-center justify-between py-6">
            <BrandLogo dark />

            <div className="hidden items-center gap-6 text-[10px] font-bold tracking-[0.18em] text-white/40 md:flex">
              <span>REAL ESTATE</span>

              <span className="text-[#F29925]">•</span>

              <span>DIGITAL MARKETING</span>

              <span className="text-[#F29925]">•</span>

              <span>BUSINESS</span>
            </div>

            <a
              href="#register"
              className="rounded-full border border-white/15 px-5 py-2.5 text-xs font-bold text-white transition hover:border-[#F29925] hover:bg-[#F29925]"
            >
              Register
            </a>
          </nav>

          {/* =========================
              HERO CONTENT
          ========================== */}

          <div className="grid min-h-[650px] items-center gap-16 py-16 lg:grid-cols-[1.1fr_0.9fr]">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -35 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#F29925]/20 bg-[#F29925]/10 px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F29925]" />

                <span className="text-[9px] font-bold tracking-[0.22em] text-[#F29925]">
                  WELCOME TO GLOBAL ICON
                </span>
              </div>

              <h1 className="font-oswald text-6xl font-medium uppercase leading-[0.9] tracking-tight text-white sm:text-7xl lg:text-[110px]">
                Build.
                <br />

                <span className="text-[#F29925]">Learn.</span>

                <br />
                Become.
              </h1>

              <p className="mt-8 max-w-xl text-sm leading-7 text-white/55 md:text-base">
                Develop practical knowledge, sharpen your skills and position
                yourself for opportunities in real estate, digital marketing
                and business.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#register"
                  className="group flex items-center gap-3 rounded-xl bg-[#F29925] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#F29925]"
                >
                  Start your journey

                  <ArrowRight
                    size={17}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <a
                  href="#programmes"
                  className="flex items-center rounded-xl border border-white/10 px-6 py-4 text-sm font-semibold text-white/70 transition hover:bg-white/5 hover:text-white"
                >
                  View programmes
                </a>
              </div>

              {/* STATS */}

              <div className="mt-12 flex flex-wrap gap-8">
                <Stat
                  icon={<Users size={16} />}
                  value="Community"
                  label="Driven learning"
                />

                <Stat
                  icon={<Building2 size={16} />}
                  value="Real Estate"
                  label="Industry knowledge"
                />

                <Stat
                  icon={<GraduationCap size={16} />}
                  value="Practical"
                  label="Skills development"
                />
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative hidden lg:block"
            >
              <div className="relative mx-auto h-[480px] w-[480px]">
                <div className="absolute inset-0 rounded-[45px] border border-white/10 bg-white/[0.02] backdrop-blur-sm" />

                <div className="absolute left-16 top-16 h-64 w-64 rounded-full bg-[#F29925]/20 blur-[90px]" />

                <div className="absolute inset-10 rounded-[35px] border border-[#F29925]/10" />

                <div className="absolute inset-20 flex items-center justify-center rounded-[30px] border border-white/10 bg-black/40">
                  <img
                    src="/logo.png"
                    alt="Global Icon"
                    className="w-56 brightness-0 invert"
                  />
                </div>

                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -right-5 top-24 rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl"
                >
                  <ShieldCheck
                    size={28}
                    className="text-[#F29925]"
                  />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{
                    duration: 4.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -bottom-4 left-2 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl"
                >
                  <p className="text-[9px] font-bold tracking-[0.2em] text-[#F29925]">
                    GLOBAL ICON
                  </p>

                  <p className="mt-1 text-sm font-semibold text-white">
                    Your next level starts here.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* SCROLL INDICATOR */}

        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/25">
          <ArrowDown size={18} />
        </div>
      </section>

      {/* =========================
          PROGRAMMES SECTION
      ========================== */}

      <section
        id="programmes"
        className="border-b border-neutral-200 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            {/* TEXT */}

            <div>
              <p className="text-[10px] font-bold tracking-[0.22em] text-[#F29925]">
                OUR PROGRAMMES
              </p>

              <h2 className="mt-4 font-oswald text-5xl uppercase leading-[0.95] text-neutral-950 md:text-6xl">
                Choose
                <br />
                your path.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-7 text-neutral-500">
                Choose a programme based on where you are today and where you
                want to go next.
              </p>
            </div>

            {/* CARDS */}

            <div className="grid gap-5 md:grid-cols-2">
              <ProgrammeCard
                number="01"
                title="Advanced"
                description="Real estate training designed to develop strong practical industry knowledge."
              />

              <ProgrammeCard
                number="02"
                title="Exclusive"
                description="A comprehensive programme combining real estate and digital marketing."
                featured
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          REGISTRATION SECTION
      ========================== */}

      <section
        id="register"
        className="bg-[#f7f7f7] px-5 py-20 md:py-28"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <p className="text-[10px] font-bold tracking-[0.22em] text-[#F29925]">
              TAKE THE FIRST STEP
            </p>

            <h2 className="mt-4 font-oswald text-4xl uppercase leading-tight text-neutral-950 md:text-6xl">
              Start your Global Icon journey
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-neutral-500">
              Complete the form below and select the programme that best
              matches your goals.
            </p>
          </div>

          <RegistrationForm />
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}

      <footer className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-5 py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            {/* BRAND */}

            <div>
              <BrandLogo dark />

              <p className="mt-4 max-w-sm text-xs leading-6 text-white/35">
                A network of Real Estate Millionaires
              </p>
            </div>

            {/* SOCIAL ICONS */}

            <div className="flex gap-3">
              {/* INSTAGRAM */}

              <SocialIcon
                url="https://www.instagram.com/globaliconrealtorsgroup?stkn=YTJ3b2g4dmpnd2Fl"
                bgColor="#E4405F"
                fgColor="#ffffff"
                style={{
                  width: 40,
                  height: 40,
                }}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Global Icon on Instagram"
              />
            </div>
          </div>

          {/* COPYRIGHT */}

          <div className="mt-10 border-t border-white/10 pt-6 text-[10px] text-white/25">
            © {new Date().getFullYear()} Global Icon. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}

/* =========================
   STAT COMPONENT
========================== */

function Stat({ icon, value, label }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-[#F29925]">
        {icon}
      </div>

      <div>
        <p className="text-xs font-semibold text-white">{value}</p>

        <p className="text-[10px] text-white/30">{label}</p>
      </div>
    </div>
  );
}

/* =========================
   PROGRAMME CARD
========================== */

function ProgrammeCard({
  number,
  title,
  description,
  featured = false,
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      className={`rounded-2xl border p-7 ${
        featured
          ? "border-[#F29925] bg-[#F29925] text-white shadow-xl shadow-[#F29925]/20"
          : "border-neutral-200 bg-neutral-50 text-neutral-950"
      }`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`font-oswald text-4xl ${
            featured ? "text-white/30" : "text-neutral-200"
          }`}
        >
          {number}
        </span>

        <CheckCircle2
          size={20}
          className={
            featured ? "text-white" : "text-[#F29925]"
          }
        />
      </div>

      <h3 className="mt-10 font-montserrat text-xl font-extrabold">
        {title}
      </h3>

      <p
        className={`mt-3 text-sm leading-6 ${
          featured ? "text-white/70" : "text-neutral-500"
        }`}
      >
        {description}
      </p>
    </motion.div>
  );
}

export default App;