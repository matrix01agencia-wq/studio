import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Briefcase, ArrowRight } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function RegisterProfessionalPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background p-4">
      <Card className="w-full max-w-lg shadow-2xl">
        <CardHeader className="text-center">
          <Briefcase className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-3xl font-bold tracking-tighter mt-4">Únete a la Élite de Amatrix</CardTitle>
          <CardDescription className="text-lg text-muted-foreground">Ofrece tus talentos a una red de clientes premium. Eleva tu carrera al siguiente nivel.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Nombre Completo</Label>
                    <Input id="name" placeholder="Ej: Ana Gómez" required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Correo Electrónico</Label>
                    <Input id="email" type="email" placeholder="tu@emailprofesional.com" required />
                </div>
            </div>
             <div className="space-y-2">
              <Label htmlFor="specialty">Especialidad Principal</Label>
               <Select>
                <SelectTrigger className="h-12">
                  <SelectValue placeholder="Selecciona tu área de expertise" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="digital">Ecosistema Digital</SelectItem>
                  <SelectItem value="wellness">Bienestar & Educación</SelectItem>
                  <SelectItem value="entertainment">Entertainment Hub</SelectItem>
                  <SelectItem value="home-services">Servicios Físicos</SelectItem>
                  <SelectItem value="legal-financial">Asesoría Profesional</SelectItem>
                  <SelectItem value="creative-design">Creatividad y Diseño</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label htmlFor="password">Contraseña</Label>
                    <Input id="password" type="password" required placeholder="Mínimo 8 caracteres"/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="confirm-password">Confirmar Contraseña</Label>
                    <Input id="confirm-password" type="password" required placeholder="Repite la contraseña"/>
                </div>
            </div>
            <Button type="submit" className="w-full h-12 text-lg group">
              Enviar Solicitud de Registro <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
          <div className="mt-6 text-center text-sm">
            ¿Ya eres parte de la élite?{" "}
            <Link href="/" className="font-medium text-primary hover:underline">
              Inicia Sesión Aquí
            </Link>
          </div>
           <div className="mt-2 text-center text-xs text-muted-foreground">
            El registro está sujeto a un proceso de verificación. Al enviar tu solicitud, aceptas nuestros{" "}
            <Link href="/support" className="underline hover:text-primary">Términos para Profesionales</Link>.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
