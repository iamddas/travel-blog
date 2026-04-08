export interface Destination {
  id: string;
  name: string;
  country: string;
  tagline: string;
  imageUrl: string;
  duration: string;
  price: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  category: string;
  date: string;
  readTime: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  label: string;
  span?: "tall" | "wide" | "normal";
}

export interface StorySection {
  id: string;
  theme: "mountain" | "beach" | "city";
  heading: string;
  subheading: string;
  body: string;
  imageUrl: string;
  accent: string;
}

export interface NavLink {
  label: string;
  href: string;
}
