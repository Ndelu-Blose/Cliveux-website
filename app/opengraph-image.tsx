import { ImageResponse } from "next/og"

export const alt = "CliveUX - Digital solutions for South African SMMEs"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0d0d0d",
          color: "#ffffff",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              background: "#d4a52a",
              color: "#0d0d0d",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            CX
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: -0.5 }}>CliveUX</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, fontWeight: 300, lineHeight: 1.05, letterSpacing: -2 }}>
            Digital solutions for
          </div>
          <div style={{ fontSize: 76, fontWeight: 400, lineHeight: 1.1, letterSpacing: -2, color: "#d4a52a" }}>
            businesses ready to grow
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: "rgba(255,255,255,0.7)" }}>
            Websites · Business Systems · Digital Support
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(212,165,42,0.5)",
            paddingTop: 28,
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          <div>Built for South African SMMEs</div>
          <div>cliveux.co.za · Durban, KZN</div>
        </div>
      </div>
    ),
    size
  )
}
