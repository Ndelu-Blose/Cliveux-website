"use client";

import { useEffect, useState, type ReactNode } from "react";
import {
  MOTION_DURATION,
  MOTION_EASE,
  motionHidden,
  motionVisible,
  type MotionDirection,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimateOnMountProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: MotionDirection;
  duration?: number;
}

export function AnimateOnMount({
  children,
  className,
  delay = 0,
  direction = "fade",
  duration = MOTION_DURATION.hero,
}: AnimateOnMountProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduceMotion(prefersReduced);

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const show = reduceMotion || isVisible;

  return (
    <div
      className={cn(
        "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-none motion-reduce:blur-none",
        "transition-[opacity,transform,filter] will-change-[opacity,transform]",
        show ? motionVisible[direction] : motionHidden[direction],
        show && "will-change-auto",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: reduceMotion ? "0ms" : `${delay}ms`,
        transitionTimingFunction: MOTION_EASE,
      }}
    >
      {children}
    </div>
  );
}
