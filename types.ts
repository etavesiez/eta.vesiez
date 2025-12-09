import React from 'react';

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface PriceItem {
  service: string;
  unit: string;
  price: string; // Using string to handle "sur devis" or formatted numbers
}

export enum SectionId {
  HOME = 'home',
  ABOUT = 'about',
  SERVICES = 'services',
  PRICING = 'pricing',
  CONTACT = 'contact',
}