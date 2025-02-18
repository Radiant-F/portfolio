import {
  StyleSheet,
  Text,
  View,
  TextInput as DefaultInput,
  TextInputProps,
} from "react-native";
import React from "react";
import { useAppSelector } from "@/hooks";

export default function TextInput({ style, ...rest }: TextInputProps) {
  const colors = useAppSelector((state) => state.settings.theme.colors);
  return (
    <View
      style={{
        backgroundColor: colors.input,
        minHeight: 45,
        maxHeight: 100,
        shadowRadius: 3,
        shadowOpacity: 0.25,
        shadowOffset: { width: 1, height: 1 },
        shadowColor: "black",
        elevation: 5,
        borderRadius: 45 / 2,
      }}
    >
      <DefaultInput
        style={[
          {
            minHeight: 45,
            color: colors.text,
            fontFamily: "ManropeRegular",
            paddingHorizontal: 20,
            paddingVertical: 12.5,
            borderRadius: 45 / 2,
          },
          style,
        ]}
        placeholderTextColor={colors.input_placeholder}
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
