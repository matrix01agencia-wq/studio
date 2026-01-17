import { SidebarProvider, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/app-sidebar';
import { SidebarTrigger } from '@/components/ui/sidebar';
import { PanelLeft } from 'lucide-react';

export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="sticky top-0 z-10 flex h-14 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm md:hidden">
            <SidebarTrigger>
              <PanelLeft />
            </SidebarTrigger>
            <h1 className="text-lg font-bold text-primary">AMATRIX</h1>
          </header>
          {children}
        </SidebarInset>
      </SidebarProvider>
  );
}
