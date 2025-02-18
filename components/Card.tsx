import { useAppSelector } from "@/hooks";
import { View, ViewProps } from "react-native";

export default function Card({ children, style, ...rest }: ViewProps) {
  const colors = useAppSelector((state) => state.settings.theme.colors);

  return (
    <View
      style={[
        {
          backgroundColor: colors.card,
          borderColor: colors.card_border,
          shadowRadius: 3,
          shadowOpacity: 0.25,
          shadowOffset: { width: 1, height: 1 },
          shadowColor: "black",
          elevation: 5,
          borderWidth: 5,
          borderRadius: 20,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}
