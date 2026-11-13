/**
 * House of Sweets and Treats — site content.
 *
 * VERIFIED = from the business's public Facebook posts via bakerias
 * (checked 2026-11-13). No owner name, phone, email or street address is
 * published — pickup is in the east Houston area, arranged by message.
 * UNIVERSAL = standard content every home-bakery website has, added at the
 * owner's request. The disclaimer banner on the site tells the business
 * owner to correct anything that is wrong.
 */

export const clinic = {
  name: "House of Sweets and Treats",
  shortName: "House of Sweets",
  tagline: "Homemade bakery · Houston, Texas",
  phoneDisplay: "",
  phoneTel: "",
  address: "East Houston area, Houston, TX",
  area: "Houston, TX",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=House+of+Sweets+and+Treats+Houston+TX",
  facebookText: "House of Sweets and Treats — find us on Facebook",
  facebookUrl: "https://www.facebook.com/1580949545486982",
  instagramText: "",
  instagramUrl: "",
  owner: {
    name: "",
    title: "Homemade bakery",
    bio: "House of Sweets and Treats is a homemade bakery in Houston, Texas — 11 years on Facebook and still booked and busy. Every recipe started with a simple idea, a little faith, and a lot of hard work. Everything is homemade from scratch: fresh cookies, gooey cinnamon rolls, cakes and party treats, baked with love.",
  },
};

export type ServiceGroup = {
  title: string;
  blurb: string;
  items: string[];
  price?: string;
  image?: string;
  imageAlt?: string;
  verified?: boolean;
};

/** Menu grouped the way top bakery sites group it.
 *  VERIFIED groups are marked; prices shown are published prices. */
export const serviceGroups: ServiceGroup[] = [
  {
    title: "Cinnamon Rolls",
    blurb:
      "Big, gooey, homemade cinnamon rolls, fresh from the oven and topped with delicious icing. Sunday pickup — order before spots fill up, because they sell out.",
    items: ["Single roll — $6", "4-pack — $22", "6-pack — $32", "Dozen — $60"],
    price: "From $6",
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Freshly baked cinnamon rolls with icing in a baking pan",
    verified: true,
  },
  {
    title: "Cookie Drops",
    blurb:
      "Every week, a fresh lineup of homemade cookies — different flavors, available for preorder and pickup. Tell us your favorite flavor and it might be in the next drop.",
    items: ["Fresh lineup every week", "Different flavors each drop", "Preorder & pickup"],
    price: "DM for this week's flavors",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Chocolate chip cookies stacked on a plate with a glass of milk",
    verified: true,
  },
  {
    title: "Cakes & Party Treats",
    blurb:
      "Cakes, cookies and treats for anything party-related — birthdays, brunches, family gatherings and holiday weekends. Message us with what you need.",
    items: ["Birthday cakes", "Party cookies & treats", "Holiday weekend orders"],
    price: "DM for a quote",
    image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Rainbow layer cake with colorful sprinkles and star decorations on a cake stand",
    verified: true,
  },
  {
    title: "Sunday Cinnamon Roll Pans",
    blurb:
      "Warm, homemade cinnamon roll pans for Sunday morning — perfect for breakfast, brunch, or a sweet treat. Payment secures your order; ordering closes once capacity is reached.",
    items: ["6-count pan — $18", "8-count family pan — $25", "Extra icing, pecans or cookie butter drizzle"],
    price: "From $18",
    verified: true,
  },
];

/** VERIFIED — from the bakery's public posts. */
export const faqs = [
  {
    q: "How do I order?",
    a: "Message us on Facebook — that is how every order starts. Tell us what you want and when you need it. Payment is required to secure your order, and ordering closes once we reach capacity.",
  },
  {
    q: "What are cookie drops?",
    a: "Every week we drop a fresh lineup of homemade cookies — different flavors, available for preorder and pickup. Tell us your favorite flavor in the comments and it might be in the next drop.",
  },
  {
    q: "How much are the cinnamon rolls?",
    a: "A single roll is $6, a 4-pack is $22, a 6-pack is $32, and a dozen is $60. Sunday pans are $18 for a 6-count pan and $25 for an 8-count family pan. Optional add-ons: extra icing, pecans, and cookie butter drizzle.",
  },
  {
    q: "Where do I pick up my order?",
    a: "Pickup is in the east Houston area — the exact time and place are sent to you after your order is placed. Sunday cinnamon roll pickup is on Sunday; other orders are arranged by message.",
  },
  {
    q: "What are your hours?",
    a: "Tuesday to Friday, 8am to 5pm, and Saturday 8am to 1pm. Orders are taken by message — and they fill up fast, so message early.",
  },
  {
    q: "Do you take party orders?",
    a: "Yes — if you need anything party-related, message us. Cakes, cookies and treats for birthdays, brunches, family gatherings and holiday weekends.",
  },
];

/** UNIVERSAL — the standard home-bakery ordering flow. */
export const orderSteps = [
  {
    title: "Message us on Facebook",
    body: "Tell us what you want, when you need it, and how many people it is for. For cookie drops, tell us your favorite flavor too.",
  },
  {
    title: "Pay to secure your order",
    body: "Payment is required to secure your order — and ordering closes once we reach capacity, so message early.",
  },
  {
    title: "Pick up in east Houston",
    body: "Pickup is in the east Houston area. The exact time is sent to you after your order is placed — Sunday pickup for cinnamon roll pans.",
  },
];
