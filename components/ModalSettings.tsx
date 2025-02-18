import {
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Text from "./Text";
import {
  ManropeBold,
  ManropeSemiBold,
  theme_default,
  theme_pink,
  theme_amethyst,
  theme_red,
  type ThemeType,
} from "@/constant";
import Gap from "./Gap";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  resetSettings,
  setCustomTheme,
  setPerformance,
  setTheme,
} from "@/redux/slice/settings";
import { Picker } from "@react-native-picker/picker";
import ButtonCommon from "./ButtonCommon";
import { IconMCI as Icon } from "./Icons";
import { useState } from "react";
import CollapsibleContent from "./CollapsibleContent";
import ColorPicker, {
  Panel1,
  HueSlider,
  returnedResults,
} from "reanimated-color-picker";
import { generateTheme, mmkv } from "@/utils";

const themes: ThemeType[] = [
  theme_default,
  theme_amethyst,
  theme_pink,
  theme_red,
];

type Props = {
  visible: boolean;
  onRequestClose: () => void;
};

export default function ModalSettings({ visible, onRequestClose }: Props) {
  const performance = useAppSelector((state) => state.settings.performance);
  const { colors, mode } = useAppSelector((state) => state.settings.theme);
  const dispatch = useAppDispatch();

  const [showColorPicker, setShowColorPicker] = useState(false);
  const onSelectColor = (pickedColor: returnedResults) => {
    const theme = generateTheme(pickedColor.hex);
    dispatch(setCustomTheme(theme));
  };

  function onClose() {
    showColorPicker && setShowColorPicker(false);
    onRequestClose();
  }

  function onSavePreferences() {
    mmkv.set(
      "settings",
      JSON.stringify({ theme: { mode, colors }, performance })
    );
    onClose();
  }

  function onResetPreferences() {
    dispatch(resetSettings());
    mmkv.set(
      "settings",
      JSON.stringify({
        theme: { mode: "default", colors: theme_default },
        performance: "default",
      })
    );
  }

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <Pressable style={styles.backdrop} onPress={onClose} />
        <View style={styles.modalView}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ padding: 25 }}
          >
            <View style={styles.header}>
              <Text style={{ fontFamily: ManropeBold }}>Settings</Text>
              <TouchableOpacity
                activeOpacity={0.75}
                style={styles.btnClose}
                onPress={onClose}
              >
                <Icon
                  iconNameMCI="close-circle-outline"
                  size={25}
                  color={"#e1f2fe"}
                />
              </TouchableOpacity>
            </View>

            <Gap height={20} />

            {/* Theme */}
            <View style={styles.viewTitle}>
              <Icon iconNameMCI="brush" size={20} />
              <Text style={{ marginHorizontal: 10 }}>Theme</Text>
              <View style={styles.line} />
            </View>
            <Gap height={5} />
            <View style={styles.viewThemes}>
              {themes.map((theme, i) => (
                <ButtonCommon
                  onPress={() => dispatch(setTheme(theme.slug))}
                  key={i}
                  style={{ ...styles.btnTheme, backgroundColor: theme.main }}
                  childern={
                    <Text
                      style={{
                        color: theme.button_text_primary,
                        fontFamily: ManropeSemiBold,
                      }}
                    >
                      {theme.name}
                    </Text>
                  }
                />
              ))}
            </View>
            <ButtonCommon
              onPress={() => setShowColorPicker(!showColorPicker)}
              style={styles.btnThemeCustom}
              primary={false}
              alignSelf="center"
              childern={
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Text style={{ fontFamily: ManropeSemiBold }}>Custom</Text>
                  <Gap width={5} />
                  <Icon
                    iconNameMCI={
                      showColorPicker ? "chevron-up" : "chevron-down"
                    }
                    size={25}
                  />
                </View>
              }
            />
            <Gap height={5} />
            <CollapsibleContent visible={showColorPicker}>
              <ColorPicker
                thumbSize={20}
                style={styles.colorPicker}
                value={colors.main}
                onComplete={onSelectColor}
              >
                <HueSlider />
                <Gap height={5} />
                <Panel1 />
              </ColorPicker>
              <Text style={{ margin: 5 }}>
                Tips: When picking, try to tap to the color you want instead of
                dragging to avoid scrolling up or down.
              </Text>
            </CollapsibleContent>

            <Gap height={20} />

            {/* Performance */}
            <View style={styles.viewTitle}>
              <Icon iconNameMCI="lightning-bolt" size={20} />
              <Text style={{ marginHorizontal: 10 }}>Performance</Text>
              <View style={styles.line} />
            </View>
            <Gap height={10} />
            <View
              style={{
                ...styles.containerPicker,
                backgroundColor: colors.button_secondary,
              }}
            >
              <Picker
                selectedValue={performance}
                onValueChange={(value: "fast" | "default") =>
                  dispatch(setPerformance(value))
                }
                mode="dropdown"
                style={{ ...styles.picker, color: colors.text }}
                itemStyle={{ color: colors.text }}
                dropdownIconColor={colors.text}
              >
                <Picker.Item value={"default"} label="Default" />
                <Picker.Item value={"fast"} label="Fast" />
              </Picker>
              {Platform.OS == "ios" && (
                <View style={styles.viewDropdownIOS}>
                  <Icon iconNameMCI="arrow-up-down-bold" size={20} />
                </View>
              )}
            </View>
            <Gap height={10} />
            <Text style={{ marginHorizontal: 10 }}>
              {performance == "default"
                ? "Default: Unmount component on blur and always restart micro animation."
                : performance == "fast"
                ? "Fast: All component will be pre-rendered and reduced micro animation."
                : ""}
            </Text>

            <Gap height={20} />

            {/* Options */}
            <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
              <TouchableOpacity
                style={styles.btnReset}
                activeOpacity={0.75}
                onPress={onResetPreferences}
              >
                <Text style={{ fontFamily: ManropeSemiBold }}>Reset</Text>
              </TouchableOpacity>
              <Gap width={20} />
              <ButtonCommon
                style={styles.btnSave}
                title="Save"
                primary={false}
                onPress={onSavePreferences}
              />
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  colorPicker: {
    width: "100%",
    maxWidth: 300,
    alignSelf: "center",
  },
  viewThemes: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  btnThemeCustom: {
    height: 50,
    paddingHorizontal: 20,
    borderRadius: 10,
    margin: 5,
    paddingRight: 15,
  },
  btnTheme: {
    height: 50,
    width: 90,
    borderRadius: 10,
    margin: 5,
  },
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
  picker: {
    backgroundColor: "transparent",
    borderRadius: 25,
    justifyContent: "center",
    borderColor: "transparent",
    marginLeft: Platform.OS == "android" ? 10 : undefined,
    marginHorizontal: Platform.OS == "web" ? 20 : undefined,
    height:
      Platform.OS == "ios" ? 100 : Platform.OS == "android" ? undefined : 50,
  },
  containerPicker: {
    height: Platform.OS !== "ios" ? 50 : 100,
    justifyContent: "center",
    borderRadius: 25,
    overflow: "hidden",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    elevation: 5,
  },
  viewDropdownIOS: {
    position: "absolute",
    left: 20,
    opacity: 0.25,
  },
  viewTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#383e4d",
    flex: 1,
  },
  btnClose: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalView: {
    backgroundColor: "#1e1f24",
    width: "85%",
    alignSelf: "center",
    maxWidth: 480,
    borderRadius: 30,
    maxHeight: 480,
  },
  backdrop: {
    position: "absolute",
    width: "100%",
    height: "100%",
    backgroundColor: "black",
    opacity: 0.5,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
