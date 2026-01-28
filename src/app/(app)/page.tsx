'use client';
import { useUser } from "@/firebase/auth/use-user";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, LayoutGrid, User, Wallet } from "lucide-react";
import Link from "next/link";

export default function NexusPage() {
  const { user, profile } = useUser();

  if (!profile) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Bienvenido de nuevo, {profile.name}</h1>
        <p className="text-muted-foreground mt-2 text-lg">Tu centro de mando para servicios de élite.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main column */}
        <div className="lg:col-span-2 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acciones Rápidas</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <QuickActionButton href="/services" icon={LayoutGrid} label="Explorar" />
              <QuickActionButton href="/agenda" icon={Calendar} label="Mi Agenda" />
              <QuickActionButton href="/profile" icon={User} label="Mi Perfil" />
              <QuickActionButton href="/billing" icon={Wallet} label="Facturación" />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Próximas Citas</CardTitle>
              <CardDescription>Tus próximos servicios agendados.</CardDescription>
            </CardHeader>
            <CardContent>
              {/* Placeholder for appointments list */}
              <div className="text-center py-8 text-muted-foreground">
                <p>No tienes citas próximas.</p>
                <Button variant="link" asChild className="mt-2">
                  <Link href="/services">Agendar un servicio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Side column */}
        <div className="space-y-8">
          <Card className="bg-card border-primary border-2">
            <CardHeader>
              <CardTitle>Completa tu Perfil</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Un perfil completo atrae más oportunidades. Asegúrate de que tu información esté al día.</p>
              <Button asChild className="w-full">
                <Link href="/profile">
                  Ir a mi Perfil <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Academia Amatrix</CardTitle>
              <CardDescription>Expande tus habilidades.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">Descubre cursos exclusivos para la red de élite y lleva tu carrera al siguiente nivel.</p>
              <Button variant="secondary" asChild className="w-full">
                <Link href="/academy">Explorar Cursos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

const QuickActionButton = ({ href, icon: Icon, label }: { href: string, icon: React.ElementType, label: string }) => (
    <Button variant="outline" asChild className="h-24 flex-col gap-2">
        <Link href={href}>
            <Icon className="h-6 w-6 text-primary" />
            <span>{label}</span>
        </Link>
    </Button>
)
