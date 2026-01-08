import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Edit, ShieldCheck, Wallet, History, LogOut } from "lucide-react";


export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
        <Card className="bg-card border-border">
            <CardHeader className="relative">
                <div className="flex flex-col md:flex-row items-center gap-6">
                    <Avatar className="h-28 w-28 border-4 border-primary">
                        <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHwxfHxhdmF0YXJ8ZW58MHx8fHwxNzE3MjE0MjU3fDA&ixlib=rb-4.1.0&q=80&w=1080" data-ai-hint="person avatar" alt="User" />
                        <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 justify-center md:justify-start">
                           <h1 className="text-3xl font-bold">Usuario</h1>
                           <ShieldCheck className="w-7 h-7 text-primary" />
                        </div>
                        <p className="text-muted-foreground">usuario@amatrix.com</p>
                        <div className="mt-2 flex gap-2 justify-center md:justify-start">
                            <Badge variant="secondary">Cliente</Badge>
                            <Badge variant="outline">Miembro desde 2024</Badge>
                        </div>
                    </div>
                </div>
                <Button variant="outline" size="icon" className="absolute top-4 right-4">
                    <Edit className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <Separator className="my-6" />
                <div className="grid md:grid-cols-3 gap-4 text-center">
                    <div className="p-4 bg-background rounded-lg">
                        <h3 className="text-2xl font-bold">12</h3>
                        <p className="text-muted-foreground">Servicios Completados</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                        <h3 className="text-2xl font-bold">5</h3>
                        <p className="text-muted-foreground">Servicios en Proceso</p>
                    </div>
                    <div className="p-4 bg-background rounded-lg">
                        <h3 className="text-2xl font-bold">$1,250</h3>
                        <p className="text-muted-foreground">Gastado</p>
                    </div>
                </div>
                 <Separator className="my-6" />
                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <Button variant="outline" className="justify-start h-12 text-base gap-3"><Wallet/> Billetera</Button>
                    <Button variant="outline" className="justify-start h-12 text-base gap-3"><History/> Historial de Servicios</Button>
                    <Button variant="outline" className="justify-start h-12 text-base gap-3"><Edit/> Editar Perfil</Button>
                    <Button variant="destructive" className="justify-start h-12 text-base gap-3"><LogOut/> Cerrar Sesión</Button>
                 </div>
            </CardContent>
        </Card>
    </div>
  );
}
