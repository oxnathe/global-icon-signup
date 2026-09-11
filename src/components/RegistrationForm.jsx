import { useState } from "react";

import { motion } from "framer-motion";

import {
  ArrowRight,
  CheckCircle2,
  LockKeyhole,
} from "lucide-react";

import emailjs from "@emailjs/browser";

import { useForm } from "react-hook-form";

import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";

import InputField from "./InputField";

import PackageCard from "./PackageCard";

import { packages } from "../data/packages";

const registrationSchema = z.object({
  fullName: z
    .string()
    .min(3, "Please enter your full name"),

  email: z
    .string()
    .email("Please enter a valid email address"),

  phone: z
    .string()
    .min(7, "Please enter a valid phone number"),

  city: z
    .string()
    .min(2, "Please enter your city"),

  terms: z.boolean().refine((value) => value === true, {
    message: "You must accept the terms and conditions",
  }),
});

export default function RegistrationForm() {
  const [selectedPackage, setSelectedPackage] =
    useState("exclusive");

  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(registrationSchema),

    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      city: "",
      terms: false,
    },
  });

  const onSubmit = async (data) => {
    const selectedProgram = packages.find(
      (pkg) => pkg.id === selectedPackage
    );

    const registrationData = {
      full_name: data.fullName,
      name: data.fullName,

      email: data.email,

      phone: data.phone,

      city: data.city,

      programme:
        selectedProgram?.name || selectedPackage,

      registration_date: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        registrationData,
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      console.log(
        "GLOBAL ICON REGISTRATION:",
        registrationData
      );

      reset({
        fullName: "",
        email: "",
        phone: "",
        city: "",
        terms: false,
      });

      setSelectedPackage("exclusive");

      setSubmitted(true);
    } catch (error) {
      console.error("EmailJS Error:", error);

      console.error(
        "EmailJS Status:",
        error?.status
      );

      console.error(
        "EmailJS Text:",
        error?.text
      );

      alert(
        `Email failed.\n\nStatus: ${
          error?.status || "Unknown"
        }\n\nError: ${
          error?.text ||
          error?.message ||
          "Unknown EmailJS error"
        }`
      );
    }
  };

  /*
   * SUCCESS STATE
   */

  if (submitted) {
    return (
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        className="rounded-3xl border border-neutral-200 bg-white px-6 py-14 text-center shadow-2xl shadow-black/5 md:px-12"
      >
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100">
          <CheckCircle2
            size={40}
            strokeWidth={1.7}
            className="text-orange-500"
          />
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
          Registration complete
        </p>

        <h2 className="mt-3 font-montserrat text-3xl font-extrabold tracking-tight text-neutral-950 md:text-4xl">
          Welcome to Global Icon
        </h2>

        <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-neutral-500">
          Your registration has been received successfully.
          Your journey starts here.
        </p>

        <button
          type="button"
          onClick={() => {
            reset({
              fullName: "",
              email: "",
              phone: "",
              city: "",
              terms: false,
            });

            setSelectedPackage("exclusive");

            setSubmitted(false);
          }}
          className="mt-8 rounded-xl bg-black px-7 py-3.5 text-sm font-bold text-white transition hover:bg-orange-500"
        >
          Back to registration
        </button>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
      className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-2xl shadow-black/5 md:p-10"
    >
      {/* Header */}

      <div className="mb-9">
        <div className="flex items-center gap-2">
          <span className="h-1 w-8 rounded-full bg-orange-500" />

          <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-orange-500">
            Registration
          </span>
        </div>

        <h2 className="mt-4 font-montserrat text-2xl font-extrabold tracking-tight text-neutral-950 md:text-3xl">
          Register for Global Icon
        </h2>

        <p className="mt-2 max-w-lg text-sm leading-6 text-neutral-500">
          Enter your details below and choose the Global
          Icon programme that's right for you.
        </p>
      </div>

      {/* Personal Information */}

      <div>
        <div className="mb-5">
          <h3 className="font-montserrat text-sm font-bold text-neutral-950">
            Personal information
          </h3>

          <div className="mt-2 h-px bg-neutral-100" />
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          <InputField
            label="Full name"
            name="fullName"
            placeholder="Enter your full name"
            required
            error={errors.fullName}
            {...register("fullName")}
          />

          <InputField
            label="Email address"
            name="email"
            type="email"
            placeholder="you@example.com"
            required
            error={errors.email}
            {...register("email")}
          />

          <InputField
            label="Phone number"
            name="phone"
            type="tel"
            placeholder="0800 000 0000"
            required
            error={errors.phone}
            {...register("phone")}
          />

          <InputField
            label="City"
            name="city"
            placeholder="Enter your city"
            required
            error={errors.city}
            {...register("city")}
          />
        </div>
      </div>

      {/* Programme */}

      <div className="mt-10">
        <div className="mb-5">
          <h3 className="font-montserrat text-sm font-bold text-neutral-950">
            Choose your programme
          </h3>

          <p className="mt-1 text-xs text-neutral-500">
            Select the programme you want to register for.
          </p>

          <div className="mt-2 h-px bg-neutral-100" />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {packages.map((pkg) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              selected={selectedPackage === pkg.id}
              onSelect={setSelectedPackage}
            />
          ))}
        </div>
      </div>

      {/* Terms */}

      <div className="mt-8">
        <label className="flex cursor-pointer items-start gap-3">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 accent-orange-500"
            {...register("terms")}
          />

          <span className="text-xs leading-5 text-neutral-500">
            I agree to Global Icon's{" "}
            <a
              href="#terms"
              className="font-semibold text-neutral-900 underline decoration-orange-500 underline-offset-2"
            >
              Terms & Conditions
            </a>{" "}
            and Privacy Policy.
          </span>
        </label>

        {errors.terms && (
          <p className="mt-2 text-xs font-medium text-red-500">
            {errors.terms.message}
          </p>
        )}
      </div>

      {/* Submit */}

      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{
          scale: 1.01,
        }}
        whileTap={{
          scale: 0.98,
        }}
        className="group mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-xl bg-orange-500 px-6 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />

            Processing...
          </>
        ) : (
          <>
            Register

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </>
        )}
      </motion.button>

      {/* Secure Information */}

      <div className="mt-6 flex items-center justify-center gap-2 text-[11px] text-neutral-400">
        <LockKeyhole size={13} />

        <span>
          Your information is handled securely
        </span>
      </div>
    </motion.form>
  );
}
