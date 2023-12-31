import Layout from "@/component/Layout";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/reduxtoolkit/provider";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/reduxtoolkit/store/store";

const inter = Inter({ weight: ["100", "400", "500", "600", "700", "900"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Infracredit",
  description: "We provide you with the best platform to Create and Edit Reports of your choice.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Providers>
      {/* <PersistGate loading={null} persistor={persistor}> */}
      <html lang="en">
        <body className={inter.className}>
          <Layout>{children}</Layout>
        </body>
      </html>
      {/* </PersistGate> */}
    </Providers>
  );
}
