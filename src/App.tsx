import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutIsland } from './components/AboutIsland';
import { CottagesSection } from './components/CottagesSection';
import { ExperiencesSection } from './components/ExperiencesSection';
import { DiningSection } from './components/DiningSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingContact } from './components/FloatingContact';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedCottageId, setSelectedCottageId] = useState<string | undefined>(undefined);
  const [initialBookingData, setInitialBookingData] = useState<{
    checkIn?: string;
    checkOut?: string;
    guests?: number;
  }>({});

  const handleOpenBooking = (
    cottageId?: string,
    initialData?: { checkIn?: string; checkOut?: string; guests?: number }
  ) => {
    setSelectedCottageId(cottageId);
    if (initialData) {
      setInitialBookingData(initialData);
    }
    setBookingModalOpen(true);
  };

  const handleExploreCottages = () => {
    const el = document.getElementById('cottages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800 flex flex-col selection:bg-amber-800 selection:text-white">
      {/* Top Navbar */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenBooking={handleOpenBooking}
          onExploreCottages={handleExploreCottages}
        />

        <AboutIsland />

        <CottagesSection onOpenBooking={handleOpenBooking} />

        <ExperiencesSection />

        <DiningSection />

        <PhotoGallerySection />

        <ReviewsSection />

        <LocationSection />

        <FaqSection />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Floating Action Buttons */}
      <FloatingContact onOpenBooking={() => handleOpenBooking()} />

      {/* Reservation & WhatsApp Inquiry Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        defaultCottageId={selectedCottageId}
        initialData={initialBookingData}
      />
    </div>
  );
}
