"use client";

import { useRef } from "react";
import styles from "./drawer.module.css";
import useOnClickOutside from "@/hooks/use-click-outside";
import { AnimatePresence, motion } from "framer-motion";

interface drawerProps {
  trigger: any;
  isOpen: boolean;
  close: () => void;
  content: any;
}

export const Drawer = ({ trigger, isOpen, close, content }: drawerProps) => {
  const ref = useRef(null);
  useOnClickOutside(ref, close);

  return (
    <>
      {trigger}
      <AnimatePresence>{isOpen && <Overlay />}</AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ left: -500 }}
            animate={{ left: 0 }}
            exit={{ left: -500 }}
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
