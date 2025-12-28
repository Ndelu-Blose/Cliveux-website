export function track(event: string, props?: Record<string, unknown>) {
  // Works now (console), and later you can swap to GA/Meta without changing components
  try {
    // eslint-disable-next-line no-console
    console.log("[track]", event, props ?? {});
  } catch {}

  // Optional: Google Analytics (gtag)
  // @ts-ignore
  if (typeof window !== "undefined" && window.gtag) {
    // @ts-ignore
    window.gtag("event", event, props ?? {});
  }
}


