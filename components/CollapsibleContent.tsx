import React, { useState, useEffect, useCallback, memo } from "react";
import {
  View,
  LayoutChangeEvent,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  FadeOut,
  FadeIn,
} from "react-native-reanimated";

// thank you, chat gpt or whoever made this code and scrapped by chat gpt. *kiss*
// the reason this is complicated because LayoutAnimation is no longer working-
// in newer version of React Native. i dont know why.
// so here is the simple micro animation built with reanimated library.
// and some memo optimization.

interface CollapsibleContentProps {
  visible: boolean;
  children: React.ReactNode;
}

const CollapsibleContent: React.FC<CollapsibleContentProps> = memo(
  ({ visible, children }) => {
    // Use window dimensions to force re-mount of the hidden container on changes.
    const { width, height } = useWindowDimensions();

    // Shared value for animated height.
    const animatedHeight = useSharedValue(0);
    // Local state to store the measured content height.
    const [contentHeight, setContentHeight] = useState(0);

    // Memoized onLayout callback to avoid unnecessary re-creation.
    const onLayout = useCallback(
      (e: LayoutChangeEvent) => {
        const measured = e.nativeEvent.layout.height;
        // Only update if the measurement is valid and has changed.
        if (measured > 0 && measured !== contentHeight) {
          setContentHeight(measured);
        }
      },
      [contentHeight]
    );

    // Animated style that uses the shared value.
    const animatedStyle = useAnimatedStyle(() => ({
      height: animatedHeight.value,
      opacity: animatedHeight.value === 0 ? 0 : 1,
    }));

    // When visibility or measured height changes, animate accordingly.
    useEffect(() => {
      if (contentHeight > 0) {
        // You can experiment with withSpring here instead:
        // animatedHeight.value = withSpring(visible ? contentHeight : 0);
        animatedHeight.value = withTiming(visible ? contentHeight : 0, {
          duration: 300,
        });
      }
    }, [visible, contentHeight, animatedHeight]);

    return (
      <>
        {/*
          The hidden container is used solely for measuring the content.
          By including the current window dimensions in its key,
          it re-mounts (and thus re-measures) whenever the window size changes.
        */}
        <View
          key={`hidden-${width}-${height}`}
          style={styles.hiddenContainer}
          onLayout={onLayout}
        >
          {children}
        </View>
        {/*
          The visible Animated.View uses the measured height to animate open/close.
        */}
        <Animated.View style={[styles.collapsibleContainer, animatedStyle]}>
          {visible && (
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              {children}
            </Animated.View>
          )}
        </Animated.View>
      </>
    );
  }
);

const styles = StyleSheet.create({
  hiddenContainer: {
    position: "absolute",
    opacity: 0,
    pointerEvents: "none",
  },
  collapsibleContainer: {
    overflow: "hidden",
  },
});

export default CollapsibleContent;
