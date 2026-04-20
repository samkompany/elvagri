import { useState } from 'react';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import Domaines from './sections/Domaines';
import Team from './sections/Team';
import Partners from './sections/Partners';
import Gallery from './sections/Gallery';
import GalleryPage from './sections/GalleryPage';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

function App() {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <Services onServiceClick={(index) => setOpenServiceIndex(index)} />
        <About />
        <Domaines />
        <Team />
        <Partners />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      {/* Page galerie plein écran */}
      {openServiceIndex !== null && (
        <GalleryPage
          serviceIndex={openServiceIndex}
          onClose={() => setOpenServiceIndex(null)}
          onNavigate={(index) => setOpenServiceIndex(index)}
        />
      )}
    </div>
  );
}

export default App;
