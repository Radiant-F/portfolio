import { View, DimensionValue, Platform } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Props = {
  width?: DimensionValue | undefined;
  height?: DimensionValue | undefined;
  flex?: number | undefined;
  bottomGapNavBar?: boolean;
  topGapHeight?: boolean;
};

export default function Gap({
  height,
  width,
  flex,
  bottomGapNavBar,
  topGapHeight,
}: Props) {
  const insets = useSafeAreaInsets();
  const bottomGap =
    (Platform.OS != "web"
      ? insets.top + (Platform.OS == "android" ? 15 : 5)
      : 15) + 70; // 70 is the nav bar height without top inset

  const topGap =
    Platform.OS != "web"
      ? insets.top + (Platform.OS == "android" ? 15 : 5)
      : 15;

  return (
    <View
      style={{
        width,
        height: height
          ? height
          : bottomGapNavBar
          ? bottomGap
          : topGapHeight
          ? topGap
          : undefined,
        flex,
      }}
    />
  );
}
