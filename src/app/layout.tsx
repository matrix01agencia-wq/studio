import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from "@/firebase/client-provider";
import { FirebaseErrorListener } from "@/components/FirebaseErrorListener";
import { SidebarProvider } from "@/components/ui/sidebar";
import { ConditionalLayout } from "@/components/layout/conditional-layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agencia Amatrix",
  description: "Servicios de élite para tus necesidades.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <FirebaseClientProvider>
          <SidebarProvider>
              <ConditionalLayout>
                {children}
              </ConditionalLayout>
            <Toaster />
            <FirebaseErrorListener />
          </SidebarProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
