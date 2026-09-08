import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Company Finder",
  description:
    "A mini webapp that helps end-users find companies that offer visa sponsorship.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSansFont.className}>{children}</body>
    </html>
  );
}