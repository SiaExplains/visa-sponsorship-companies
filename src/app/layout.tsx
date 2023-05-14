import Head from "next/head";
import "./globals.css";
import { Open_Sans } from "next/font/google";

const openSansFont = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Company Finder",
  description:
    "A mini webapp that help end-users to find companies taht offer job spnsorship VISA!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Head>
      <body className={openSansFont.className}>{children}</body>
    </html>
  );
}
