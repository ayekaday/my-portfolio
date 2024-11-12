import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import Providers from "@/containers/providers";
import Navbar from "@/components/navbar";
import ThemeSwitch from "@/components/theme-controller";
import ThemeContextProvider from "@/containers/theme-context";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Frontend | Advance",
  description: "Frontend Advance Personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} font-Sora flex flex-col bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90  antialiased`}
      >
        {/* Gradient bg color */}
        <div className="bg-[#fbe2e3] absolute top-[-6rem] flex-1 -z-[10] right-[11rem] h-[31.25rem] w-[31.25rem] round-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#964263]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] flex-1 -z-[10] left-[-35rem] h-[31.25rem] w-[50rem] round-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg-left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]  dark:bg-[#676394]"></div>

        <ThemeContextProvider>
          <Providers>
            {" "}
            <Navbar />
            {children}
            <ThemeSwitch />
          </Providers>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
