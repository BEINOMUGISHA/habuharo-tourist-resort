export interface Cottage {
  id: string;
  name: string;
  tagline: string;
  category: 'Cottage' | 'Suite' | 'Banda';
  priceUSD: number;
  priceUGX: number;
  capacity: string;
  bedType: string;
  view: string;
  description: string;
  image: string;
  additionalImages: string[];
  amenities: string[];
  features: string[];
}

export interface Experience {
  id: string;
  title: string;
  category: 'Water' | 'Wildlife' | 'Culture' | 'Adventure';
  duration: string;
  description: string;
  highlight: string;
  image: string;
}

export interface Review {
  id: string;
  author: string;
  origin: string;
  date: string;
  rating: number;
  comment: string;
  travelerType: 'Solo' | 'Couple' | 'Family' | 'Tour Group';
}

export interface DiningHighlight {
  title: string;
  description: string;
  tag: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'Transfers' | 'Accommodation' | 'Activities' | 'Travel Info';
}

export interface BookingState {
  checkIn: string;
  checkOut: string;
  cottageId: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  boatTransferNeeded: boolean;
  specialRequests: string;
}
