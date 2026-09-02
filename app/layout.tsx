import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forid Islam | Software Developer",
  description:
    "Portfolio of Forid Islam — backend and full-stack software developer.",
  keywords: [
    "Forid Islam",
    ".NET",
    "ASP.NET Core",
    "Next.js",
    "TypeScript",
    "PostgreSQL",
    "Redis",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}