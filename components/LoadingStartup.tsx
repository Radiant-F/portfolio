import { StyleSheet, View } from "react-native";
import Animated, { FadeOut } from "react-native-reanimated";
import Text from "./Text";
import { useAppSelector } from "@/hooks";

export default function LoadingStartup() {
  const colors = useAppSelector((state) => state.settings.theme.colors);

  return (
    <Animated.View
      exiting={FadeOut.delay(1500)}
      style={{ ...styles.container, backgroundColor: colors.background }}
    >
      <Text selectable={false} style={{ fontStyle: "italic", opacity: 0.25 }}>
        Hang in there! ...
      </Text>
      <View style={{ height: "10%" }} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "100%",
    height: "110%",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
  },
});
