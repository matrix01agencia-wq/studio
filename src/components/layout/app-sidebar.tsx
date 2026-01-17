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
  CalendarDays,
  Wallet,
  LogIn
} from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useUser } from '@/firebase/auth/use-user';

const navItems = [
  { href: '/', icon: LayoutDashboard, label: 'Inicio', tooltip: 'Nexus' },
  { href: '/services', icon: Grid3x3, label: 'Servicios', tooltip: 'Matrix de Servicios' },
  { href: '/professionals', icon: Users, label: 'Profesionales', tooltip: 'Fuerza de Élite' },
  { href: '/agenda', icon: CalendarDays, label: 'Agenda', tooltip: 'Mi Agenda' },
  { href: '/academy', icon: BookOpen, label: 'Academia', tooltip: 'Amatrix Learn' },
  { href: '/tracking', icon: Map, label: 'Seguimiento', tooltip: 'Live Tracker' },
  { href: '/billing', icon: Wallet, label: 'Facturación', tooltip: 'Centro Financiero' },
  { href: '/support', icon: MessageSquare, label: 'Soporte', tooltip: 'Protocolo de Soporte' },
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
  const { user, profile } = useUser();

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
         {user && profile ? (
            <SidebarMenuItem>
                <Link href="/profile" passHref>
                <SidebarMenuButton
                    asChild
                    isActive={pathname.startsWith('/profile')}
                    tooltip={{ children: 'Mi Perfil', className:"bg-accent text-accent-foreground border-accent" }}
                >
                    <div className='flex items-center gap-2'>
                        <Avatar className="h-7 w-7">
                            <AvatarImage src={profile.avatarUrl} data-ai-hint="person avatar" alt={profile.name || "User"} />
                            <AvatarFallback>{profile.name?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col text-left group-data-[collapsible=icon]:hidden">
                            <span className="text-sm font-semibold text-foreground">{profile.name}</span>
                            <span className="text-xs text-muted-foreground capitalize">{profile.role}</span>
                        </div>
                    </div>
                </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
         ) : (
            <SidebarMenuItem>
                <Link href="/login" passHref>
                    <SidebarMenuButton
                        asChild
                        isActive={pathname.startsWith('/login')}
                        tooltip={{ children: 'Iniciar Sesión', className:"bg-accent text-accent-foreground border-accent" }}
                    >
                        <div>
                            <LogIn />
                            <span>Iniciar Sesión</span>
                        </div>
                    </SidebarMenuButton>
                </Link>
            </SidebarMenuItem>
         )}
      </SidebarFooter>
    </Sidebar>
  );
}
