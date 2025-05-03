import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import MemoryTimeline from './components/MemoryTimeline';
import Gallery from './components/Gallery';
import MessageBoard from './components/MessageBoard';
import FunFactsSection from './components/FunFactsSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <Header />
      <Hero />
      <MemoryTimeline />
      <Gallery />
      <FunFactsSection />
      <MessageBoard />
      <Footer />
    </div>
  );
}

export default App;