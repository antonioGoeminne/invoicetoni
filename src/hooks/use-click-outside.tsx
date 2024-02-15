"use client";
import { useEffect } from "react";

function useOnClickOutside(ref: any, handler: any, noRef?: any) {
  useEffect(() => {
    const listener = (event: any) => {
      const el = ref?.current;
      const noEl = noRef?.current;
      if (
        !el ||
        el.contains(event.target) ||
        (noEl && noEl.contains(event.target))
      ) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler, noRef]);
}

export default useOnClickOutside;
