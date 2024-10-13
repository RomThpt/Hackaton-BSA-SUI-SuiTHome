import { Metadata } from "next";
import { ProvidersAndLayout } from "./ProvidersAndLayout";
import Header from "@/components/Header";
import "./globals.css";
import "@mysten/dapp-kit/dist/index.css";

export const metadata: Metadata = {
  title: "Enoki Example App",
  description: "Learn how to build a dApp with Enoki",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="stylized-background">
          <ProvidersAndLayout>
            <Header />
            <main className="container mx-auto px-4 py-8">
              {children}
            </main>
          </ProvidersAndLayout>
        </div>
      </body>
    </html>
  );
}
