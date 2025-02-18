import { FlatList, Image, Pressable, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  ManropeBold,
  ManropeExtraBold,
  experiences,
  type ExperienceType,
} from "@/constant";
import {
  Text,
  Gap,
  IconMCI,
  CollapsibleContent,
  LoadingOverlay,
} from "@/components";
import { useIsFocused } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useAppSelector } from "@/hooks";

export default function Experience() {
  const performance = useAppSelector((state) => state.settings.performance);
  const isFocused = useIsFocused();

  const [detailIndex, setDetailIndex] = useState<null | number>(null);
  const [data, setData] = useState<ExperienceType[]>([]);

  useEffect(() => {
    if (performance == "default") {
      if (isFocused) {
        setTimeout(() => {
          setData(experiences);
        }, 750);
      } else setData([]);
    } else data.length == 0 && setData(experiences);
  }, [isFocused, performance]);

  if (data.length == 0) return <LoadingOverlay />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<Gap bottomGapNavBar />}
      contentContainerStyle={styles.container}
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Animated.View
            entering={
              performance == "default"
                ? FadeInDown.delay(index * 100)
                : undefined
            }
            style={{ overflow: "hidden" }}
          >
            <View style={styles.viewContainer}>
              <Pressable
                style={styles.btnHeader}
                onPress={() =>
                  setDetailIndex(detailIndex == index ? null : index)
                }
              >
                <View style={{ flex: 1 }}>
                  <Text style={styles.textCompanyTitle}>• {item.company}</Text>
                  <Image
                    source={item.image}
                    resizeMethod="resize"
                    resizeMode="contain"
                    style={{ width: 100, height: 50 }}
                  />
                </View>
                <IconMCI
                  iconNameMCI={
                    detailIndex == index ? "chevron-up" : "chevron-down"
                  }
                  size={25}
                />
              </Pressable>

              <CollapsibleContent visible={detailIndex == index}>
                <Text style={styles.textRole}>{item.role}</Text>
                {item.achievement.map((value, i) => {
                  return (
                    <Text key={i} style={{ marginVertical: 5 }}>
                      • {value}
                    </Text>
                  );
                })}
                <Gap height={10} />
                <Text style={{ textAlign: "center" }}>{item.contract}</Text>
              </CollapsibleContent>
            </View>
          </Animated.View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  textRole: {
    fontFamily: ManropeBold,
    textAlign: "center",
    marginHorizontal: 10,
    marginVertical: 5,
  },
  btnHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  textCompanyTitle: {
    fontFamily: ManropeExtraBold,
    fontSize: 17,
  },
  viewContainer: {
    padding: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#383e4d",
  },
  container: {
    alignSelf: "center",
    width: "85%",
    maxWidth: 600,
    marginVertical: 40,
  },
  title: {
    fontFamily: ManropeExtraBold,
    fontSize: 30,
    // textAlign: "center",
  },
});
