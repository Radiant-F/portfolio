import { Header, LoadingStartup } from "@/components";
import { useFonts } from "expo-font";
import { useRootNavigationState } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { mmkv } from "@/utils";
import { applySettings } from "@/redux/slice/settings";
import Head from "expo-router/head";

export default function App() {
  const rootNavigation = useRootNavigationState();
  const navigationReady = rootNavigation?.routes.length > 1;

  const [fontReady] = useFonts({
    PJKTSansRegular: require("@/assets/fonts/PlusJakartaSans-Regular.ttf"),
    PJKTSansItalic: require("@/assets/fonts/PlusJakartaSans-Italic.ttf"),
    PJKTSansSemiBold: require("@/assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    PJKTSansSemiBoldItalic: require("@/assets/fonts/PlusJakartaSans-SemiBoldItalic.ttf"),
    PJKTSansBold: require("@/assets/fonts/PlusJakartaSans-Bold.ttf"),
    PJKTSansBoldItalic: require("@/assets/fonts/PlusJakartaSans-BoldItalic.ttf"),
    font: require("@/assets/fonts/font.ttf"),
  });

  const appReady = fontReady && navigationReady;

  return (
    <Provider store={store}>
      {/* web */}
      {Platform.OS == "web" && (
        <Head>
          <title>Koi's Portfolio 🎏</title>
          <meta
            property="og:image"
            content="https://github.com/Radiant-F/portfolio/blob/main/assets/app/web/icon-192.png?raw=true"
          />
          <meta property="og:title" content="Koi's Portfolio" />
          <meta
            property="og:description"
            content="Check out my website! You might find easter egg about me~"
          />
          <meta property="og:url" content="https://exkoi.expo.app" />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
          <link rel="manifest" href="/site.webmanifest" />
        </Head>
      )}

      {fontReady && <RootLayout />}
      {!appReady && <LoadingStartup />}
    </Provider>
  );
}

function RootLayout() {
  const performance = useAppSelector((state) => state.settings.performance);
  const colors = useAppSelector((state) => state.settings.theme.colors);
  const dispatch = useAppDispatch();
  const [loadingPreferences, setLoadingPreferences] = useState(true);

  useEffect(() => {
    const savedPreferences = mmkv.getString("settings");
    if (savedPreferences) {
      const parsedPreferences = JSON.parse(savedPreferences);
      dispatch(applySettings(parsedPreferences));
    }
    setLoadingPreferences(false);
  }, []);

  if (loadingPreferences) return <></>;

  return (
    <GestureHandlerRootView>
      <Header />

      <Drawer
        screenOptions={{
          headerShown: false,
          sceneStyle: { backgroundColor: colors[50] },
          drawerActiveBackgroundColor: colors[700],
          drawerActiveTintColor: colors[50],
          drawerInactiveTintColor: colors[900],
          drawerLabelStyle: { fontFamily: "PJKTSansSemiBold" },
          drawerStyle: { backgroundColor: colors[100] },
          lazy: performance == "default",
          headerStatusBarHeight: 100,
        }}
      >
        <Drawer.Screen
          name="index"
          options={{ drawerLabel: "Home", title: "Home" }}
        />
        <Drawer.Screen name="work" options={{ drawerLabel: "Work" }} />
        <Drawer.Screen name="skill" options={{ drawerLabel: "Skill" }} />
        <Drawer.Screen
          name="experience"
          options={{ drawerLabel: "Experience" }}
        />
        <Drawer.Screen name="contact" options={{ drawerLabel: "Contact" }} />
        <Drawer.Screen name="about" options={{ drawerLabel: "About" }} />
        <Drawer.Screen name="__test__/index" options={{ drawerLabel: "" }} />
        <Drawer.Screen name="+not-found" options={{ drawerLabel: "" }} />
      </Drawer>

      {Platform.OS == "android" && (
        <StatusBar backgroundColor={colors[100]} style="light" />
      )}
    </GestureHandlerRootView>
  );
}
