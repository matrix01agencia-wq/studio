import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { FirebaseClientProvider } from "@/firebase/client-provider";
import { FirebaseErrorListener } from "@/components/FirebaseErrorListener";
import { AppSidebar } from "@/components/layout/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Agencia Amatrix",
  description: "Servicios de élite para tus necesidades.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body className={inter.className}>
        <FirebaseClientProvider>
          <SidebarProvider>
              <div className="flex">
                <AppSidebar />
                <main className="flex-1">
                  {children}
                </main>
              </div>
            <Toaster />
            <FirebaseErrorListener />
          </SidebarProvider>
        </FirebaseClientProvider>
      </body>
    </html>
  );
}
