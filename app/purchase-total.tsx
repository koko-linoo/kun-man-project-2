import { List } from "@/components/Container";
import { Text } from "@/components/Text";
import { theme } from "@/config/theme";
import { useGetTotalPurchase } from "@/quries/purchase.query";
import React from "react";
import { StyleSheet, View } from "react-native";

export default function PurchaseTotal() {
  const { data, isPending } = useGetTotalPurchase();

  return (
    <View style={{ flex: 1, padding: theme.spacing.md, gap: theme.spacing.md }}>
      <View
        style={{
          padding: theme.spacing.md,
          backgroundColor: theme.colors.primary,
          flexDirection: "row",
          gap: theme.spacing.sm,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ flex: 1, color: "white" }}>စပါး</Text>
        <Text style={{ flex: 1, color: "white" }}>တင်း</Text>
        <Text style={{ flex: 1, color: "white" }}>ပေါင်</Text>
        <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
          တန်ဖိုး
        </Text>
      </View>
      <List
        items={data?.data ?? []}
        child={(item) => (
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              gap: theme.spacing.sm,
              padding: theme.spacing.md,
              borderBottomWidth: 1,
            }}
          >
            <Text style={{ flex: 1 }}>{item.name}</Text>
            <Text style={{ flex: 1 }}>{item.tin}</Text>
            <Text style={{ flex: 1 }}>{item.paung}</Text>
            <Text style={{ flex: 1, textAlign: "right" }}>
              {item.amount.toLocaleString()}
            </Text>
          </View>
        )}
        isLoading={isPending}
      />
      <View style={styles.row}>
        <Text>စုစုပေါင်း</Text>
        <Text style={styles.total}>
          {data?.total?.toLocaleString() || 0} ကျပ်
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    alignItems: "center",
    borderRadius: theme.spacing.md,
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xl,
  },
  total: {
    fontSize: theme.fontSizes.lg,
    fontFamily: "Font-Bold",
  },
});
