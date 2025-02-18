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
  const { icon, icon_muted } = useAppSelector(
    (state) => state.settings.theme.colors
  );
  return (
    <MaterialCommunityIcons
      name={iconNameMCI}
      color={color ? color : colorMuted ? icon_muted : icon}
      size={size}
    />
  );
}

export function IconFA6({ iconNameFA6, color, colorMuted, size }: IconType) {
  const { icon, icon_muted } = useAppSelector(
    (state) => state.settings.theme.colors
  );
  return (
    <FontAwesome6
      name={iconNameFA6}
      color={color ? color : colorMuted ? icon_muted : icon}
      size={size}
    />
  );
}

export function IconAD({ iconNameAD, color, colorMuted, size }: IconType) {
  const { icon, icon_muted } = useAppSelector(
    (state) => state.settings.theme.colors
  );
  return (
    <AntDesign
      name={iconNameAD}
      color={color ? color : colorMuted ? icon_muted : icon}
      size={size}
    />
  );
}
