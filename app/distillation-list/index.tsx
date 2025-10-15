import { BottomButtonList } from "@/components/Container";
import { ListItem } from "@/components/ListItem";
import { Text } from "@/components/Text";
import { theme } from "@/config/theme";
import {
  useDeleteDistillation,
  useDistillationList,
} from "@/quries/distillation.query";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

function Item({ data }: { data: Distillation }) {
  const { mutate, isPending } = useDeleteDistillation();

  return (
    <ListItem
      disabled={isPending}
      data={{
        ရက်စွဲ: new Date(data.created_at).toLocaleDateString(),
        ဆန်အမျိုးအစား: data.sapa_type.name,
        တင်းရေ: data.count,
        ကြိတ်ခ: data.amount,
      }}
      onLongPress={() => mutate(data.id)}
    />
  );
}

export default function DistillationList() {
  const { data, isLoading } = useDistillationList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} data={item} />}
      isLoading={isLoading}
      label="ပေါင်းခံ စာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/distillation-list/add-new")}
      extra={
        <View style={styles.row}>
          <Text>စုစုပေါင်း</Text>
          <Text style={styles.total}>
            {data?.total?.toLocaleString() || 0} ကျပ်
          </Text>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.md,
  },
  total: {
    fontSize: theme.fontSizes.lg,
    fontFamily: "Font-Bold",
  },
});
