
export interface Attraction {
  name: string;
  category: 'restaurant' | 'bar' | 'shop' | 'attraction';
  description: string;
  distance: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export enum LocationCategory {
  RESTAURANTS = 'Restaurants',
  BARS = 'Bars & Nightlife',
  SHOPPING = 'Shopping',
  CULTURE = 'Culture & Sights'
}
