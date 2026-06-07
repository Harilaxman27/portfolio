"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/**
 * Subtle platinum cursor companion.
 * - Follows the cursor with a soft spring delay.
 * - Reads `data-cursor` on hovered elements.
 * - Auto-detects buttons and nav elements for 'OPEN' or expand behavior.
 * - Hidden on touch devices and when the cursor leaves the window.
 */
export function CursorOrb() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 220, damping: 28, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 220, damping: 28, mass: 0.4 });

  const [label, setLabel] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);
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

      const target = e.target as HTMLElement;
      const explicitEl = target.closest("[data-cursor]") as HTMLElement | null;

      let newLabel = explicitEl?.dataset.cursor ?? null;
      let expand = false;

      if (!newLabel) {
        if (target.closest("button") || target.closest("a")) {
          if (target.closest("nav")) {
            expand = true;
          } else {
            newLabel = "OPEN";
          }
        } else if (target.closest("nav")) {
          expand = true;
        }
      } else if (newLabel === "EXPAND") {
        expand = true;
        newLabel = null;
      }

      setLabel(newLabel);
      setIsExpanded(expand);
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
          width: label ? 78 : isExpanded ? 40 : 22,
          height: label ? 30 : isExpanded ? 40 : 22,
        }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="flex items-center justify-center rounded-full border border-white/40 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#11284A] backdrop-blur-md"
        style={{
          background:
            "linear-gradient(135deg, rgba(35,74,125,0.4) 0%, rgba(191,214,220,0.6) 50%, rgba(221,235,237,0.85) 100%)",
          boxShadow:
            "0 0 18px rgba(191,214,220,0.45), 0 6px 22px -6px rgba(17,40,74,0.25)",
        }}
      >
        {label}
      </motion.div>
    </motion.div>
  );
}
