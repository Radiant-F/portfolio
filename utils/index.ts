import { MMKV } from "react-native-mmkv";
export const mmkv = new MMKV();

import tinycolor from "tinycolor2";
import type { ThemeType } from "@/constant/theme";
export function generateTheme(main: string): ThemeType {
  // Generate text colors by mixing the main color with white
  const text = tinycolor.mix(main, "#ffffff", 80).toHexString(); // very light version
  const text_secondary = tinycolor.mix(main, "#ffffff", 60).toHexString();

  // Use the main color for primary elements
  const button_primary = main;
  // Generate dark variants by mixing main with black
  const button_secondary = tinycolor.mix(main, "#000000", 70).toHexString();
  const button_highlight = tinycolor.mix(main, "#000000", 60).toHexString();
  const button_text_primary = tinycolor.mix(main, "#000000", 80).toHexString();
  const button_text_secondary = text;

  // Define a base dark color for cards/inputs
  const card = "#1e1f24";
  // Mix the dark base with the main color to create borders and input backgrounds
  const card_border = tinycolor.mix(card, main, 20).toHexString();
  const input = tinycolor.mix(card, main, 30).toHexString();
  const input_placeholder = tinycolor.mix(card, main, 70).toHexString();

  // These colors remain constant across themes (assuming a dark background UI)
  const icon = "#ffffff";
  const icon_muted = "#d0d0d0";
  const background = "#1a191f";
  const header = "#1f1f26";

  return {
    name: "custom",
    slug: "custom",
    main,
    text,
    text_secondary,
    text_highlight: main, // using main as the highlight
    button_primary,
    button_secondary,
    button_highlight,
    button_text_primary,
    button_text_secondary,
    card,
    card_border,
    input,
    input_placeholder,
    icon,
    icon_muted,
    background,
    header,
  };
}
