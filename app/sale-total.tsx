import { List } from "@/components/Container";
import { Text } from "@/components/Text";
import { theme } from "@/config/theme";
import { useGetTotalSale } from "@/quries/sale.query";
import React from "react";
import { View } from "react-native";

export default function RemainingList() {
  const { data, isPending } = useGetTotalSale();

  return (
    <>
      <View
        style={{
          marginTop: theme.spacing.md,
          marginHorizontal: theme.spacing.md,
          padding: theme.spacing.md,
          backgroundColor: theme.colors.primary,
          flexDirection: "row",
          gap: theme.spacing.sm,
          borderBottomWidth: 1,
        }}
      >
        <Text style={{ flex: 1, color: "white" }}>ဆန်အမျိုးအစား</Text>
        <Text style={{ flex: 1, textAlign: "right", color: "white" }}>
          ဆန်အိတ်
        </Text>
        <Text style={{ flex: 1, textAlign: "right", color: "white" }}>
          တန်ဖိုး
        </Text>
      </View>
      <List
        items={data ?? []}
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
            <Text style={{ flex: 1, textAlign: "right" }}>{item.count}</Text>
            <Text style={{ flex: 1, textAlign: "right" }}>
              {item.amount.toLocaleString()}
            </Text>
          </View>
        )}
        isLoading={isPending}
      />
    </>
  );
}
