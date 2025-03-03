import {
  FlatList,
  Linking,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  CollapsibleContent,
  Text,
  Gap,
  IconMCI,
  LoadingOverlay,
  ButtonCommon,
  Card,
} from "@/components";
import { works, type WorkType } from "@/constant";
import { useIsFocused } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useAppSelector } from "@/hooks";

export default function Work() {
  const performance = useAppSelector((state) => state.settings.performance);
  const isFocused = useIsFocused();

  const [detailIndex, setDetailIndex] = useState<null | number>(null);
  const [data, setData] = useState<WorkType[]>([]);

  useEffect(() => {
    if (performance == "default") {
      if (isFocused) {
        setTimeout(() => {
          setData(works);
        }, 750);
      } else setData([]);
    } else data.length == 0 && setData(works);
  }, [isFocused, performance]);

  if (data.length == 0) return <LoadingOverlay />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      ListFooterComponent={<Gap bottomGapNavBar />}
      ListHeaderComponent={
        <Text bold style={{ fontSize: 30 }}>
          <Text bold highlight>
            Cool Stuff
          </Text>{" "}
          Ahead!
        </Text>
      }
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
            <Card style={{ marginVertical: 10 }}>
              <Pressable
                style={styles.btnDetail}
                onPress={() =>
                  setDetailIndex(detailIndex == index ? null : index)
                }
              >
                <Image
                  source={item.icon}
                  style={{ width: 50, height: 50, borderRadius: 10 }}
                  resizeMethod="resize"
                />
                <Text style={styles.textAppName} bold>
                  {item.name}
                </Text>
                <IconMCI
                  iconNameMCI={
                    detailIndex == index ? "chevron-up" : "chevron-down"
                  }
                  size={25}
                />
              </Pressable>

              <View style={styles.viewContainerTag}>
                {item.tag.map((Tag, index) => (
                  <Tag key={index} />
                ))}
              </View>

              <Gap height={10} />

              <CollapsibleContent visible={detailIndex == index}>
                <Text style={{ marginHorizontal: 20 }}>{item.description}</Text>
                <Gap height={10} />
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={Platform.OS == "web"}
                  contentContainerStyle={{
                    paddingHorizontal: 15,
                  }}
                >
                  {item.images.map((item, i) => (
                    <View key={i} style={styles.viewImage}>
                      <Image
                        source={item}
                        style={{ width: 150, height: 250 }}
                        resizeMethod="resize"
                      />
                    </View>
                  ))}
                </ScrollView>
                <Gap height={10} />
                <View style={{ flexDirection: "row", marginHorizontal: 15 }}>
                  {item.link.map((item, i) => (
                    <ButtonCommon
                      key={i}
                      primary={false}
                      title={item.name}
                      iconLeftMCI={item.icon}
                      style={styles.btnLink}
                      textGap={5}
                    />
                  ))}
                </View>
                <Gap height={15} />
              </CollapsibleContent>
            </Card>
          </Animated.View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  viewContainerTag: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
  },
  btnDetail: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  btnLink: {
    height: 45,
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingLeft: 15,
    margin: 5,
  },
  viewImage: {
    width: 150,
    height: 250,
    borderRadius: 20,
    overflow: "hidden",
    shadowRadius: 3,
    shadowOpacity: 0.25,
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "black",
    elevation: 5,
    margin: 5,
  },
  viewTag: {
    borderWidth: 1,
    flexDirection: "row",
    height: 30,
    alignItems: "center",
    paddingHorizontal: 10,
    borderRadius: 30 / 2,
    margin: 5,
  },
  textAppName: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 17,
  },
  container: {
    alignSelf: "center",
    width: "85%",
    maxWidth: 600,
    marginVertical: 40,
  },
});
