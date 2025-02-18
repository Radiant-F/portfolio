import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  theme_default,
  theme_pink,
  theme_amethyst,
  theme_red,
  type ThemeType,
} from "@/constant";

type Props = {
  performance: "default" | "fast";
  theme: {
    mode: ThemeType["slug"];
    colors: ThemeType;
  };
};

const initialState: Props = {
  performance: "default",
  theme: {
    mode: "default",
    colors: theme_default,
  },
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setPerformance(state, action: PayloadAction<Props["performance"]>) {
      state.performance = action.payload;
    },
    setTheme(state, action: PayloadAction<Props["theme"]["mode"]>) {
      switch (action.payload) {
        case "default":
          state.theme.colors = theme_default;
          break;
        case "hot-pink":
          state.theme.colors = theme_pink;
          break;
        case "amethyst":
          state.theme.colors = theme_amethyst;
          break;
        case "vibrant-red":
          state.theme.colors = theme_red;
          break;
        default:
          state.theme.colors = theme_default;
          break;
      }
    },
    setCustomTheme(state, action: PayloadAction<ThemeType>) {
      state.theme.colors = action.payload;
    },
    resetSettings(state) {
      state.performance = "default";
      state.theme = { colors: theme_default, mode: "default" };
    },
    applySettings(state, action: PayloadAction<Props>) {
      state.performance = action.payload.performance;
      state.theme = action.payload.theme;
    },
  },
});

export const {
  setPerformance,
  setTheme,
  setCustomTheme,
  resetSettings,
  applySettings,
} = settingsSlice.actions;

export default settingsSlice.reducer;
