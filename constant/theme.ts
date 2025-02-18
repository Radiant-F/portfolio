export type ThemeType = {
  name: string;
  slug: "default" | "hot-pink" | "amethyst" | "vibrant-red" | "custom";
  main: string;
  text: string;
  text_secondary: string;
  text_highlight: string;
  button_primary: string;
  button_secondary: string;
  button_highlight: string;
  button_text_primary: string;
  button_text_secondary: string;
  card: string;
  card_border: string;
  input: string;
  input_placeholder: string;
  icon: string;
  icon_muted: string;
  background: string;
  header: string;
};

export const theme_default: ThemeType = {
  name: "Default",
  slug: "default",
  main: "#a3d5fd",
  text: "#e1f2fe",
  text_secondary: "#adc1d1",
  text_highlight: "#a3d5fd",
  button_primary: "#a3d5fd",
  button_secondary: "#28303a",
  button_highlight: "#2a3644",
  button_text_primary: "#192343",
  button_text_secondary: "#e1f2fe",
  card: "#1e1f24",
  card_border: "#373e4e",
  input: "#3c4857",
  input_placeholder: "#adb4bf",
  icon: "#ffffff",
  icon_muted: "#d0d0d0",
  background: "#1a191f",
  header: "#1f1f26",
};

export const theme_pink: ThemeType = {
  name: "Pink",
  slug: "hot-pink",
  main: "#ff69b4",
  text: "#fff0f5",
  text_secondary: "#f2b3c9",
  text_highlight: "#ff69b4",
  button_primary: "#ff69b4",
  button_secondary: "#2b1c25",
  button_highlight: "#362530",
  button_text_primary: "#330b23",
  button_text_secondary: "#fff0f5",
  card: "#1e1f24",
  card_border: "#3c2f3f",
  input: "#4a3a47",
  input_placeholder: "#bfa8b9",
  icon: "#ffffff",
  icon_muted: "#d0d0d0",
  background: "#1a191f",
  header: "#1f1f26",
};

export const purple: ThemeType = {
  name: "Amethyst",
  slug: "amethyst",
  main: "#9966cc",
  text: "#f3e5f5", // a light lavender tone
  text_secondary: "#d1c4e9",
  text_highlight: "#9966cc",
  button_primary: "#9966cc",
  button_secondary: "#4a148c",
  button_highlight: "#6a1b9a",
  button_text_primary: "#ffffff",
  button_text_secondary: "#ffffff",
  card: "#1e1f24",
  card_border: "#3c3f46",
  input: "#3c3f46",
  input_placeholder: "#b0bec5",
  icon: "#ffffff",
  icon_muted: "#d0d0d0",
  background: "#1a191f",
  header: "#1f1f26",
};

export const theme_amethyst: ThemeType = {
  name: "Purple",
  slug: "amethyst",
  main: "#9b59b6",
  text: "#f0e5fa",
  text_secondary: "#bfa0d9",
  text_highlight: "#9b59b6",
  button_primary: "#9b59b6",
  button_secondary: "#2a2033",
  button_highlight: "#342844",
  button_text_primary: "#2e1a3a",
  button_text_secondary: "#f0e5fa",
  card: "#1e1f24",
  card_border: "#3a2f4a",
  input: "#4a3a57",
  input_placeholder: "#bfa8cf",
  icon: "#ffffff",
  icon_muted: "#d0d0d0",
  background: "#1a191f",
  header: "#1f1f26",
};

// export const theme_red: ThemeType = {
//   name: "Red",
//   slug: "vibrant-red",
//   main: "#e74c3c", // Main red accent
//   text: "#fdecea", // Light, soft red-tinted text
//   text_secondary: "#f2a5a5", // A muted red tone for secondary text
//   text_highlight: "#e74c3c", // Same as main for emphasis
//   button_primary: "#e74c3c",
//   button_secondary: "#2b1313", // Dark complement with red undertones
//   button_highlight: "#3a2322", // Slightly lighter dark tone for hover/focus states
//   button_text_primary: "#330b10", // Deep, contrasting shade for button text
//   button_text_secondary: "#fdecea", // Matching the primary text color
//   card: "#1e1f24",
//   card_border: "#3c2f2f", // Dark border with a hint of red warmth
//   input: "#4a3a3a",
//   input_placeholder: "#c1a4a7", // Muted red-gray for placeholder text
//   icon: "#ffffff",
//   icon_muted: "#d0d0d0",
//   background: "#1a191f",
//   header: "#1f1f26",
// };

export const theme_red: ThemeType = {
  name: "Red",
  slug: "vibrant-red",
  main: "#e74c3c", // Primary red tone
  text: "#ffe6e6", // A very light, soft red tint for text
  text_secondary: "#f1948a", // A muted red-pink for secondary text
  text_highlight: "#e74c3c", // Matching the main color for highlights
  button_primary: "#e74c3c",
  button_secondary: "#2b1415", // A deep, dark shade complementing red
  button_highlight: "#3a2122", // Slightly lighter for hover/focus states
  button_text_primary: "#3d0b0b", // A dark red tone to contrast on buttons
  button_text_secondary: "#ffe6e6",
  card: "#1e1f24",
  card_border: "#3e2d2d", // Dark border with subtle red undertones
  input: "#4a3a3d", // A refined dark background for input fields
  input_placeholder: "#bfa8a8", // A muted tone for placeholders
  icon: "#ffffff",
  icon_muted: "#d0d0d0",
  background: "#1a191f",
  header: "#1f1f26",
};
