import Svg, {
  SvgProps,
  Rect,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";

interface Props extends SvgProps {}

export default function SvgTrello(props: Props) {
  return (
    <Svg width="2500" height="2500" viewBox="0 0 256 256" {...props}>
      <Defs>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="a">
          <Stop stopColor="#0091E6" offset="0%" />
          <Stop stopColor="#0079BF" offset="100%" />
        </LinearGradient>
      </Defs>
      <Rect fill="url(#a)" width="256" height="256" rx="25" />
      <Rect
        fill="#FFF"
        x="144.64"
        y="33.28"
        width="78.08"
        height="112"
        rx="12"
      />
      <Rect
        fill="#FFF"
        x="33.28"
        y="33.28"
        width="78.08"
        height="176"
        rx="12"
      />
    </Svg>
  );
}
