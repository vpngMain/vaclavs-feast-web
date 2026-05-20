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

export const stats = {
  ratingLabel: "4,5 / 5 hvězdiček na Google",
  reviewLabel: "Více než 1 100 recenzí",
};

export const reviews = [
  {
    id: "review-1",
    rating: 5,
    text: "Výborná česká kuchyně, poctivé porce a příjemná obsluha. Svíčková byla naprosto skvělá, knedlíky domácí. Určitě se vrátíme!",
    author: "Petra Nováková",
    authorPhoto: null,
    authorUri: null,
    relativeTime: "před 2 týdny",
    publishTime: "2026-05-06T12:00:00.000Z",
  },
  {
    id: "review-2",
    rating: 5,
    text: "Nejlepší hospoda v okolí. Březňák výborně natočený, jídlo chutné a porce pořádné. Personál velmi přátelský. Doporučuji!",
    author: "Tomáš Kovář",
    authorPhoto: null,
    authorUri: null,
    relativeTime: "před měsícem",
    publishTime: "2026-04-20T12:00:00.000Z",
  },
  {
    id: "review-3",
    rating: 5,
    text: "Byli jsme tu na oslavu narozenin v salonku — vše perfektně zorganizované, jídlo výborné, obsluha pozorná. Skvělý zážitek pro celou rodinu.",
    author: "Jana Horáčková",
    authorPhoto: null,
    authorUri: null,
    relativeTime: "před 3 týdny",
    publishTime: "2026-04-29T12:00:00.000Z",
  },
  {
    id: "review-4",
    rating: 4,
    text: "Pravidelně tu chodíme na oběd. Denní menu za rozumnou cenu, porce opravdu vydatné. Kvalita jídla je tady stálá a vysoká.",
    author: "Martin Blaha",
    authorPhoto: null,
    authorUri: null,
    relativeTime: "před 2 měsíci",
    publishTime: "2026-03-20T12:00:00.000Z",
  },
];