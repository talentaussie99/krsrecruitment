import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export interface JobPosition {
  title: string;
  location: string;
  type: string;
  applyUrl?: string;
}

export interface Review {
  id: number;
  name: string;
  role: string;
  content: string;
}