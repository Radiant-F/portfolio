import React, { useEffect, useMemo, useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import Text from "../Text";
import Gap from "../Gap";
import { galery } from "@/constant";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setShowGalery } from "@/redux/slice/settings";

// get one random image from each work
const getRandomImageFromEachWork = (): number[] => {
  return galery.map((workImages) => {
    const randomIndex = Math.floor(Math.random() * workImages.length);
    return workImages[randomIndex];
  });
};

export default function Galery() {
  const dispatch = useAppDispatch();
  const colors = useAppSelector((state) => state.settings.theme.colors);

  const IMAGE_WIDTH = 400;
  const IMAGE_HEIGHT = 500;
  const SCROLL_DELAY = 3000; // ms

  const images = useMemo(() => getRandomImageFromEachWork(), []);

  const scrollX = useSharedValue(0);
  const currentIndex = useSharedValue(0);
  const [currentIndexState, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (currentIndex.value + 1) % images.length;
      currentIndex.value = nextIndex;
      setCurrentIndex(nextIndex);
      scrollX.value = withTiming(nextIndex * IMAGE_WIDTH, { duration: 1000 });
    }, SCROLL_DELAY);
    return () => clearInterval(intervalId);
  }, []);

  const scrollHandler = useAnimatedScrollHandler((event) => {
    const index = Math.floor(event.contentOffset.x / IMAGE_WIDTH);
    if (index !== currentIndex.value) {
      currentIndex.value = index;
    }
  });

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    currentIndex.value = index;
    scrollX.value = withTiming(index * IMAGE_WIDTH, { duration: 500 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return { transform: [{ translateX: -scrollX.value }] };
  });

  const show_galery = useAppSelector(
    (state) => state.settings.layout_home.show_galery
  );
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (width >= 1000 && height >= 700 && !show_galery) {
      dispatch(setShowGalery(true));
    } else if ((width < 1000 && show_galery) || (height < 700 && show_galery)) {
      dispatch(setShowGalery(false));
    }
  }, [width, height]);

  if (show_galery)
    return (
      <View style={{ flexDirection: "row" }}>
        <View
          style={{
            ...styles.container,
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
          }}
        >
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: "row" }}
            onScroll={scrollHandler}
            scrollEnabled={false}
          >
            <Animated.View style={[{ flexDirection: "row" }, animatedStyle]}>
              {images.map((image, index) => (
                <View key={index} style={{ backgroundColor: "black" }}>
                  <Image
                    resizeMethod="resize"
                    source={image}
                    blurRadius={25}
                    style={styles.imgBlur}
                  />
                  <Image
                    resizeMethod="resize"
                    resizeMode="contain"
                    source={image}
                    style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
                  />
                </View>
              ))}
            </Animated.View>
          </Animated.ScrollView>
        </View>

        <Gap width={5} />

        <View>
          {images.map((_, i) => {
            const backgroundColor =
                currentIndexState == i
                  ? colors.button_primary
                  : colors.button_secondary,
              textColor =
                currentIndexState == i ? colors.button_secondary : colors.text;

            return (
              <Pressable
                style={{ ...styles.btnImgIndex, backgroundColor }}
                onPress={() => scrollToIndex(i)}
                key={i}
              >
                <Text selectable={false} style={{ color: textColor }} semiBold>
                  {i + 1}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
  imgBlur: {
    width: "100%",
    height: "100%",
    position: "absolute",
    opacity: 0.5,
  },
  btnImgIndex: {
    width: 30,
    height: 30,
    borderRadius: 30 / 2,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  container: {
    overflow: "hidden",
    backgroundColor: "#1F1F26",
    borderRadius: 20,
    elevation: 5,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
  },
});
