'use client';

import {
  Sidebar,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  LayoutDashboard,
  Grid3x3,
  Users,
  BookOpen,
  MessageSquare,
  Map,
  User,
  PanelLeft,
  Settings,
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from '../ui/button';

const navItems = [
  { href: '/', icon: LayoutDashboard, label: 'Inicio', tooltip: 'Inicio (Nexus)' },
  { href: '/services', icon: Grid3x3, label: 'Servicios', tooltip: 'Matrix Catalog' },
  { href: '/professionals', icon: Users, label: 'Profesionales', tooltip: 'Elite Force' },
  { href: '/academy', icon: BookOpen, label: 'Academia', tooltip: 'Amatrix Learn' },
  { href: '/support', icon: MessageSquare, label: 'Contacto', tooltip: 'Support Protocol' },
  { href: '/tracking', icon: Map, label: 'Seguimiento', tooltip: 'Live Tracker' },
];

const AmatrixLogo = () => (
    <div className="flex items-center gap-2 px-2">
        <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 7L12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 22V12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M22 7L12 12" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17 4.5L7 9.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
      <h1 className="text-xl font-bold text-primary tracking-wider group-data-[collapsible=icon]:hidden">
        AMATRIX
      </h1>
    </div>
);


export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center justify-between">
            <AmatrixLogo />
            <div className="group-data-[collapsible=icon]:hidden">
                <SidebarTrigger>
                    <PanelLeft />
                </SidebarTrigger>
            </div>
        </div>
      </SidebarHeader>

      <SidebarMenu className="flex-1 p-2">
        {navItems.map((item) => (
          <SidebarMenuItem key={item.href}>
            <Link href={item.href} passHref>
              <SidebarMenuButton
                asChild
                isActive={pathname === item.href}
                tooltip={{ children: item.tooltip, className:"bg-accent text-accent-foreground border-accent" }}
              >
                <div>
                  <item.icon />
                  <span>{item.label}</span>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>

      <SidebarFooter className="p-2">
         <SidebarMenuItem>
            <Link href="/profile" passHref>
              <SidebarMenuButton
                asChild
                isActive={pathname.startsWith('/profile')}
                tooltip={{ children: 'Identity', className:"bg-accent text-accent-foreground border-accent" }}
              >
                <div className='flex items-center gap-2'>
                    <Avatar className="h-7 w-7">
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdmF0YXJ8ZW58MHx8fHwxNzE3MjE0MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080" data-ai-hint="person avatar" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="flex flex-col text-left group-data-[collapsible=icon]:hidden">
                        <span className="text-sm font-semibold text-foreground">Usuario</span>
                        <span className="text-xs text-muted-foreground">Cliente</span>
                    </div>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
      </SidebarFooter>
    </Sidebar>
  );
}
