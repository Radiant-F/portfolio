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

export function IconMCI({ iconNameMCI: name, color, size }: IconType) {
  const { colors } = useAppSelector((state) => state.settings.theme);
  return (
    <MaterialCommunityIcons
      name={name}
      color={color ? color : colors[900]}
      size={size}
    />
  );
}

export function IconFA6({ iconNameFA6: name, color, size }: IconType) {
  const { colors } = useAppSelector((state) => state.settings.theme);
  return (
    <FontAwesome6 name={name} color={color ? color : colors[900]} size={size} />
  );
}

export function IconAD({ iconNameAD: name, color, size }: IconType) {
  const { colors } = useAppSelector((state) => state.settings.theme);
  return (
    <AntDesign name={name} color={color ? color : colors[900]} size={size} />
  );
}
