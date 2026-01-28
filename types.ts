
export enum Screen {
  Landing = 'landing',
  Login = 'login',
  Checkout = 'checkout',
  Dashboard = 'dashboard'
}

export interface Module {
  id: string;
  number: string;
  title: string;
  description: string;
  duration: string;
  status: 'locked' | 'unlocked' | 'completed';
  image: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  rating: number;
}
