'use client';
import { ArrowRight, Bot, Code, ShieldCheck, Mail, Search } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    name: 'Desarrollo Web de Vanguardia',
    description: 'Interfaces ultrarrápidas y seguras con tecnología de punta para una presencia digital dominante.',
    icon: Code,
  },
  {
    name: 'Integración de Inteligencia Artificial',
    description: 'Automatiza procesos y obtén insights valiosos con modelos de IA personalizados para tu negocio.',
    icon: Bot,
  },
  {
    name: 'Ciberseguridad Inquebrantable',
    description: 'Protegemos tus activos digitales con auditorías y defensas proactivas contra amenazas emergentes.',
    icon: ShieldCheck,
  },
];

const professionals = [
    {
        name: 'Elena "Oracle" Petrova',
        title: 'Lead Architect & AI Strategist',
        avatar: 'https://picsum.photos/seed/prof1/200/200',
    },
    {
        name: 'Javier "Cipher" Reyes',
        title: 'Cybersecurity Expert',
        avatar: 'https://picsum.photos/seed/prof2/200/200',
    },
    {
        name: 'Mei "Nexus" Lin',
        title: 'UX/UI Futurist',
        avatar: 'https://picsum.photos/seed/prof3/200/200',
    },
];

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-green-400 font-mono">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-green-900/50">
        <h2 className="text-2xl font-bold tracking-widest text-white">AMATRIX</h2>
        <div className="flex items-center gap-4">
            <Link href="/login" className="text-sm hover:text-white transition-colors duration-300">
                Iniciar Sesión
            </Link>
            <Link href="/register" className="border border-green-400 px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-black transition-colors duration-300">
                Registrarse
            </Link>
        </div>
      </header>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <section className="relative text-center py-24 md:py-32">
          <div className="absolute inset-0 z-0 opacity-10" style={{
            backgroundImage: 'radial-gradient(circle, #10b981 1px, transparent 1px), radial-gradient(circle, #10b981 1px, transparent 1px)',
            backgroundSize: '30px 30px',
            backgroundPosition: '0 0, 15px 15px',
          }}></div>
          <div className="container mx-auto px-6 relative z-10">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white" style={{ textShadow: '0 0 15px rgba(16, 185, 129, 0.5)' }}>
              Conecta con la Excelencia
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto text-green-300/80 mb-8">
              Soluciones digitales de élite para la nueva era. Entra en la Matrix de la innovación.
            </p>
             <div className="relative w-full max-w-lg mx-auto">
                {/* This is a placeholder for the IntelligentSearch component */}
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Search className="h-5 w-5 text-green-400/50" />
                </div>
                <input
                    type="search"
                    placeholder="Busca un servicio: 'Análisis de datos', 'Diseño UX'..."
                    className="w-full h-12 pl-10 pr-4 bg-gray-900/50 border-2 border-green-800/50 rounded-lg text-white placeholder-green-400/30 focus:ring-green-500 focus:border-green-500 outline-none transition-all"
                    readOnly
                />
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-black">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white">Servicios de Élite</h2>
                <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.name} className="border border-green-800/50 p-8 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-green-400 hover:-translate-y-2 transition-all duration-300">
                    <div className="flex justify-center mb-6">
                    <div className="p-4 bg-green-900/50 rounded-full border border-green-700">
                        <feature.icon className="w-10 h-10 text-green-400" />
                    </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-3 text-white">{feature.name}</h3>
                    <p className="text-green-300/70 text-center text-sm leading-relaxed">
                    {feature.description}
                    </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Professionals Section */}
         <section id="professionals" className="py-20 bg-gray-900/30">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-white">Nuestra Fuerza de Élite</h2>
              <p className="text-green-300/80 mt-4 max-w-2xl mx-auto">Conoce a los arquitectos de tu futuro digital. Expertos verificados listos para actuar.</p>
              <div className="w-24 h-1 bg-green-400 mx-auto mt-4"></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {professionals.map((prof) => (
                <div key={prof.name} className="bg-gray-900/50 border border-green-800/50 rounded-lg p-6 text-center hover:shadow-2xl hover:shadow-green-500/10 transition-shadow duration-300">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <Image
                        src={prof.avatar}
                        alt={`Avatar de ${prof.name}`}
                        width={96}
                        height={96}
                        className="rounded-full border-2 border-green-500"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-white">{prof.name}</h3>
                  <p className="text-sm text-green-400/80">{prof.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-4 text-white">¿Listo para evolucionar?</h2>
            <p className="text-green-300/80 mb-8 max-w-2xl mx-auto">
              Contacta con nuestro equipo de especialistas y comienza la transformación digital de tu proyecto.
            </p>
            <Link
              href="mailto:contacto@amatrix.dev"
              className="bg-green-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-green-500 transition-transform transform hover:scale-105 inline-flex items-center"
            >
              <Mail className="mr-3 h-5 w-5" /> Contáctanos
            </Link>
          </div>
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-green-900/50 py-8">
        <div className="container mx-auto px-6 text-center text-sm text-green-300/60">
          <p>&copy; 2024 Agencia Amatrix. Todos los derechos reservados.</p>
          <div className="flex justify-center gap-4 mt-4">
            <Link href="#" className="hover:text-white">Términos de Servicio</Link>
            <Link href="#" className="hover:text-white">Política de Privacidad</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}