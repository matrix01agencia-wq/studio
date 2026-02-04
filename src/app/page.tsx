import { ArrowRight, Bot, Code, ShieldCheck, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-black min-h-screen text-green-400 font-mono">
      {/* Header */}
      <header className="container mx-auto px-6 py-4 flex justify-between items-center border-b border-green-900/50">
        <h2 className="text-2xl font-bold tracking-widest text-white">AMATRIX</h2>
        <Link href="#contact" className="border border-green-400 px-4 py-2 rounded-md text-sm hover:bg-green-400 hover:text-black transition-colors duration-300">
          Contacto
        </Link>
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
            <Link
              href="#services"
              className="bg-green-400 text-black font-bold py-3 px-8 rounded-md text-lg hover:bg-green-500 transition-transform transform hover:scale-105 inline-flex items-center"
            >
              Explorar Servicios <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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
              {/* Service 1 */}
              <div className="border border-green-800/50 p-8 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-green-400 hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-green-900/50 rounded-full border border-green-700">
                    <Code className="w-10 h-10 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-white">Desarrollo Web Avanzado</h3>
                <p className="text-green-300/70 text-center text-sm leading-relaxed">
                  Interfaces ultrarrápidas y seguras con tecnología de vanguardia para una presencia digital dominante.
                </p>
              </div>
              {/* Service 2 */}
              <div className="border border-green-800/50 p-8 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-green-400 hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-6">
                   <div className="p-4 bg-green-900/50 rounded-full border border-green-700">
                    <Bot className="w-10 h-10 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-white">Integración de IA</h3>
                <p className="text-green-300/70 text-center text-sm leading-relaxed">
                  Automatiza procesos y obtén insights con modelos de IA personalizados para tu negocio.
                </p>
              </div>
              {/* Service 3 */}
              <div className="border border-green-800/50 p-8 rounded-lg bg-gray-900/20 backdrop-blur-sm hover:border-green-400 hover:-translate-y-2 transition-all duration-300">
                <div className="flex justify-center mb-6">
                   <div className="p-4 bg-green-900/50 rounded-full border border-green-700">
                    <ShieldCheck className="w-10 h-10 text-green-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-3 text-white">Ciberseguridad Inquebrantable</h3>
                <p className="text-green-300/70 text-center text-sm leading-relaxed">
                  Protegemos tus activos digitales con auditorías y defensas proactivas contra amenazas emergentes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contact" className="py-20 text-center bg-gray-900/30">
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
        </div>
      </footer>
    </div>
  );
}
