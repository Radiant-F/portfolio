import React from "react";
import Svg, { Rect, SvgProps, Circle } from "react-native-svg";

interface Props extends SvgProps {}

export default function SvgNotifee(props: Props) {
  return (
    <Svg width="200" height="200" viewBox="0 0 200 200" {...props}>
      <Circle cx="100" cy="100" r="90" fill="#533F97" />
      <Rect x="10" width="100" height="25" y="55" fill="#D1B9FF" />
      <Rect x="50" width="100" height="25" y="90" fill="#E6D4FF" />
      <Rect x="90" width="100" height="25" y="125" fill="#D1B9FF" />
    </Svg>
  );
}
