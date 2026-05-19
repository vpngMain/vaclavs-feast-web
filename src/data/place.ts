// Real data fetched from Google Places (Restaurace U Václava, Krupka)
// Place ID: ChIJ1Y7NpCmQCUcRHzAsci1xVHI

import photo1 from "@/assets/google/photo-1.jpg";
import photo2 from "@/assets/google/photo-2.jpg";
import photo3 from "@/assets/google/photo-3.jpg";
import photo4 from "@/assets/google/photo-4.jpg";
import photo5 from "@/assets/google/photo-5.jpg";
import photo6 from "@/assets/google/photo-6.jpg";
import photo7 from "@/assets/google/photo-7.jpg";
import photo8 from "@/assets/google/photo-8.jpg";
import photo9 from "@/assets/google/photo-9.jpg";
import photo10 from "@/assets/google/photo-10.jpg";

export const place = {
  name: "Restaurace U Václava",
  address: "Revoluční 16, Unčín, 417 42 Krupka",
  phone: "+420 417 861 700",
  phoneHref: "tel:+420417861700",
  rating: 4.5,
  reviewCount: 1100,
  lat: 50.6856909,
  lng: 13.8929932,
  googleMapsUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJ1Y7NpCmQCUcRHzAsci1xVHI",
  hours: [
    { day: "Pondělí",   time: "10:00 – 22:00" },
    { day: "Úterý",     time: "10:00 – 22:00" },
    { day: "Středa",    time: "10:00 – 22:00" },
    { day: "Čtvrtek",   time: "10:00 – 22:00" },
    { day: "Pátek",     time: "10:00 – 22:00" },
    { day: "Sobota",    time: "10:00 – 22:00" },
    { day: "Neděle",    time: "10:00 – 22:00" },
  ],
};

export const photos = {
  interior: photo1,
  duckCabbage: photo2,
  liver: photo3,
  building: photo4,
  entrance: photo5,
  beer: photo6,
  goulashDumpling: photo7,
  schnitzel: photo8,
  pork: photo9,
  chickenCheese: photo10,
};

export const dishes = [
  {
    img: photo9,
    name: "Vepřová pečeně",
    desc: "Šťavnatá pečeně se špenátem, červeným zelím a domácími knedlíky.",
    tag: "Klasika",
  },
  {
    img: photo2,
    name: "Pečené maso s knedlíkem a zelím",
    desc: "Tradiční česká úprava — bohatá šťáva, kynuté knedlíky.",
    tag: "Domácí",
  },
  {
    img: photo7,
    name: "Hovězí na divoko s bramborákem",
    desc: "Pomalu dušené hovězí s houbovou omáčkou, knedlíkem a bramborákem.",
    tag: "Specialita",
  },
  {
    img: photo8,
    name: "Smažený kuřecí řízek",
    desc: "Křupavý řízek s hranolky a čtyřmi druhy salátu.",
    tag: "Oblíbené",
  },
  {
    img: photo10,
    name: "Grilované kuře se sýrem",
    desc: "Grilovaný kuřecí steak s nivovou omáčkou, sýrem a hranolky.",
    tag: "Grilované",
  },
  {
    img: photo3,
    name: "Drůbeží játra na cibulce",
    desc: "Restovaná játra s cibulí a paprikou, hranolky a barevný salát.",
    tag: "Z pánve",
  },
];

export type Review = {
  rating: number;
  author: string;
  photo: string | null;
  time: string;
  text: string;
};

// Recenze přeložené do češtiny pro hosty (původně z Google reviews).
export const reviews: Review[] = [
  {
    rating: 5,
    author: "kevin4r",
    photo: null,
    time: "před 2 lety",
    text: "Skvělé jídlo za příznivé ceny! Opravdu příjemné překvapení.",
  },
  {
    rating: 5,
    author: "Get fit with Sensei Ram",
    photo: null,
    time: "před 4 lety",
    text: "Velmi chutné jídlo za rozumnou cenu. Přátelští lidé. Atmosféra přívětivá i ke psům.",
  },
  {
    rating: 5,
    author: "Laird Thieme",
    photo: null,
    time: "před rokem",
    text: "Dobré jídlo a vynikající personál. Doporučuji všem návštěvníkům Krupky.",
  },
  {
    rating: 4,
    author: "REDTT59",
    photo: null,
    time: "před 3 lety",
    text: "Lokální restaurace s venkovním posezením. Byli jsme překvapeni, jak plno bylo — přesto rychlá obsluha, výborné jídlo a neuvěřitelně nízké ceny.",
  },
];

export const stats = {
  ratingLabel: "4,5 / 5 hvězdiček na Google",
  reviewLabel: "Více než 1 100 recenzí",
};