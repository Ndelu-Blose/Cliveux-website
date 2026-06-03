export const MOTION_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export const MOTION_DURATION = {
  reveal: 850,
  hero: 900,
} as const;

export type MotionDirection = "up" | "down" | "left" | "right" | "fade";

export const motionHidden: Record<MotionDirection, string> = {
  up: "opacity-0 translate-y-7 blur-[4px]",
  down: "opacity-0 -translate-y-7 blur-[4px]",
  left: "opacity-0 translate-x-6 blur-[4px]",
  right: "opacity-0 -translate-x-6 blur-[4px]",
  fade: "opacity-0 blur-[2px]",
};

export const motionVisible: Record<MotionDirection, string> = {
  up: "opacity-100 translate-y-0 blur-0",
  down: "opacity-100 translate-y-0 blur-0",
  left: "opacity-100 translate-x-0 blur-0",
  right: "opacity-100 translate-x-0 blur-0",
  fade: "opacity-100 blur-0",
};
