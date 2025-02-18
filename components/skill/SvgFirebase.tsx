import React from "react";
import Svg, { Path, SvgProps } from "react-native-svg";

interface Props extends SvgProps {}

export default function SvgFirebase(props: Props) {
  return (
    <Svg x="0px" y="0px" viewBox="0 0 1781 2466.8" {...props}>
      <Path
        fill={"#FFA000"}
        d="M1169.4,891l-246.7,229.7l-229-462.1L812,392.9c29.9-53,78.8-53.7,108.7,0L1169.4,891z"
      />
      <Path
        fill={"#F57F17"}
        d="M922.8,1120.6L0,1978.9L693.8,658.6L922.8,1120.6z"
      />
      <Path
        fill={"#FFCA28"}
        d="M1439.9,539.7c44.2-42.1,89.7-27.9,101.2,31.9L1781,1967.3L985.3,2445c-27.9,15.6-101.9,21.7-101.9,21.7
	s-67.3-8.2-93.1-22.4L0,1978.9L1439.9,539.7z"
      />
      <Path
        fill={"#FFA000"}
        d="M693.8,658.6L0,1978.9L309.2,49.1c11.6-59.8,45.5-65.9,76.1-12.9L693.8,658.6z"
      />
    </Svg>
  );
}
