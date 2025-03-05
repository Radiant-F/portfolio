import {
  MaterialCommunityIcons,
  FontAwesome6,
  AntDesign,
} from "@expo/vector-icons";
import { OpaqueColorValue } from "react-native";
import { useAppSelector } from "@/hooks";

export type IconType = {
  iconNameMCI?: keyof typeof MaterialCommunityIcons.glyphMap;
  iconNameFA6?: keyof typeof FontAwesome6.glyphMap;
  iconNameAD?: keyof typeof AntDesign.glyphMap;
  color?: string | OpaqueColorValue;
  colorMuted?: boolean;
  size?: number;
};

export function IconMCI({ iconNameMCI, color, colorMuted, size }: IconType) {
  const { colors } = useAppSelector((state) => state.settings.theme);
  return (
    <MaterialCommunityIcons
      name={iconNameMCI}
      color={color ? color : colors[900]}
      size={size}
    />
  );
}

export function IconFA6({ iconNameFA6, color, colorMuted, size }: IconType) {
  const { colors } = useAppSelector((state) => state.settings.theme);
  return (
    <FontAwesome6
      name={iconNameFA6}
      color={color ? color : colors[900]}
      size={size}
    />
  );
}

export function IconAD({ iconNameAD, color, colorMuted, size }: IconType) {
  const { colors } = useAppSelector((state) => state.settings.theme);
  return (
    <AntDesign
      name={iconNameAD}
      color={color ? color : colors[900]}
      size={size}
    />
  );
}
