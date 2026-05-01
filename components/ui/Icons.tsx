import type { SVGProps } from "react";

export const ArrowRight = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
  </svg>
);

export const ArrowUpRight = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="14" height="14" {...p}>
    <path d="M7 17 17 7M9 7h8v8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" />
  </svg>
);

export const ArrowLeft = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...p}>
    <path d="M19 12H5M11 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>
);

export const ArrowRightLg = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="18" height="18" {...p}>
    <path d="M5 12h14M13 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
  </svg>
);

export const Whatsapp = (p: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden {...p}>
    <path
      fill="currentColor"
      d="M19.05 4.91A10.07 10.07 0 0 0 12.04 2C6.55 2 2.08 6.47 2.08 11.96c0 1.76.46 3.48 1.34 4.99L2 22l5.2-1.36a9.96 9.96 0 0 0 4.84 1.23h.01c5.49 0 9.96-4.47 9.96-9.96a9.92 9.92 0 0 0-2.96-7Zm-7.01 15.32h-.01a8.27 8.27 0 0 1-4.21-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.26 8.26 0 0 1-1.27-4.43c0-4.57 3.72-8.29 8.3-8.29a8.27 8.27 0 0 1 8.28 8.3c0 4.57-3.72 8.26-8.33 8.26Zm4.55-6.18c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.49-.41-.42-.56-.43H8.6c-.17 0-.43.06-.66.31s-.87.85-.87 2.07c0 1.22.89 2.4 1.02 2.56.13.17 1.76 2.69 4.27 3.77.6.26 1.06.42 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.28Z"
    />
  </svg>
);
