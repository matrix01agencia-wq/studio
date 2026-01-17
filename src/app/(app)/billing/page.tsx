import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CreditCard, Download, Plus, Trash2, Wallet } from "lucide-react";
import Link from "next/link";

const transactions = [
    { id: "TRX-001", date: "2024-07-28", description: "Pago por Ecosistema Digital 360°", amount: -2500.00, status: "Completado" },
    { id: "TRX-002", date: "2024-07-27", description: "Suscripción Plan Élite (Mensual)", amount: -99.99, status: "Completado" },
    { id: "TRX-003", date: "2024-07-25", description: "Reembolso por cancelación de servicio", amount: 150.00, status: "Completado" },
    { id: "TRX-004", date: "2024-07-22", description: "Depósito de fondos", amount: 3000.00, status: "Completado" },
    { id: "TRX-005-P", date: "2024-07-29", description: "Pago pendiente: Auditoría de Ciberseguridad", amount: -1200.00, status: "Pendiente" },
];

const invoices = [
    { id: "INV-001", date: "2024-07-28", total: 2500.00, service: "Ecosistema Digital 360°" },
    { id: "INV-002", date: "2024-06-27", total: 99.99, service: "Suscripción Plan Élite" },
    { id: "INV-003", date: "2024-06-15", total: 800.00, service: "Coaching de Liderazgo" },
];

