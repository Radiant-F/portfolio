import {
  Button,
  ColorSchemeName,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useColorScheme,
} from "react-native";
import tinycolor from "tinycolor2";
import React, { useState } from "react";
import ColorPicker, {
  Panel1,
  HueSlider,
  returnedResults,
} from "reanimated-color-picker";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import {
  dark_pink,
  light_pink,
  dark_purple,
  light_purple,
  dark_red,
  light_red,
  dark_default,
  light_default,
} from "@/constant/theme";
import { useAppSelector, useAppDispatch } from "@/hooks";
import { setTheme, toggleThemeMode } from "@/redux/slice/settings";

interface Palette {
  [shade: number]: string;
}

interface ColorPalette {
  light: Palette;
  dark: Palette;
}

const themePreset = [
  {
    name: "Default",
    palettes: {
      dark: dark_default,
      light: light_default,
    },
  },
  {
    name: "Pink",
    palettes: {
      dark: dark_pink,
      light: light_pink,
    },
  },
  {
    name: "Purple",
    palettes: {
      dark: dark_purple,
      light: light_purple,
    },
  },
  {
    name: "Red",
    palettes: {
      dark: dark_red,
      light: light_red,
    },
  },
];

export default function Test() {
  function generateMaterialPalette(baseColor: string): ColorPalette {
    const shadeMixes: { [key: number]: number } = {
      50: 95,
      100: 90,
      200: 75,
      300: 60,
      400: 45,
      500: 0, // base color
      600: 10,
      700: 20,
      800: 30,
      900: 40,
    };

    const lightPalette: Palette = {};
    const darkPalette: Palette = {};

    Object.keys(shadeMixes).forEach((key) => {
      const shade = Number(key);
      const mixAmount = shadeMixes[shade];

      // --- Light Mode Palette ---
      if (shade < 500) {
        // Lighter shades: mix with white.
        lightPalette[shade] = tinycolor
          .mix(baseColor, "#ffffff", mixAmount)
          .toHexString();
      } else if (shade === 500) {
        lightPalette[shade] = tinycolor(baseColor).toHexString();
      } else {
        // Darker shades: mix with black.
        lightPalette[shade] = tinycolor
          .mix(baseColor, "#000000", mixAmount)
          .toHexString();
      }

      // --- Dark Mode Palette ---
      // For dark mode we reverse the mixing direction:
      // - Shades below 500 get darker (mix with black)
      // - Shades above 500 get lighter (mix with white)
      if (shade < 500) {
        darkPalette[shade] = tinycolor
          .mix(baseColor, "#000000", mixAmount)
          .toHexString();
      } else if (shade === 500) {
        darkPalette[shade] = tinycolor(baseColor).toHexString();
      } else {
        darkPalette[shade] = tinycolor
          .mix(baseColor, "#ffffff", mixAmount)
          .toHexString();
      }
    });

    return {
      light: lightPalette,
      dark: darkPalette,
    };
  }

  const dispatch = useAppDispatch();
  const { colors, mode, palettes } = useAppSelector(
    (state) => state.settings.theme
  );

  const paletteLightDepth = Object.keys(palettes.light),
    paletteLightColor = Object.values(palettes.light);
  const paletteDarkDepth = Object.keys(palettes.dark),
    paletteDarkColor = Object.values(palettes.dark);

  const onSelectColor = (pickedColor: returnedResults) => {
    const palette = generateMaterialPalette(pickedColor.hex);
    dispatch(setTheme(palette));
  };

  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: colors[50],
        paddingBottom: 100,
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View style={{ flex: 1 }}>
          <Text style={{ color: colors[900] }}>Light palette</Text>
          {paletteLightColor.map((v, i, arr) => (
            <View key={i} style={{ backgroundColor: v }}>
              <Text style={{ color: paletteLightColor[arr.length - 1 - i] }}>
                {paletteLightDepth[i]}
              </Text>
            </View>
          ))}
        </View>
        <View style={{ flex: 1 }}>
          <Text style={{ color: colors[900] }}>Dark palette</Text>
          {paletteDarkColor.map((v, i, arr) => (
            <View key={i} style={{ backgroundColor: v }}>
              <Text style={{ color: paletteDarkColor[arr.length - 1 - i] }}>
                {paletteDarkDepth[i]}
              </Text>
            </View>
          ))}
        </View>
      </View>

      <Text style={{ color: colors[900] }}>current scheme: {mode}</Text>
      <Button
        title="toggle scheme"
        onPress={() => dispatch(toggleThemeMode())}
      />

      <View style={{ height: 10 }} />

      <ColorPicker
        thumbSize={15}
        style={styles.colorPicker}
        value={colors[500]}
        onComplete={onSelectColor}
      >
        <HueSlider />
        <View style={{ height: 5 }} />
        <Panel1 />
      </ColorPicker>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {themePreset.map((v, i) => (
          <Pressable
            key={i}
            onPress={() => dispatch(setTheme(v.palettes))}
            style={{ ...styles.btn, backgroundColor: v.palettes[mode][700] }}
          >
            <Text style={{ color: v.palettes[mode][50] }}>{v.name}</Text>
          </Pressable>
        ))}
      </View>

      <View style={{ height: 10 }} />

      <View style={{ flexDirection: "row", justifyContent: "center" }}>
        <Pressable style={{ ...styles.btn, backgroundColor: colors[700] }}>
          <Icon name="ab-testing" size={25} color={colors[50]} />
          <View style={{ width: 10 }} />
          <Text style={{ color: colors[50] }}>Primary Button</Text>
        </Pressable>
        <View style={{ width: 10 }} />
        <Pressable style={{ ...styles.btn, backgroundColor: colors[200] }}>
          <Icon name="ab-testing" size={25} color={colors[900]} />
          <View style={{ width: 10 }} />
          <Text style={{ color: colors[900] }}>Secondary Button</Text>
        </Pressable>
      </View>

      <View style={{ height: 10 }} />

      <Text style={{ color: colors[900] }}>
        Text default. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nesciunt quisquam unde suscipit iusto earum harum, perferendis fugit!
      </Text>

      <Text style={{ color: colors[600] }}>
        Text highlight. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Dolorem esse illum dolore.
      </Text>

      <View
        style={{
          margin: 20,
          padding: 20,
          borderRadius: 20,
          backgroundColor: colors[100],
          borderWidth: 5,
          borderColor: colors[300],
        }}
      >
        <Text style={{ color: colors[900] }}>Lorem Ipsum Dolor.</Text>
        <TextInput
          placeholderTextColor={colors[400]}
          placeholder="Placeholder..."
          style={{
            backgroundColor: colors[200],
            height: 50,
            color: colors[900],
            paddingHorizontal: 20,
            borderRadius: 50 / 2,
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  btn: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 50 / 2,
  },
  colorPicker: {
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
  },
});
