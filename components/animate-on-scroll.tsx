"use client";

import { Children, useEffect, useRef, useState, type ReactNode } from "react";
import {
  MOTION_DURATION,
  MOTION_EASE,
  motionHidden,
  motionVisible,
  type MotionDirection,
} from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: MotionDirection;
  duration?: number;
  /** Run animation only the first time the element enters view */
  once?: boolean;
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = MOTION_DURATION.reveal,
  once = true,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    setReduceMotion(prefersReduced);

    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        if (once && hasAnimated.current) return;

        hasAnimated.current = true;
        setIsVisible(true);
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -6% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  const show = reduceMotion || isVisible;

  return (
    <div
      ref={ref}
      className={cn(
        "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-none motion-reduce:blur-none",
        "transition-[opacity,transform,filter] will-change-[opacity,transform]",
        show ? motionVisible[direction] : motionHidden[direction],
        show && "will-change-auto",
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: MOTION_EASE,
      }}
    >
      {children}
    </div>
  );
}

interface AnimateOnScrollStaggerProps {
  children: ReactNode;
  className?: string;
  direction?: MotionDirection;
  stagger?: number;
  baseDelay?: number;
}

/** Wraps each direct child in a sequenced scroll reveal */
export function AnimateOnScrollStagger({
  children,
  className,
  direction = "up",
  stagger = 90,
  baseDelay = 0,
}: AnimateOnScrollStaggerProps) {
  const items = Children.toArray(children);

  return (
    <div className={className}>
      {items.map((child, index) => (
        <AnimateOnScroll
          key={index}
          direction={direction}
          delay={baseDelay + index * stagger}
        >
          {child}
        </AnimateOnScroll>
      ))}
    </div>
  );
}
