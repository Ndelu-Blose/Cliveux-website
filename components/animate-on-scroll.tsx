"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
  duration?: number;
}

export function AnimateOnScroll({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 600,
}: AnimateOnScrollProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const directionClasses = {
    up: isVisible
      ? "animate-in fade-in slide-in-from-bottom-4"
      : "opacity-0 translate-y-4",
    down: isVisible
      ? "animate-in fade-in slide-in-from-top-4"
      : "opacity-0 -translate-y-4",
    left: isVisible
      ? "animate-in fade-in slide-in-from-right-4"
      : "opacity-0 translate-x-4",
    right: isVisible
      ? "animate-in fade-in slide-in-from-left-4"
      : "opacity-0 -translate-x-4",
    fade: isVisible ? "animate-in fade-in" : "opacity-0",
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        directionClasses[direction],
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

