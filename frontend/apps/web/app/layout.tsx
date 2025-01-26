import '@coinbase/onchainkit/styles.css'; 
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Providers } from "./providers";

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Beaver | AI AGENTS",
  description: "Beaver | AI AGENTS, Fast | Secure | Reliable",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable}antialiased`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}