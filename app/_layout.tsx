import { Header, LoadingStartup } from "@/components";
import { ManropeBold } from "@/constant";
import { useFonts } from "expo-font";
import { useRootNavigationState } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { Platform, StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Provider } from "react-redux";
import { store } from "@/redux";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { mmkv } from "@/utils";
import { applySettings } from "@/redux/slice/settings";

export default function App() {
  const rootNavigation = useRootNavigationState();
  const navigationReady = rootNavigation?.routes.length > 1;

  const [fontReady] = useFonts({
    ManropeRegular: require("@/assets/fonts/Manrope-Regular.ttf"),
    ManropeBold: require("@/assets/fonts/Manrope-Bold.ttf"),
    ManropeSemiBold: require("@/assets/fonts/Manrope-SemiBold.ttf"),
    ManropeExtraBold: require("@/assets/fonts/Manrope-ExtraBold.ttf"),
  });

  const appReady = fontReady && navigationReady;

  return (
    <Provider store={store}>
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
          sceneStyle: { backgroundColor: colors.background },
          drawerActiveBackgroundColor: colors.button_highlight,
          drawerActiveTintColor: colors.text_highlight,
          drawerInactiveTintColor: colors.text_secondary,
          drawerLabelStyle: { fontFamily: ManropeBold },
          drawerStyle: { backgroundColor: colors.header },
          lazy: performance == "default",
          headerStatusBarHeight: 100,
          title: "Koi's Portfolio",
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
        <StatusBar backgroundColor={colors.header} barStyle={"light-content"} />
      )}
    </GestureHandlerRootView>
  );
}
