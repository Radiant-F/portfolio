import { Animated, StyleSheet, View } from "react-native";
import Text from "./Text";
import { MaterialCommunityIcons as Icon } from "@expo/vector-icons";
import { useEffect, useRef } from "react";
import Gap from "./Gap";
import { useAppSelector } from "@/hooks";

export default function LoadingOverlay() {
  const color = useAppSelector((state) => state.settings.theme.colors.text);
  const rotation = useRef(new Animated.Value(0)).current;
  const currentRotation = useRef(0);

  const animate = () => {
    currentRotation.current += 90;
    Animated.spring(rotation, {
      toValue: currentRotation.current,
      useNativeDriver: true,
      bounciness: 0,
    }).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      animate();
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const rotateInterpolate = rotation.interpolate({
    inputRange: [0, 360],
    outputRange: ["0deg", "360deg"],
    extrapolate: "extend",
  });

  const totallyRandomText = [
    "ExKoi?",
    "Koi?",
    "Koi Fishies",
    "Koi this Koi that",
    "Onegai?",
    "Onegai!",
    "Nou!",
    "Nou?",
  ];

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.iconContainer,
          transform: [{ rotate: rotateInterpolate }],
        }}
      >
        <Icon name="atom-variant" size={50} color={"#adc1d1"} />
      </Animated.View>
      <Gap height={5} />
      <Text
        selectable={false}
        style={{ color, fontStyle: "italic", opacity: 0.5 }}
      >
        {totallyRandomText[Math.floor(Math.random() * 8)]}
      </Text>
    </View>
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
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.25,
  },
});
