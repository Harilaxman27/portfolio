"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle platinum cursor companion.
 * - Follows the cursor with a soft spring delay.
 * - Reads `data-cursor="VIEW" | "VERIFY"` on hovered elements to show a small label.
 * - Hidden on touch devices and when the cursor leaves the window.
 */
export function CursorOrb() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.4 });

  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(hover: none)").matches) {
      setEnabled(false);
      return;
    }

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
      const el = (e.target as HTMLElement)?.closest("[data-cursor]") as HTMLElement | null;
      setLabel(el?.dataset.cursor ?? null);
    };
    const leave = () => setVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      style={{ x: sx, y: sy, opacity: visible ? 1 : 0 }}
      className="pointer-events-none fixed left-0 top-0 z-[100] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
    >
      <motion.div
        animate={{
          width: label ? 78 : 20,
          height: label ? 30 : 20,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="flex items-center justify-center rounded-full border border-white/40 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#11213F] backdrop-blur-md"
        style={{
          background:
            "linear-gradient(135deg, rgba(221,244,247,0.78) 0%, rgba(233,240,247,0.78) 50%, rgba(246,232,223,0.78) 100%)",
          boxShadow: "0 6px 20px -6px rgba(17,33,63,0.30)",
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
