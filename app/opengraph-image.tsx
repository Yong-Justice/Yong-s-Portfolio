import { ImageResponse } from "next/og";

export const alt = "Yong Justice Numfor — IT & Digital Solutions Specialist";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#d9ff5b", color: "#10212e", padding: 70, fontFamily: "sans-serif" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 23, letterSpacing: 3 }}>
        <span style={{ background: "#10212e", color: "#d9ff5b", padding: "10px 13px" }}>YJ</span>
        <span style={{ width: 70, height: 2, background: "#df287f" }} />
        <span>TECHNOLOGY · SUPPORT · OPERATIONS</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 68, lineHeight: 1.02, letterSpacing: -3, maxWidth: 1000 }}>
          <span>Build useful technology.</span><span>Support people.</span><span>Make work simpler.</span>
        </div>
        <div style={{ fontSize: 25, color: "#293d49", marginTop: 32 }}>Yong Justice Numfor · IT & Digital Solutions Specialist</div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 17, color: "#41535d", letterSpacing: 2 }}>
        <span style={{ width: 9, height: 9, borderRadius: 9, background: "#df287f" }} />
        <span>BAFOUSSAM · ENGLISH + FRENCH · REMOTE + ON-SITE + RELOCATION</span>
      </div>
    </div>, size,
  );
}
