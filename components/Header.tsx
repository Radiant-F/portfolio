import React, { useRef, useState } from "react";
import {
  Animated,
  Image,
  LayoutChangeEvent,
  Platform,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Text from "./Text";
import { useSegments } from "expo-router";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { IconAD, IconMCI } from "./Icons";
import Gap from "./Gap";
import ModalSettings from "./ModalSettings";
import { useAppSelector } from "@/hooks";

const navigationMenu = [
  { name: "Home", route: "index" },
  { name: "Work", route: "work" },
  { name: "Skill", route: "skill" },
  { name: "Experience", route: "experience" },
  { name: "Contact", route: "contact" },
  { name: "About", route: "about" },
];

export default function Header() {
  const colors = useAppSelector((state) => state.settings.theme.colors);

  const navigation = useNavigation();
  const segments = useSegments(),
    currentRoute = segments[0] || "index";

  const insets = useSafeAreaInsets();
  const paddingTop =
    Platform.OS !== "web"
      ? insets.top + (Platform.OS === "android" ? 15 : 5)
      : 15;

  const { width: deviceWidth } = useWindowDimensions();
  const headerWidth = 718;

  const [toggleSettings, setToggleSettings] = useState(false);

  return (
    <View
      style={{
        ...styles.container,
        paddingTop,
        backgroundColor: colors.header,
      }}
    >
      {deviceWidth < headerWidth && (
        <TouchableOpacity
          style={styles.btnDrawer}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
          activeOpacity={0.75}
        >
          <IconAD iconNameAD="menu-fold" size={20} />
        </TouchableOpacity>
      )}

      <Gap width={20} />

      <Image
        source={require("@/assets/images/me.jpg")}
        resizeMethod="resize"
        style={styles.img}
      />

      <Gap width={20} />

      {deviceWidth >= headerWidth && (
        <Navigator activeRouteName={currentRoute} />
      )}

      <Gap flex={1} />

      <TouchableOpacity
        style={styles.btnDrawer}
        onPress={() => setToggleSettings(!toggleSettings)}
        activeOpacity={0.75}
      >
        <IconMCI iconNameMCI="cog" size={20} />
      </TouchableOpacity>

      <ModalSettings
        visible={toggleSettings}
        onRequestClose={() => setToggleSettings(false)}
      />
    </View>
  );
}

function Navigator({ activeRouteName }: { activeRouteName: string }) {
  const colors = useAppSelector((state) => state.settings.theme.colors);
  const navigation = useNavigation();

  const [btnLayouts, setBtnLayouts] = useState<{
    [key: number]: { x: number; width: number };
  }>({});
  const translateX = useRef(new Animated.Value(0)).current;
  const indicatorWidth = useRef(new Animated.Value(0)).current;

  const onLayoutButton = (index: number) => (event: LayoutChangeEvent) => {
    const { x, width } = event.nativeEvent.layout;
    setBtnLayouts((prev) => {
      const newLayouts = { ...prev, [index]: { x, width } };
      if (index === 0) {
        indicatorWidth.setValue(width);
        translateX.setValue(x);
      }
      return newLayouts;
    });
  };

  function onPress(index: number) {
    const layout = btnLayouts[index];
    if (!layout) return;
    const { x, width } = layout;
    Animated.parallel([
      Animated.spring(translateX, {
        toValue: x,
        useNativeDriver: false,
        bounciness: 0,
      }),
      Animated.spring(indicatorWidth, {
        toValue: width,
        useNativeDriver: false,
        bounciness: 0,
      }),
    ]).start();

    navigation.dispatch(DrawerActions.jumpTo(navigationMenu[index].route));
  }

  const [isHovered, setIsHovered] = useState<null | number>(null);

  return (
    <View style={styles.btnContainer}>
      <Animated.View
        style={[
          styles.animatedBtnContainer,
          {
            width: indicatorWidth,
            transform: [{ translateX }],
            backgroundColor: colors.button_highlight,
          },
        ]}
      >
        <Text style={{ opacity: 0 }}>{activeRouteName}</Text>
      </Animated.View>

      {navigationMenu.map((item, index) => {
        const backgroundColor =
          activeRouteName == item.route
            ? undefined
            : isHovered == index
            ? colors.button_secondary
            : undefined;
        const color =
          activeRouteName == item.route
            ? colors.button_text_secondary
            : colors.text_secondary;

        return (
          <Pressable
            key={index}
            style={{ ...styles.btnNavigation, backgroundColor }}
            onPress={() => onPress(index)}
            onLayout={onLayoutButton(index)}
            onHoverIn={() => setIsHovered(index)}
            onHoverOut={() => setIsHovered(null)}
          >
            <Text selectable={false} style={{ color }}>
              {item.name}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
  },
  btnDrawer: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    elevation: 5,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
  },
  btnContainer: {
    height: 40,
    overflow: "hidden",
    flexDirection: "row",
  },
  animatedBtnContainer: {
    position: "absolute",
    height: 40,
    padding: 15,
    borderRadius: 10,
    paddingVertical: 10,
  },
  btnNavigation: {
    padding: 15,
    borderRadius: 10,
    paddingVertical: 10,
    marginHorizontal: 10,
  },
});
