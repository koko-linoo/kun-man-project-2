import { BottomButtonList } from "@/components/Container";
import { theme } from "@/config/theme";
import { useDeleteSan, useSanList } from "@/quries/san.query";
import { router } from "expo-router";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Item({ san }: { san: San }) {
  const { mutate, isPending } = useDeleteSan();

  return (
    <TouchableOpacity onLongPress={() => mutate(san.id)} disabled={isPending}>
      <View style={styles.item}>
        <Text>{san.name}</Text>
        {isPending && <ActivityIndicator style={{ marginRight: 16 }} />}
      </View>
    </TouchableOpacity>
  );
}

export default function EmployeeList() {
  const { data, isLoading } = useSanList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} san={item} />}
      isLoading={isLoading}
      label="ဆန်အမျိုးအစား အသစ်ထည့်ရန်"
      onPress={() => router.push("/san-list/add-new")}
    />
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
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
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  container: {
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
    flex: 1,
  },
});
