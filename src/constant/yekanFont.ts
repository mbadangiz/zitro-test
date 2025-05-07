import localFont from "next/font/local";

export const yekanFonts = localFont({
  src: [
    {
      path: "./../../public/fonts/IRANYekanXFaNum-Black.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./../../public/fonts/IRANYekanXFaNum-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./../../public/fonts/IRANYekanXFaNum-ExtraBlack.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./../../public/fonts/IRANYekanXFaNum-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./../../public/fonts/IRANYekanXFaNum-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-yekan",
});
