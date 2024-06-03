import React from "react";
import { motion } from "framer-motion";

export default function Layouts({ children, classname }) {
  return (
    <>
      <motion.div
        animate={{ opacity: 1, scale: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: "easeIn",
        }}
        className={`w-full min-h-screen ${classname} overflow-hidden`}
      >
        {children}
      </motion.div>
    </>
  );
}
