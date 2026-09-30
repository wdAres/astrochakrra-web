import { ConfigProvider } from 'antd';
import { antdTheme } from './theme/antdTheme';
import { BookingProvider } from './context/BookingContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Topics from './components/Topics';
import About from './components/About';
import Process from './components/Process';
import Services from './components/Services';
import Packages from './components/Packages';
import Trust from './components/Trust';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import ClosingCTA from './components/ClosingCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BookingModal from './components/BookingModal';

export default function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      <BookingProvider>
        <div className="min-h-screen bg-cream font-body text-ink">
          <Navbar />
          <main>
            <Hero />
            <Topics />
            <About />
            <Process />
            <Services />
            <Packages />
            <Trust />
            <Testimonials />
            <FAQ />
            <ClosingCTA />
          </main>
          <Footer />
          <WhatsAppButton />
          <BookingModal />
        </div>
      </BookingProvider>
    </ConfigProvider>
  );
}
