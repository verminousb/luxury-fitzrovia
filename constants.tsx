import React from 'react';
import { Attraction, LocationCategory } from './types';

export const NEIGHBORHOOD_DATA: Record<LocationCategory, Attraction[]> = {
  [LocationCategory.RESTAURANTS]: [
    { name: "Circolo Popolare", category: "restaurant", description: "Vibrant, oversized Italian trattoria with stunning interiors.", distance: "4 min walk" },
    { name: "ROKA Charlotte St", category: "restaurant", description: "Award-winning Japanese robatayaki in a chic setting.", distance: "2 min walk" },
    { name: "Pied à Terre", category: "restaurant", description: "One of London's longest-standing Michelin-starred fine dining spots.", distance: "3 min walk" },
    { name: "Berners Tavern", category: "restaurant", description: "Jason Atherton's palatial dining room in the Edition Hotel.", distance: "5 min walk" }
  ],
  [LocationCategory.BARS]: [
    { name: "The Newman Arms", category: "bar", description: "Classic historic pub with a deep literary history (George Orwell frequent).", distance: "3 min walk" },
    { name: "Charlotte Street Hotel Bar", category: "bar", description: "Cosmopolitan cocktails in a Kit Kemp-designed masterpiece.", distance: "2 min walk" },
    { name: "Reverend JW Simpson", category: "bar", description: "Hidden speakeasy in a former clergyman's flat.", distance: "4 min walk" },
    { name: "Mr Fogg's House of Botanicals", category: "bar", description: "Whimsical cocktail bar filled with rare plants and adventure tales.", distance: "5 min walk" }
  ],
  [LocationCategory.SHOPPING]: [
    { name: "John Lewis - Oxford St", category: "shop", description: "The iconic flagship department store for everything home and fashion.", distance: "8 min walk" },
    { name: "Oxford Street", category: "shop", description: "Europe's busiest shopping street with all major flagship stores.", distance: "6 min walk" },
    { name: "Liberty London", category: "shop", description: "The iconic Tudor-style department store for luxury goods.", distance: "10 min walk" },
    { name: "Selfridges", category: "shop", description: "The legendary department store on Oxford Street.", distance: "15 min walk" }
  ],
  [LocationCategory.CULTURE]: [
    { name: "The British Museum", category: "attraction", description: "Two million years of human history and culture.", distance: "12 min walk" },
    { name: "The Wallace Collection", category: "attraction", description: "A national museum in an historic house with a world-class art collection.", distance: "10 min walk" },
    { name: "Soho", category: "attraction", description: "The eclectic soul of London nightlife and entertainment.", distance: "8 min walk" },
    { name: "Dominion Theatre", category: "attraction", description: "Catch world-class West End musicals just around the corner.", distance: "7 min walk" }
  ]
};

export const PROPERTY_STATS = [
  { label: 'Bedrooms', value: '2', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>
  )},
  { label: 'Sleeps', value: '6', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  )},
  { label: 'Bathrooms', value: '2', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1 0L3 6"/><path d="M10 11H3"/><path d="M21 7V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7Z"/><path d="M13 11a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-2Z"/></svg>
  )},
  { label: 'Rating', value: '5.0 ★', icon: (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
  )},
];