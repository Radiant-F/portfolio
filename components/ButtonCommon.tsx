import {
  Pressable,
  StyleSheet,
  Animated,
  StyleProp,
  ViewStyle,
  Platform,
} from "react-native";
import React, { useRef } from "react";
import Text from "./Text";
import { useAppSelector } from "@/hooks";
import { IconMCI, IconAD, IconFA6, type IconType } from "./Icons";
import Gap from "./Gap";

type Props = {
  title?: string;
  iconLeftMCI?: IconType["iconNameMCI"];
  iconRightMCI?: IconType["iconNameMCI"];
  iconLeftFA6?: IconType["iconNameFA6"];
  iconRightFA6?: IconType["iconNameFA6"];
  iconLeftAD?: IconType["iconNameAD"];
  iconRightAD?: IconType["iconNameAD"];
  style?: StyleProp<ViewStyle>;
  childern?: React.ReactNode;
  onPress?: () => void;
  primary?: boolean;
  textGap?: number;
  alignSelf?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
};

export default function ButtonCommon({
  title,
  onPress,
  style,
  childern,
  primary = true,
  textGap,
  alignSelf = "flex-start",
  iconRightAD,
  iconLeftAD,
  iconRightFA6,
  iconLeftFA6,
  iconRightMCI,
  iconLeftMCI,
}: Props) {
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

  return (
    <Animated.View style={[{ transform: [{ scale }], alignSelf }]}>
      <Pressable
        onPress={onPress}
        style={[
          { backgroundColor: primary ? colors[700] : colors[200] },
          styles.container,
          style,
        ]}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
      >
        {childern}

        {iconLeftMCI && (
          <IconMCI
            iconNameMCI={iconLeftMCI}
            size={25}
            color={primary ? colors[50] : colors[900]}
          />
        )}
        {iconLeftFA6 && (
          <IconFA6
            iconNameFA6={iconLeftFA6}
            size={20}
            color={primary ? colors[50] : colors[900]}
          />
        )}
        {iconLeftAD && (
          <IconAD
            iconNameFA6={iconLeftAD}
            size={25}
            color={primary ? colors[50] : colors[900]}
          />
        )}

        <Gap width={iconLeftAD || iconLeftFA6 || iconLeftMCI ? textGap : 0} />

        {title && (
          <Text
            selectable={false}
            semiBold
            style={{
              color: primary ? colors[50] : colors[900],
            }}
          >
            {title}
          </Text>
        )}

        <Gap
          width={iconRightAD || iconRightFA6 || iconRightMCI ? textGap : 0}
        />

        {iconRightMCI && (
          <IconMCI
            iconNameMCI={iconRightMCI}
            size={25}
            color={primary ? colors[50] : colors[900]}
          />
        )}
        {iconRightFA6 && (
          <IconFA6
            iconNameFA6={iconRightFA6}
            size={20}
            color={primary ? colors[50] : colors[900]}
          />
        )}
        {iconRightAD && (
          <IconAD
            iconNameFA6={iconRightAD}
            size={25}
            color={primary ? colors[50] : colors[900]}
          />
        )}
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
  },
});
