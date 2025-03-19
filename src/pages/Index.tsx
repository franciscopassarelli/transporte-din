
import React, { useEffect } from 'react';
import { 
  Truck, Bus, ShieldCheck, Clock, BarChart3, Settings, Users, Car,
  MapPin, Phone, Mail
} from 'lucide-react';
import { Button } from '@/components/ui/button';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AnimatedElement from '@/components/AnimatedElement';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import AppointmentForm from '@/components/AppointmentForm';
import ScrollToTop from '@/components/ScrollToTop';
import Loader from '@/components/Loader';

const Index = () => {
  useEffect(() => {
    // Create a custom cursor
    const cursorElement = document.createElement('div');
    cursorElement.classList.add('custom-cursor');
    document.body.appendChild(cursorElement);
    
    // Update cursor position
    document.addEventListener('mousemove', (e) => {
      cursorElement.style.left = `${e.clientX}px`;
      cursorElement.style.top = `${e.clientY}px`;
    });
    
    // Scale cursor on links and buttons
    const interactiveElements = document.querySelectorAll('a, button');
    interactiveElements.forEach((element) => {
      element.addEventListener('mouseenter', () => {
        cursorElement.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorElement.style.opacity = '0.5';
      });
      
      element.addEventListener('mouseleave', () => {
        cursorElement.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorElement.style.opacity = '1';
      });
    });
    
    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      cursorElement.style.opacity = '0';
    });
    
    // Show cursor when entering window
    document.addEventListener('mouseenter', () => {
      cursorElement.style.opacity = '1';
    });
    
    return () => {
      document.body.removeChild(cursorElement);
    };
  }, []);
  
  return (
    <main className="relative">
      <Loader />
      <Navbar />
      <ScrollToTop />
      
      {/* Hero Section */}
      <section id="home" className="pt-28 md:pt-40 pb-20 md:pb-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <AnimatedElement animation="slide-right" className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  Transporte de Calidad Superior
                </span>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Soluciones de Transporte
                  <span className="text-primary"> Minero y Petrolero</span>
                </h1>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={400}>
                <p className="text-muted-foreground text-lg mb-8 max-w-lg">
                  Brindamos servicios de transporte confiables, seguros y eficientes adaptados 
                  a las necesidades específicas de la industria minera y petrolera.
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={600}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="btn-hover-effect">
                    Conocer Servicios
                  </Button>
                  <Button size="lg" variant="outline" className="btn-hover-effect">
                    Contactar
                  </Button>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="md:w-1/2">
              <AnimatedElement animation="slide-left" delay={300}>
                <div className="relative">
                  <div className="absolute -left-6 -top-6 w-24 h-24 bg-primary/10 rounded-full animate-rotate-slow"></div>
                  <div className="absolute -right-6 -bottom-6 w-16 h-16 bg-accent rounded-full animate-rotate-slow"></div>
                  <div className="relative overflow-hidden rounded-xl shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1531761535209-180857e963b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                      alt="Transporte Minero"
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
          
          <AnimatedElement animation="slide-up" delay={800}>
            <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground text-sm">Años de Experiencia</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
                <p className="text-muted-foreground text-sm">Vehículos en Flota</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">200+</h3>
                <p className="text-muted-foreground text-sm">Clientes Satisfechos</p>
              </div>
              
              <div className="text-center">
                <h3 className="text-3xl font-bold text-primary mb-2">0</h3>
                <p className="text-muted-foreground text-sm">Accidentes Graves</p>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent -z-10"></div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Nuestros Servicios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Soluciones de Transporte Especializadas
              </h2>
              <p className="text-muted-foreground">
                Ofrecemos una amplia gama de servicios de transporte diseñados específicamente 
                para satisfacer las necesidades únicas de la industria minera y petrolera.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" delay={100}>
              <ServiceCard
                title="Transporte Minero"
                description="Servicio especializado para traslado de personal a zonas mineras, con vehículos adaptados para terrenos difíciles y condiciones extremas."
                icon={Truck}
              />
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={200}>
              <ServiceCard
                title="Transporte Petrolero"
                description="Traslado seguro de personal a campos petroleros y zonas de extracción, cumpliendo con todos los estándares de seguridad de la industria."
                icon={Bus}
              />
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={300}>
              <ServiceCard
                title="Transporte Ejecutivo"
                description="Servicio premium para ejecutivos y personal directivo, con vehículos de lujo y choferes profesionales para garantizar comodidad y puntualidad."
                icon={Car}
              />
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={400}>
              <ServiceCard
                title="Seguridad Garantizada"
                description="Todos nuestros vehículos cuentan con sistemas avanzados de seguridad, GPS y monitoreo constante para garantizar la integridad de todos los pasajeros."
                icon={ShieldCheck}
              />
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={500}>
              <ServiceCard
                title="Puntualidad"
                description="Nos comprometemos a cumplir rigurosamente con los horarios establecidos, optimizando rutas y anticipando posibles contratiempos."
                icon={Clock}
              />
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={600}>
              <ServiceCard
                title="Servicios Personalizados"
                description="Adaptamos nuestros servicios a las necesidades específicas de cada cliente, ofreciendo soluciones a medida para cada proyecto."
                icon={Settings}
              />
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-16">
              <AnimatedElement animation="slide-right">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Sobre Nosotros
                </span>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  15 Años de Experiencia en Transporte Especializado
                </h2>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={400}>
                <p className="text-muted-foreground mb-6">
                  Dynamic Transport nació de la necesidad de brindar servicios de calidad y 
                  seguridad en el traslado de personal para la industria minera y petrolera. 
                  A lo largo de los años, hemos construido una reputación sólida basada en 
                  la confianza, profesionalismo y excelencia operativa.
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={600}>
                <p className="text-muted-foreground mb-8">
                  Nuestra misión es ofrecer soluciones de transporte que no solo cumplan, sino 
                  que excedan las expectativas de nuestros clientes, garantizando la seguridad y 
                  comodidad de todo el personal que trasladamos diariamente.
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={800}>
                <Button className="btn-hover-effect">
                  Conocer Más
                </Button>
              </AnimatedElement>
            </div>
            
            <div className="lg:w-1/2">
              <AnimatedElement animation="slide-left" delay={300}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <img
                      src="https://images.unsplash.com/photo-1570129476815-ba368ac77013?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                      alt="Equipo"
                      className="rounded-tl-xl rounded-bl-xl w-full h-auto mb-4"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                      alt="Reunión"
                      className="rounded-bl-xl w-full h-auto"
                    />
                  </div>
                  <div className="mt-6">
                    <img
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                      alt="Vehículo"
                      className="rounded-tr-xl w-full h-auto mb-4"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                      alt="Análisis"
                      className="rounded-br-xl w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedElement>
            </div>
          </div>
          
          <AnimatedElement animation="slide-up" delay={800}>
            <div className="mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                      <ShieldCheck className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Seguridad</h3>
                  <p className="text-muted-foreground text-sm">
                    Máxima prioridad en todos nuestros servicios y operaciones
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Profesionalismo</h3>
                  <p className="text-muted-foreground text-sm">
                    Personal altamente capacitado y comprometido con la excelencia
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                      <BarChart3 className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Eficiencia</h3>
                  <p className="text-muted-foreground text-sm">
                    Optimización de recursos y tiempos para maximizar resultados
                  </p>
                </div>
                
                <div className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-primary/10 p-3 w-12 h-12 flex items-center justify-center">
                      <Settings className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Innovación</h3>
                  <p className="text-muted-foreground text-sm">
                    Constante actualización tecnológica y mejora de procesos
                  </p>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <div className="absolute top-0 left-0 w-1/2 h-full bg-primary/5 -z-10"></div>
      </section>
      
      {/* Fleet Section */}
      <section id="fleet" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Nuestra Flota
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vehículos Modernos y Seguros
              </h2>
              <p className="text-muted-foreground">
                Contamos con una flota de vehículos modernos, equipados con tecnología de punta 
                y mantenidos bajo estrictos estándares de calidad y seguridad.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="scale-in" delay={100}>
              <div className="overflow-hidden rounded-xl group relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1583937443566-6fe1a1c9150b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Camioneta 4x4"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Camionetas 4x4</h3>
                  <p className="text-sm text-white/80">
                    Ideales para terrenos difíciles y condiciones extremas. Equipadas con sistemas 
                    de seguridad avanzados y comunicación satelital.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="scale-in" delay={200}>
              <div className="overflow-hidden rounded-xl group relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1545623703-583dd2364bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Minibuses"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Minibuses</h3>
                  <p className="text-sm text-white/80">
                    Capacidad para hasta 20 pasajeros, con aire acondicionado, asientos reclinables 
                    y sistemas de entretenimiento para trayectos largos.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="scale-in" delay={300}>
              <div className="overflow-hidden rounded-xl group relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1577032064941-9b7d15ad1537?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Sedanes Ejecutivos"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Sedanes Ejecutivos</h3>
                  <p className="text-sm text-white/80">
                    Vehículos de lujo para traslado de ejecutivos y directivos, con choferes 
                    profesionales y todos los servicios premium.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="scale-in" delay={400}>
              <div className="overflow-hidden rounded-xl group relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1592838064575-70ed626d3a0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Buses de Larga Distancia"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Buses de Larga Distancia</h3>
                  <p className="text-sm text-white/80">
                    Equipados para viajes largos, con baño, aire acondicionado, WiFi y todas 
                    las comodidades para el traslado de personal.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="scale-in" delay={500}>
              <div className="overflow-hidden rounded-xl group relative">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1507470855518-770fab8aa7fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                    alt="Vehículos Especializados"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">Vehículos Especializados</h3>
                  <p className="text-sm text-white/80">
                    Adaptados para necesidades específicas, como traslado de personal con 
                    equipamiento especial o para zonas de difícil acceso.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            
            <AnimatedElement animation="scale-in" delay={600}>
              <div className="rounded-xl bg-primary/10 p-6 flex flex-col items-center justify-center h-full">
                <h3 className="text-xl font-semibold mb-4">¿Necesitas un Vehículo Especial?</h3>
                <p className="text-center text-muted-foreground mb-6">
                  Contamos con soluciones de transporte personalizadas para cualquier necesidad específica.
                </p>
                <Button className="btn-hover-effect">
                  Consultar Opciones
                </Button>
              </div>
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <AnimatedElement animation="fade-in">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                Testimonios
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lo Que Dicen Nuestros Clientes
              </h2>
              <p className="text-muted-foreground">
                La satisfacción de nuestros clientes es nuestra mayor recompensa y motivación 
                para seguir mejorando cada día.
              </p>
            </div>
          </AnimatedElement>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatedElement animation="slide-up" delay={100}>
              <TestimonialCard
                quote="Llevamos más de 5 años trabajando con Dynamic Transport y su servicio ha sido impecable. La puntualidad y seguridad en el traslado de nuestro personal a zonas mineras remotas ha sido fundamental para nuestra operación."
                author="Carlos Rodríguez"
                position="Gerente de Operaciones"
                company="Minera Andina"
                rating={5}
              />
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={200}>
              <TestimonialCard
                quote="El nivel de profesionalismo y atención a los detalles nos impresionó desde el primer día. Sus vehículos siempre están en perfectas condiciones y sus conductores son extremadamente profesionales."
                author="María Fernández"
                position="Directora de Logística"
                company="Petro Sur"
                rating={5}
              />
            </AnimatedElement>
            
            <AnimatedElement animation="slide-up" delay={300}>
              <TestimonialCard
                quote="Cuando necesitamos servicios especializados para nuestros ejecutivos, Dynamic Transport siempre cumple con nuestras altas expectativas. Recomendaría sus servicios sin dudarlo."
                author="Jorge Méndez"
                position="CEO"
                company="Grupo Empresarial Minero"
                rating={5}
              />
            </AnimatedElement>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/2">
              <AnimatedElement animation="slide-right">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                  Contáctanos
                </span>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={200}>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  ¿Listo para Agendar una Consulta?
                </h2>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={400}>
                <p className="text-muted-foreground mb-8">
                  Complete el formulario y uno de nuestros asesores se pondrá en contacto 
                  contigo para discutir tus necesidades de transporte y ofrecerte la 
                  mejor solución.
                </p>
              </AnimatedElement>
              
              <AnimatedElement animation="slide-right" delay={600}>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Dirección</h3>
                      <p className="text-muted-foreground text-sm">
                        Av. Principal 1234, Santiago, Chile
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Teléfono</h3>
                      <p className="text-muted-foreground text-sm">
                        +56 9 1234 5678
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 text-primary mt-0.5" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-muted-foreground text-sm">
                        info@dynamictransport.cl
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedElement>
            </div>
            
            <div className="lg:w-1/2">
              <AnimatedElement animation="slide-left" delay={300}>
                <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
                  <h3 className="text-xl font-semibold mb-6">Agendar Consulta</h3>
                  <AppointmentForm />
                </div>
              </AnimatedElement>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Index;
