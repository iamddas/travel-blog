import type { Destination, BlogPost, GalleryImage, StorySection } from "@/types";

export const destinations: Destination[] = [
  {
    id: "1",
    name: "Santorini",
    country: "Greece",
    tagline: "Clifftop villages & azure infinity",
    imageUrl:
      "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80",
    duration: "7 nights",
    price: "From $3,200",
  },
  {
    id: "2",
    name: "Kyoto",
    country: "Japan",
    tagline: "Ancient temples & cherry blossoms",
    imageUrl:
      "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80",
    duration: "10 nights",
    price: "From $4,100",
  },
  {
    id: "3",
    name: "Patagonia",
    country: "Argentina",
    tagline: "Raw wilderness at the end of the earth",
    imageUrl:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    duration: "14 nights",
    price: "From $5,800",
  },
  {
    id: "4",
    name: "Amalfi Coast",
    country: "Italy",
    tagline: "Dramatic cliffs & cerulean seas",
    imageUrl:
      "https://images.unsplash.com/photo-1633321702518-7feccafb94d5?w=800&q=80",
    duration: "8 nights",
    price: "From $3,900",
  },
  {
    id: "5",
    name: "Marrakech",
    country: "Morocco",
    tagline: "Labyrinthine medinas & desert gold",
    imageUrl:
      "https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80",
    duration: "6 nights",
    price: "From $2,600",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Art of Slow Travel in Southern Italy",
    excerpt:
      "Forget the tourist trail. Here is how we discovered the true soul of the Mezzogiorno over six unhurried weeks.",
    imageUrl:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=600&q=80",
    category: "Culture",
    date: "Mar 28, 2026",
    readTime: "8 min",
  },
  {
    id: "2",
    title: "Inside the World's Most Remote Luxury Lodges",
    excerpt:
      "From the Mongolian steppe to the Namibian desert, we stayed where civilization ends and wonder begins.",
    imageUrl:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80",
    category: "Stays",
    date: "Mar 15, 2026",
    readTime: "12 min",
  },
  {
    id: "3",
    title: "Japan in Spring: A Pilgrimage Along the Kumano Kodō",
    excerpt:
      "The ancient pilgrimage route through the Kii Peninsula offers more than scenery — it offers transformation.",
    imageUrl:
      "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80",
    category: "Adventure",
    date: "Feb 28, 2026",
    readTime: "10 min",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&q=80",
    alt: "Mountain valley",
    label: "Swiss Alps",
    span: "tall",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80",
    alt: "Tropical beach",
    label: "Maldives",
    span: "normal",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80",
    alt: "City skyline",
    label: "Tokyo at Night",
    span: "normal",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&q=80",
    alt: "Desert dunes",
    label: "Sahara",
    span: "normal",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?w=600&q=80",
    alt: "Northern lights",
    label: "Iceland Aurora",
    span: "tall",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600&q=80",
    alt: "Japanese temple",
    label: "Fushimi Inari",
    span: "normal",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1534430480872-3498386e7856?w=600&q=80",
    alt: "Coastal village",
    label: "Cinque Terre",
    span: "normal",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?w=600&q=80",
    alt: "Tropical forest",
    label: "Amazon Basin",
    span: "normal",
  },
];

export const storySections: StorySection[] = [
  {
    id: "mountain",
    theme: "mountain",
    heading: "Where peaks\ntouch clouds",
    subheading: "The Alpine Experience",
    body: "Ascend beyond the treeline into a world of glacial silence. Our curated mountain journeys take you to lodges perched at elevation, where the air is thin and the views are endless.",
    imageUrl:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&q=80",
    accent: "#7eb3c9",
  },
  {
    id: "beach",
    theme: "beach",
    heading: "Time dissolves\nat the shore",
    subheading: "Coastal Sanctuaries",
    body: "Barefoot luxury on shores where few have stood. Private atolls, overwater pavilions, and the unhurried rhythm of the tide — this is how the world is meant to slow down.",
    imageUrl:
      "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1200&q=80",
    accent: "#5b9e8f",
  },
  {
    id: "city",
    theme: "city",
    heading: "Cities that\nnever sleep",
    subheading: "Urban Odysseys",
    body: "Dive into the living, breathing pulse of the world's great metropolises. From rooftop dinners to hidden galleries, our urban curators unlock the city only insiders know.",
    imageUrl:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1200&q=80",
    accent: "#c9a45b",
  },
];
