"use client";

import { useEffect, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnMountProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "fade";
}

export function AnimateOnMount({
  children,
  className,
  delay = 0,
  direction = "fade",
}: AnimateOnMountProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

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
      className={cn(
        "transition-all duration-700 ease-out",
        directionClasses[direction],
        className
      )}
    >
      {children}
    </div>
  );
}