export default function BillingPage() {
    return (
        <div className="container mx-auto p-4 md:p-8 space-y-12">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Centro Financiero Amatrix</h1>
                <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">Control total y transparente sobre tus finanzas. Gestiona tus pagos, suscripciones y facturas con la seguridad y eficiencia que mereces.</p>
            </header>

            <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                    <Card className="bg-card border-border shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between">
                            <div>
                                <CardTitle className="text-2xl">Historial de Transacciones</CardTitle>
                                <CardDescription>Cada movimiento, registrado con precisión milimétrica.</CardDescription>
                            </div>
                            <Link href="/support">
                                <Button>
                                    <Download className="mr-2" />
                                    Exportar Reporte
                                </Button>
                            </Link>
                        </CardHeader>
                        <CardContent>
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Descripción</TableHead>
                                        <TableHead className="hidden sm:table-cell">Fecha</TableHead>
                                        <TableHead className="text-right">Monto</TableHead>
                                        <TableHead className="text-center">Estado</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {transactions.map((tx) => (
                                        <TableRow key={tx.id}>
                                            <TableCell>
                                                <p className="font-medium">{tx.description}</p>
                                                <p className="text-xs text-muted-foreground">{tx.id}</p>
                                            </TableCell>
                                            <TableCell className="hidden sm:table-cell">{tx.date}</TableCell>
                                            <TableCell className={`text-right font-mono ${tx.amount > 0 ? 'text-green-400' : 'text-foreground'}`}>
                                                {tx.amount.toLocaleString('es-US', { style: 'currency', currency: 'USD' })}
                                            </TableCell>
                                            <TableCell className="text-center">
                                                <Badge variant={tx.status === 'Completado' ? 'default' : tx.status === 'Pendiente' ? 'destructive' : 'secondary'}>
                                                    {tx.status}
                                                </Badge>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-8">
                    <Card className="bg-card border-border shadow-lg text-center">
                        <CardHeader>
                            <CardTitle className="flex items-center justify-center gap-2 text-primary"><Wallet /> Saldo Actual</CardTitle>
                            <p className="text-4xl font-bold font-mono tracking-tight">$350.01</p>
                            <CardDescription>Fondos disponibles para tus próximos proyectos.</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link href="/support" className="w-full">
                                <Button size="lg" className="w-full">
                                    <Plus className="mr-2" />
                                    Añadir Fondos
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>

                    <Card className="bg-card border-border shadow-lg">
                        <CardHeader>
                            <CardTitle>Métodos de Pago</CardTitle>
                            <CardDescription>Tus tarjetas, seguras y listas para usar.</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-background rounded-lg border">
                                <div className="flex items-center gap-3">
                                    <CreditCard className="w-6 h-6 text-primary" />
                                    <div>
                                        <p className="font-semibold">Visa **** 4242</p>
                                        <p className="text-sm text-muted-foreground">Expira 12/2026</p>
                                    </div>
                                </div>
                                <Link href="/support">
                                    <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                                </Link>
                            </div>
                            <Link href="/support" className="w-full">
                                <Button variant="outline" className="w-full mt-2">
                                    <Plus className="mr-2" />
                                    Añadir Nuevo Método
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <section id="subscriptions-and-invoices" className="grid md:grid-cols-2 gap-8">
                <Card className="bg-card border-border shadow-lg">
                    <CardHeader>
                        <CardTitle>Gestionar Suscripciones</CardTitle>
                        <CardDescription>Controla tus planes activos y maximiza tus beneficios.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                         <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-primary/50">
                            <div>
                                <p className="font-bold text-lg text-primary">Plan Élite</p>
                                <p className="text-sm text-muted-foreground">Se renueva el 27/08/2024</p>
                            </div>
                            <Link href="/support">
                                <Button variant="destructive">Cancelar</Button>
                            </Link>
                         </div>
                         <p className="text-center text-muted-foreground text-sm p-4">No tienes otras suscripciones. <Link href="/services" className="text-primary hover:underline">Explora nuestros planes</Link> para desbloquear todo el potencial de Amatrix.</p>
                    </CardContent>
                </Card>
                <Card className="bg-card border-border shadow-lg">
                    <CardHeader>
                        <CardTitle>Historial de Facturas</CardTitle>
                        <CardDescription>Descarga tus facturas para un registro contable impecable.</CardDescription>
                    </CardHeader>
                    <CardContent>
                         <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Factura</TableHead>
                                    <TableHead>Fecha</TableHead>
                                    <TableHead className="text-right">Acción</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {invoices.map((inv) => (
                                    <TableRow key={inv.id}>
                                        <TableCell>
                                            <p className="font-medium">{inv.id}</p>
                                            <p className="text-xs text-muted-foreground">{inv.service}</p>
                                        </TableCell>
                                        <TableCell>{inv.date}</TableCell>
                                        <TableCell className="text-right">
                                            <Link href="/support">
                                                <Button variant="outline" size="sm"><Download className="mr-2 h-4 w-4"/> PDF</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                         </Table>
                    </CardContent>
                </Card>
            </section>

            <section id="billing-faq" className="py-12">
                <h2 className="text-3xl font-bold text-center text-primary mb-8">Preguntas Frecuentes sobre Facturación</h2>
                <Accordion type="single" collapsible className="max-w-3xl mx-auto">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-lg">¿Cómo se garantiza la seguridad de mis datos de pago?</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            Utilizamos encriptación de grado militar y nos asociamos con los procesadores de pago más seguros del mundo. Tus datos financieros nunca se almacenan en nuestros servidores, garantizando un blindaje total.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-lg">¿Qué sucede si un servicio no cumple mis expectativas?</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            Nuestra Garantía Amatrix te protege. Si un servicio no es satisfactorio, mediamos para encontrar una solución. Si no es posible, procesamos un reembolso a tu saldo Amatrix de forma rápida y sin complicaciones.
                        </AccordionContent>
                    </AccordionItem>
                     <AccordionItem value="item-3">
                        <AccordionTrigger className="text-lg">¿Puedo usar mi saldo para pagos parciales?</AccordionTrigger>
                        <AccordionContent className="text-base text-muted-foreground">
                            ¡Absolutamente! Tu saldo Amatrix es flexible. Puedes usarlo para cubrir el costo total o parcial de cualquier servicio. Si el saldo no es suficiente, puedes completar el pago con uno de tus métodos de pago guardados en una transacción única y transparente.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </section>
        </div>
    );
}
