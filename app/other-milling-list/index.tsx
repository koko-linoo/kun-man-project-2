import { BottomButtonList } from "@/components/Container";
import { ListItem } from "@/components/ListItem";
import { Text } from "@/components/Text";
import { theme } from "@/config/theme";
import {
  useDeleteOtherMilling,
  useOtherMillingList,
} from "@/quries/other-milling.query";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

function Item({ data }: { data: OtherMilling }) {
  const { mutate, isPending } = useDeleteOtherMilling();

  return (
    <ListItem
      disabled={isPending}
      data={{
        ရက်စွဲ: new Date(data.created_at).toLocaleDateString(),
        ဆန်အမျိုးအစား: data.san_type.name,
        ဆန်အိတ်အရေအတွက်: data.san_count,
        ဆန်ကွဲအိတ်အရေအတွက်: data.san_kwal_count,
        ကြိတ်ခ: data.amount,
      }}
      onLongPress={() => mutate(data.id)}
    />
  );
}

export default function OtherMillingList() {
  const { data, isLoading } = useOtherMillingList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} data={item} />}
      isLoading={isLoading}
      label="ဆန်ကြိတ်စာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/other-milling-list/add-new")}
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
