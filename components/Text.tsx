import { useAppSelector } from "@/hooks";
import { Text as TextDefault, TextProps } from "react-native";

interface CustomTextProps extends TextProps {
  primary?: boolean;
  secondary?: boolean;
  highlight?: boolean;
}

export default function Text({
  style,
  children,
  primary,
  secondary,
  highlight,
  ...rest
}: CustomTextProps) {
  const colors = useAppSelector((state) => state.settings.theme.colors);

  return (
    <TextDefault
      style={[
        {
          fontFamily: "ManropeRegular",
          color: highlight
            ? colors.text_highlight
            : secondary
            ? colors.text_secondary
            : colors.text,
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </TextDefault>
  );
}
