export default function ProfessionalsPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-tighter">Elite Force</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">Directorio de expertos con filtros avanzados y ratings. Encuentra al profesional verificado ideal para tu proyecto.</p>
      </header>
      <div className="flex items-center justify-center h-64 bg-card border-2 border-dashed border-border rounded-lg">
          <p className="text-muted-foreground">Directorio de profesionales próximamente...</p>
      </div>
    </div>
  );
}
