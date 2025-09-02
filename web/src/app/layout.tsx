import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
 title: "AI Social Content SaaS",
 description: "Create, plan, and publish Instagram & Facebook posts with AI.",
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
 return (
 <html lang="en">
<body>{children}</body>
 </html>
 );
}
