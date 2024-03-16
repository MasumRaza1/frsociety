import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
import {
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from "../assets/images";

export const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about-us", label: "About Us" },
  { href: "#products", label: "Galary" },
  { href: "#contact-us", label: "Contact Us" },
];

export const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: bigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: bigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: bigShoe3,
  },
];

export const statistics = [
  { value: "500+", label: "Communities" },
  { value: "25k+", label: "People Served" },
  { value: "1k+", label: "Volunteers" },
];



export const products = [
  {
    imgURL: shoe4,
    name: "Purification of wealth",
    price: "❤️",
  },
  {
    imgURL: shoe5,
    name: "Spritual Growth",
    price: "❤️",
  },
  {
    imgURL: shoe6,
    name: "Blessing and Barakah",
    price: "❤️",
  },
  {
    imgURL: shoe7,
    name: "Zakat",
    price: "❤️✨",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Community Outreach",
    subtext: "We extend our services to communities in need, free of charge.",
  },
  {
    imgURL: shieldTick,
    label: "Financial Security",
    subtext: "Trust in our secure payment options for worry-free transactions.",
  },
  {
    imgURL: support,
    label: "Dedicated Assistance",
    subtext: "Count on our team for unwavering support throughout your journey.",
  },
];


export const reviews = [
  {
    imgURL: customer1,
    customerName: "jjf",
    rating: 5.0,
    feedback:
      "The impact of the charity work done by Society Charity is truly remarkable. I'm impressed by their dedication and commitment to making a positive difference in the world.",
  },
  {
    imgURL: customer2,
    customerName: "Hsha",
    rating: 5.0,
    feedback:
      "Society Charity's efforts have touched the lives of many, including mine. Their work is inspiring, and I'm grateful for the opportunity to support such a worthy cause.",
  },
];

export const footerLinks = [
  {
    title: "Initiatives",
    links: [
      { name: "Education Programs", link: "/" },
      { name: "Healthcare Services", link: "/" },
      { name: "Community Development", link: "/" },
      { name: "Environmental Projects", link: "/" },
      { name: "Disaster Relief Efforts", link: "/" },
    ],
  },

  {
    title: "Help",
    links: [
      { name: "About us", link: "#about-us" },
      { name: "FAQs", link: "/" },
      { name: "How it works", link: "/" },
      { name: "Privacy policy", link: "/" },
      { name: "Payment policy", link: "/" },
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "help.frsociety@gmail.com", link: "mailto:help.frsociety@gmail.com" },
      { name: "+000-000-000", link: "tel:+000000000" },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo" },
  { src: twitter, alt: "twitter logo" },
  { src: instagram, alt: "instagram logo" },
];
