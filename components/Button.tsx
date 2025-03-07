import {
  Animated,
  Platform,
  Pressable,
  StyleProp,
  TextProps,
  ViewProps,
} from "react-native";
import { ViewStyle } from "react-native";
import {
  MaterialCommunityIcons as Icon,
  FontAwesome6 as IconFA6,
} from "@expo/vector-icons";
import { useAppSelector } from "@/hooks";
import { useRef } from "react";
import Text from "./Text";

export default function Button({
  style,
  styleText,
  primary = true,
  children,
  title = "Button",
  onPress,
  iconLeft,
  iconRight,
  iconLeftFA6,
  iconRightFA6,
  iconSize = 25,
}: {
  style?: StyleProp<ViewStyle>;
  styleText?: TextProps["style"];
  primary?: boolean;
  iconLeft?: keyof typeof Icon.glyphMap;
  iconRight?: keyof typeof Icon.glyphMap;
  iconLeftFA6?: keyof typeof IconFA6.glyphMap;
  iconRightFA6?: keyof typeof IconFA6.glyphMap;
  iconSize?: number;
  children?: ViewProps["children"];
  title?: string;
  onPress?: () => void;
}) {
  const colors = useAppSelector((state) => state.settings.theme.colors);

  const animation = useRef(new Animated.Value(0)).current;
  const scale = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0.9],
  });

  const onPressIn = () => {
    Animated.spring(animation, {
      toValue: 0.5,
      useNativeDriver: Platform.OS != "web",
    }).start();
  };
  const onPressOut = () => {
    setTimeout(() => {
      Animated.spring(animation, {
        toValue: 0,
        useNativeDriver: Platform.OS != "web",
      }).start();
    }, 100);
  };

  const textColor = primary ? colors[50] : colors[900];

  return (
    <Animated.View
      style={[{ transform: [{ scale }], alignSelf: (style as any)?.alignSelf }]}
    >
      <Pressable
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        style={[
          {
            backgroundColor: primary ? colors[700] : colors[200],
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          },
          style,
        ]}
      >
        {children && children}
        {iconLeftFA6 && (
          <IconFA6 name={iconLeftFA6} color={textColor} size={iconSize} />
        )}
        {iconLeft && <Icon name={iconLeft} color={textColor} size={iconSize} />}
        {title && (
          <Text semiBold style={[{ color: textColor }, styleText]}>
            {title}
          </Text>
        )}
        {iconRightFA6 && (
          <IconFA6 name={iconRightFA6} color={textColor} size={iconSize} />
        )}
        {iconRight && (
          <Icon name={iconRight} color={textColor} size={iconSize} />
        )}
      </Pressable>
    </Animated.View>
  );
}
