import { StyleSheet, FlatList, View, Pressable } from "react-native";
import { useEffect, useState } from "react";
import {
  Text,
  IconMCI,
  CollapsibleContent,
  Gap,
  LoadingOverlay,
  Card,
} from "@/components";
import { skills, SkillType } from "@/constant";
import { useIsFocused } from "@react-navigation/native";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useAppSelector } from "@/hooks";

export default function Skills() {
  const performance = useAppSelector((state) => state.settings.performance);
  const isFocused = useIsFocused();

  const [detailIndex, setDetailIndex] = useState<null | number>(null);
  const [data, setData] = useState<SkillType[]>([]);

  useEffect(() => {
    if (performance == "default") {
      if (isFocused) {
        setTimeout(() => {
          setData(skills);
        }, 750);
      } else setData([]);
    } else data.length == 0 && setData(skills);
  }, [isFocused, performance]);

  if (data.length === 0) return <LoadingOverlay />;

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      ListFooterComponent={<Gap bottomGapNavBar />}
      contentContainerStyle={styles.container}
      ListHeaderComponent={
        <View>
          <Text style={{ fontSize: 30 }} bold>
            Checkout My{" "}
            <Text bold highlight>
              Poisons
            </Text>
            .
          </Text>
        </View>
      }
      data={data}
      renderItem={({ item, index }) => {
        return (
          <Animated.View
            entering={
              performance == "default"
                ? FadeInDown.delay(index * 50)
                : undefined
            }
            style={{ overflow: "hidden" }}
          >
            <Card style={{ marginVertical: 10 }}>
              <Pressable
                style={styles.btnDetail}
                onPress={() =>
                  setDetailIndex(detailIndex === index ? null : index)
                }
              >
                <item.Svg height={70} width={70} />
                <Text style={styles.textAppName} bold>
                  {item.title}
                </Text>
                <IconMCI
                  iconNameMCI={
                    detailIndex === index ? "chevron-up" : "chevron-down"
                  }
                  size={25}
                />
              </Pressable>

              <CollapsibleContent visible={detailIndex === index}>
                <View style={styles.containerDetail}>
                  {item.ability.map((v, i) => (
                    <View key={i} style={styles.viewDetail}>
                      <Text highlight semiBold>
                        {v.title}
                      </Text>
                      <Gap height={5} />
                      <Text>{v.description}</Text>
                    </View>
                  ))}
                </View>
              </CollapsibleContent>
            </Card>
          </Animated.View>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  btnDetail: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  viewDetail: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: "#383e4d",
    borderRadius: 10,
    paddingHorizontal: 15,
  },
  containerDetail: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#383e4d",
    borderRadius: 10,
    marginHorizontal: 20,
    marginBottom: 20,
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
