// Šablona stálého jídelního lístku — upravte ceny/položky podle skutečnosti.
// Aktuální PDF lístek nahrajte do `public/menu.pdf`, denní nabídku do `public/denni-menu.pdf`.

export type MenuItem = {
  name: string;
  desc?: string;
  price: string; // např. "189 Kč"
  tag?: string;  // např. "Pikantní", "Bezlepkové"
};

export type MenuSection = {
  title: string;
  note?: string;
  items: MenuItem[];
};

export const menuSections: MenuSection[] = [
  {
    title: "Polévky",
    items: [
      { name: "Hovězí vývar s nudlemi a játrovými knedlíčky", price: "59 Kč" },
      { name: "Česnečka s krutony a sýrem", price: "59 Kč" },
      { name: "Gulášová polévka", price: "69 Kč" },
    ],
  },
  {
    title: "Předkrmy a něco k pivu",
    items: [
      { name: "Topinka s česnekem (2 ks)", price: "49 Kč" },
      { name: "Tlačenka s cibulí a octem", price: "89 Kč" },
      { name: "Utopenci s chlebem", price: "99 Kč" },
      { name: "Nakládaný hermelín", price: "109 Kč" },
    ],
  },
  {
    title: "Z české kuchyně",
    note: "Tradiční česká klasika — k jídlu volíte přílohu z nabídky níže.",
    items: [
      { name: "Svíčková na smetaně s houskovým knedlíkem", price: "199 Kč", tag: "Klasika" },
      { name: "Vepřové koleno pečené na pivu, křen, hořčice, chléb", price: "259 Kč", desc: "Cca 1 kg", tag: "Specialita" },
      { name: "Pečená vepřová pečeně, špenát, červené zelí, knedlík", price: "189 Kč" },
      { name: "Hovězí na divoko s houskovým knedlíkem a bramborákem", price: "229 Kč" },
      { name: "Guláš se sádlovými knedlíky", price: "179 Kč" },
    ],
  },
  {
    title: "Z pánve a grilu",
    items: [
      { name: "Smažený vepřový/kuřecí řízek, brambor / hranolky", price: "189 Kč", tag: "Oblíbené" },
      { name: "Drůbeží játra na cibulce, hranolky, salát", price: "169 Kč" },
      { name: "Grilovaný kuřecí steak se sýrem a nivovou omáčkou", price: "209 Kč" },
      { name: "Vepřový steak na grilu s pepřovou omáčkou", price: "229 Kč" },
      { name: "Smažený sýr s tatarkou, hranolky", price: "169 Kč", tag: "Bezmasé" },
    ],
  },
  {
    title: "Přílohy",
    items: [
      { name: "Hranolky", price: "45 Kč" },
      { name: "Vařený brambor", price: "39 Kč" },
      { name: "Opékaný brambor", price: "49 Kč" },
      { name: "Rýže dušená", price: "39 Kč" },
      { name: "Houskový knedlík (4 plátky)", price: "35 Kč" },
      { name: "Bramborák", price: "49 Kč" },
    ],
  },
  {
    title: "Saláty",
    items: [
      { name: "Šopský salát", price: "89 Kč" },
      { name: "Zeleninová obloha", price: "39 Kč" },
      { name: "Coleslaw", price: "49 Kč" },
    ],
  },
  {
    title: "Dezerty",
    items: [
      { name: "Domácí ovocné knedlíky s tvarohem a máslem", price: "129 Kč" },
      { name: "Palačinky s marmeládou a šlehačkou", price: "99 Kč" },
      { name: "Zmrzlinový pohár", price: "89 Kč" },
    ],
  },
  {
    title: "Nápoje",
    note: "Točíme Březňák 10° a 12°. Kompletní vinný a nápojový lístek najdete v restauraci.",
    items: [
      { name: "Březňák 10° (0,5 l)", price: "39 Kč" },
      { name: "Březňák 12° (0,5 l)", price: "45 Kč" },
      { name: "Kofola točená (0,5 l)", price: "39 Kč" },
      { name: "Voda s citronem (0,3 l)", price: "29 Kč" },
      { name: "Káva espresso", price: "45 Kč" },
    ],
  },
];

// === Denní nabídka ===
// Volitelně nahrajte aktuální PDF do `public/denni-menu.pdf` — odkaz se zobrazí automaticky.
// `weeklyMenu` slouží jako záloha / textová verze, pokud PDF není.
export type DayMenu = {
  day: string;
  soup: string;
  meals: { name: string; price: string }[];
};

export const weeklyMenu: DayMenu[] = [
  {
    day: "Pondělí",
    soup: "Hovězí vývar s nudlemi",
    meals: [
      { name: "Vepřová pečeně, špenát, knedlík", price: "139 Kč" },
      { name: "Smažený sýr, brambor, tatarka", price: "139 Kč" },
      { name: "Kuřecí směs s rýží", price: "139 Kč" },
    ],
  },
  {
    day: "Úterý",
    soup: "Česnečka se sýrem a krutony",
    meals: [
      { name: "Svíčková na smetaně, knedlík", price: "149 Kč" },
      { name: "Smažený kuřecí řízek, brambor", price: "149 Kč" },
      { name: "Špagety bolognese", price: "139 Kč" },
    ],
  },
  {
    day: "Středa",
    soup: "Gulášová polévka",
    meals: [
      { name: "Pečené koleno na pivu, hořčice, křen", price: "169 Kč" },
      { name: "Drůbeží játra na cibulce, hranolky", price: "149 Kč" },
      { name: "Rybí filé v sýrovém těstíčku, brambor", price: "149 Kč" },
    ],
  },
  {
    day: "Čtvrtek",
    soup: "Květáková s vejcem",
    meals: [
      { name: "Guláš se sádlovými knedlíky", price: "139 Kč" },
      { name: "Grilovaný kuřecí steak se sýrem", price: "159 Kč" },
      { name: "Smažený vepřový řízek, brambor", price: "149 Kč" },
    ],
  },
  {
    day: "Pátek",
    soup: "Boršč",
    meals: [
      { name: "Hovězí na divoko, houskový knedlík", price: "159 Kč" },
      { name: "Vepřový steak s pepřovou omáčkou", price: "169 Kč" },
      { name: "Bramborák s uzeným masem a zelím", price: "139 Kč" },
    ],
  },
];