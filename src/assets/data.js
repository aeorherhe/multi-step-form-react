// billing plans
export const plans = [
  {
    id: 1,
    img: "/images/icon-arcade.svg",
    plan: "arcade",
    pricing: {
      monthly: "9",
      yearly: "90",
    },
    discount: "2 months free",
  },
  {
    id: 2,
    img: "/images/icon-advanced.svg",
    plan: "advanced",
    pricing: {
      monthly: "12",
      yearly: "120",
    },
    discount: "2 months free",
  },
  {
    id: 3,
    img: "/images/icon-pro.svg",
    plan: "pro",
    pricing: {
      monthly: "15",
      yearly: "150",
    },
    discount: "2 months free",
  },
];

export const addOns = [
  {
    id: 1,
    title: "online service",
    desc: "access to multiplayer games",
    pricing: {
      monthly: "1",
      yearly: "10",
    },
  },
  {
    id: 2,
    title: "larger storage",
    desc: "extra 1TB of cloud storage",
    pricing: {
      monthly: "2",
      yearly: "20",
    },
  },
  {
    id: 3,
    title: "customizable profile",
    desc: "custom theme on your profile",
    pricing: {
      monthly: "2",
      yearly: "20",
    },
  },
];
