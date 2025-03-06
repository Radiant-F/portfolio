import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import Text from "../Text";
import ButtonCommon from "../ButtonCommon";
import Gap from "../Gap";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { resetSettings } from "@/redux/slice/settings";
import { mmkv } from "@/utils";

export default function Action({ onAction }: { onAction: () => void }) {
  const dispatch = useAppDispatch();
  const settings = useAppSelector((state) => state.settings);

  function onResetPreferences() {
    dispatch(resetSettings());
    mmkv.delete("settings");
    onAction();
  }

  function onSavePreferences() {
    mmkv.set("settings", JSON.stringify(settings));
    onAction();
  }

  return (
    <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
      <TouchableOpacity
        style={styles.btnReset}
        activeOpacity={0.75}
        onPress={onResetPreferences}
      >
        <Text semiBold>Reset</Text>
      </TouchableOpacity>
      <Gap width={20} />
      <ButtonCommon
        style={styles.btnSave}
        title="Save"
        primary={false}
        onPress={onSavePreferences}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  btnReset: {
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  btnSave: {
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 20,
  },
});
