import { LucideIcon } from 'lucide-react';

export interface Course {
  id: string;
  title: string;
  duration: string;
  level: string;
  tags: string[];
  image: string;
  features: string[];
  type: 'card' | 'wide' | 'large';
  avgSalary?: string;
  role?: string;
}

export interface Review {
  id: string;
  name: string;
  role: string;
  targetRole: string;
  image: string;
  content: string;
  rating: number;
  isTop?: boolean;
}

export interface Plan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  priceDetail: string;
  features: string[];
  highlight?: boolean;
  buttonText: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  outcome: string;
  image: string;
  gradient: string;
}