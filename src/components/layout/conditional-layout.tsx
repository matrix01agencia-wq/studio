'use client';

import { usePathname } from 'next/navigation';
import { AppSidebar } from '@/components/layout/app-sidebar';
import type { ReactNode } from 'react';

// A list of routes that are considered "public" and should not display the AppSidebar.
const publicRoutes = ['/', '/login', '/register'];

export function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isPublicRoute = publicRoutes.includes(pathname);

  if (isPublicRoute) {
    // For public routes, we render the children directly.
    // The page itself (e.g., the landing page) is responsible for its own layout structure, like <main> and <footer>.
    return <>{children}</>;
  }

  // For all other "private" routes, we apply the standard layout with a sidebar.
  return (
    <div className="flex">
      <AppSidebar />
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
