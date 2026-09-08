import { motion } from "framer-motion";

export default function BrandLogo({ dark = false }) {
  return (
    <motion.a
      href="/"
      className="inline-flex items-center"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img
        src="/logo.png"
        alt="Global Icon"
        className={`h-12 w-auto object-contain ${
          dark ? "brightness-0 invert" : ""
        }`}
      />
    </motion.a>
  );
}