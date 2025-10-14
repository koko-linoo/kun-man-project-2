import { List } from "@/components/Container";
import { Text } from "@/components/Text";
import { theme } from "@/config/theme";
import { useRemainingList } from "@/quries/remaining.query";
import React from "react";
import { View } from "react-native";

export default function RemainingList() {
  const { data, isPending } = useRemainingList();

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
        <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
          ဆန်အမျိုးအစား
        </Text>
        <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
          ဆန်ကြိတ်
        </Text>
        <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
          အရောင်း
        </Text>
        <Text style={{ flex: 1, textAlign: "center", color: "white" }}>
          လက်ကျန်
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
            <Text style={{ flex: 1, textAlign: "right" }}>{item.milling}</Text>
            <Text style={{ flex: 1, textAlign: "right" }}>{item.sale}</Text>
            <Text style={{ flex: 1, textAlign: "right" }}>
              {item.remaining}
            </Text>
          </View>
        )}
        isLoading={isPending}
      />
    </View>
  );
}
