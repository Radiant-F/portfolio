import { FontAwesome6 as IconFA6 } from "@expo/vector-icons";

export type ContactType = {
  name: string;
  Icon: React.ComponentType<{
    color: string;
    size: number;
    name: keyof typeof IconFA6;
  }>;
  iconName: keyof typeof IconFA6;
  url: string;
  customMessage: "email" | "text" | "none";
};

export const contacts: ContactType[] = [
  {
    name: "WhatsApp",
    Icon: IconFA6,
    iconName: "whatsapp",
    url: "https://wa.me/6285157439660",
    customMessage: "text",
  },
  {
    name: "Telegram",
    Icon: IconFA6,
    iconName: "telegram",
    url: "https://t.me/exkoi",
    customMessage: "text",
  },
  {
    name: "Gmail",
    Icon: IconFA6,
    iconName: "envelope",
    url: "mailto:radiantfadilah0@gmail.com",
    customMessage: "email",
  },
  {
    name: "GitHub",
    Icon: IconFA6,
    iconName: "github",
    url: "https://github.com/Radiant-F",
    customMessage: "none",
  },
  {
    name: "Discord",
    Icon: IconFA6,
    iconName: "discord",
    url: "https://discord.gg/dQD2GXYj",
    customMessage: "none",
  },
  {
    name: "LinkedIn",
    Icon: IconFA6,
    iconName: "linkedin",
    url: "https://www.linkedin.com/in/radiant-f/",
    customMessage: "none",
  },
  {
    name: "X (Twitter)",
    Icon: IconFA6,
    iconName: "x-twitter",
    url: "https://x.com/RadiantF_",
    customMessage: "none",
  },
];
