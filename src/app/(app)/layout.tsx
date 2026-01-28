'use client';
import { SidebarProvider, Sidebar, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/app-sidebar';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <main className="flex-1 p-4 sm:p-6 lg:p-8 bg-background">
            {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
