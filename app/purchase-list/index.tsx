import { BottomButtonList } from "@/components/Container";
import { theme } from "@/config/theme";
import { useDeletePurchase, usePurchaseList } from "@/quries/purchase.query";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

function Item({ purchase }: { purchase: Purchase }) {
  const { mutate, isPending } = useDeletePurchase();

  return (
    <TouchableOpacity
      style={styles.item}
      onLongPress={() => mutate(purchase.id)}
      disabled={isPending}
    >
      <View style={styles.rowBetween}>
        <Text style={styles.label}>ရက်စွဲ -</Text>
        <Text style={styles.value}>
          {new Date(purchase.created_at).toLocaleDateString()}
        </Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.label}>အမည် -</Text>
        <Text style={styles.value}>{purchase.name}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.label}>အလေးချိန် (တင်း) -</Text>
        <Text style={styles.value}>{purchase.tin}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.label}>အလေးချိန် (ပေါင်) -</Text>
        <Text style={styles.value}>{purchase.paung}</Text>
      </View>
      <View style={styles.rowBetween}>
        <Text style={styles.label}>တန်ဖိုး -</Text>
        <Text style={styles.value}>
          {purchase.amount?.toLocaleString()} ကျပ်
        </Text>
      </View>
    </TouchableOpacity>
  );
}

export default function PurchaseList() {
  const { data, isLoading } = usePurchaseList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} purchase={item} />}
      isLoading={isLoading}
      label="အဝယ် စာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/purchase-list/add-new")}
    />
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    padding: theme.spacing.sm,
  },
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  item: {
    padding: theme.spacing.md,
    backgroundColor: "white",
    borderRadius: theme.spacing.sm,
    shadowColor: "#ccc",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 6,
    margin: 2,
  },
  container: {
    padding: theme.spacing.sm - 2,
    gap: theme.spacing.md - 2,
    flex: 1,
  },
  label: {
    fontSize: theme.fontSizes.md,
  },
  value: {
    fontSize: theme.fontSizes.lg,
    fontWeight: 700,
  },
});
