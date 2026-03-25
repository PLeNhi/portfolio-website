import Image from "next/image";

export default function Icon() {
  return new Response(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <rect fill="#a78bfa" width="16" height="16"/>
      <text x="8" y="12" font-size="10" font-weight="bold" text-anchor="middle" fill="white" font-family="system-ui">
        N
      </text>
    </svg>`,
    {
      headers: {
        "Content-Type": "image/svg+xml",
      },
    }
  );
}
