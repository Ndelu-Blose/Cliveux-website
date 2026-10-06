export const MOTION_EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

export const MOTION_DURATION = {
  reveal: 600,
  hero: 700,
} as const;

export type MotionDirection = "up" | "down" | "left" | "right" | "fade";

export const motionHidden: Record<MotionDirection, string> = {
  up: "opacity-0 translate-y-6",
  down: "opacity-0 -translate-y-6",
  left: "opacity-0 translate-x-6",
  right: "opacity-0 -translate-x-6",
  fade: "opacity-0",
};

export const motionVisible: Record<MotionDirection, string> = {
  up: "opacity-100 translate-y-0",
  down: "opacity-100 translate-y-0",
  left: "opacity-100 translate-x-0",
  right: "opacity-100 translate-x-0",
  fade: "opacity-100",
};
