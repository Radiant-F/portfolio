import { Linking, Pressable, StyleSheet, View } from "react-native";
import { IconFA6 as Icon, type IconType } from "../Icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRef } from "react";
import { Animated } from "react-native";
import { contacts } from "@/constant";
import { useAppSelector } from "@/hooks";

export default function Social() {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.container, bottom: insets.bottom + 20 }}>
      {contacts.map((v, i) => (
        <ButtonSocial
          key={i}
          onPress={async () => {
            await Linking.openURL(v.url);
          }}
          icon={v.iconName}
        />
      ))}
    </View>
  );
}

type ButtonSocialProps = {
  onPress: () => void;
  icon: IconType["iconNameFA6"];
};

function ButtonSocial({ onPress, icon }: ButtonSocialProps) {
  const colors = useAppSelector((state) => state.settings.theme.colors);

  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 0.5,
      useNativeDriver: true,
    }).start();
  };
  const onPressOut = () => {
    setTimeout(() => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: true,
      }).start();
    }, 200);
  };

  return (
    <Animated.View style={{ transform: [{ scale }], alignSelf: "flex-start" }}>
      <Pressable
        onPress={onPress}
        style={{ ...styles.btn, backgroundColor: colors[200] }}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        <Icon iconNameFA6={icon} size={30} />
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: "#28303a",
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    elevation: 5,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginHorizontal: 20,
    alignSelf: "flex-start",
    position: "absolute",
  },
});
