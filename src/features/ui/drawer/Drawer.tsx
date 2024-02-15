"use client";

import { useRef } from "react";
import styles from "./drawer.module.css";
import useOnClickOutside from "@/hooks/use-click-outside";
import { AnimatePresence, motion } from "framer-motion";

export const Drawer = ({ trigger, isOpen, close, content }: any) => {
  const ref = useRef(null);
  useOnClickOutside(ref, close);

  return (
    <>
      {trigger}
      <AnimatePresence>{isOpen && <Overlay />}</AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "500px" }}
            exit={{ width: 0 }}
            ref={ref}
            className={styles.wrapper}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Overlay = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.overlay}
    />
  );
};
