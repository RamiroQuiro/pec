import Header from "./landing/Header";
import CardInfoBajoHeader from "./landing/CardInfoBajoHeader";
import Nosotros from "./landing/Nosotros";
import MisionVision from "./landing/MisionVision";
import TestimoniosArticulos from "./landing/TestimoniosArticulos";
import Contacto from "./landing/Contacto";
import Footer from "./landing/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-primary-200">
      {/* Hero Section */}
      <Header />
      <CardInfoBajoHeader />
      <Nosotros />
      <MisionVision />
      <TestimoniosArticulos />
      <Contacto />
      <Footer />
    </main>
  );
}
