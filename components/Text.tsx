import { useAppSelector } from "@/hooks";
import { Text as TextDefault, TextProps } from "react-native";

const fonts = [
  "PJKTSansRegular",
  "PJKTSansItalic",
  "PJKTSansSemiBold",
  "PJKTSansSemiBoldItalic",
  "PJKTSansBold",
  "PJKTSansBoldItalic",
];

interface CustomTextProps extends TextProps {
  primary?: boolean;
  secondary?: boolean;
  highlight?: boolean;
  regular?: boolean;
  italic?: boolean;
  semiBold?: boolean;
  semiBoldItalic?: boolean;
  bold?: boolean;
  boldItalic?: boolean;
}

export default function Text({
  style,
  children,
  primary,
  secondary,
  highlight,
  regular,
  italic,
  semiBold,
  semiBoldItalic,
  bold,
  boldItalic,
  ...rest
}: CustomTextProps) {
  const colors = useAppSelector((state) => state.settings.theme.colors);

  return (
    <TextDefault
      style={[
        {
          fontFamily: regular
            ? fonts[0]
            : italic
            ? fonts[1]
            : semiBold
            ? fonts[2]
            : semiBoldItalic
            ? fonts[3]
            : bold
            ? fonts[4]
            : boldItalic
            ? fonts[5]
            : fonts[0],
          color: highlight
            ? colors[600]
            : secondary
            ? colors[900]
            : colors[900],
        },
        style,
      ]}
      {...rest}
    >
      {children}
    </TextDefault>
  );
}
