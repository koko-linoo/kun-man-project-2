import { BottomButtonList } from "@/components/Container";
import { theme } from "@/config/theme";
import { useDeleteSapa, useSapaList } from "@/quries/sapa.query";
import { router } from "expo-router";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

function Item({ sapa }: { sapa: Sapa }) {
  const { mutate, isPending } = useDeleteSapa();

  return (
    <TouchableOpacity onLongPress={() => mutate(sapa.id)} disabled={isPending}>
      <View style={styles.item}>
        <Text>{sapa.name}</Text>
        {isPending && <ActivityIndicator style={{ marginRight: 16 }} />}
      </View>
    </TouchableOpacity>
  );
}

export default function EmployeeList() {
  const { data, isLoading } = useSapaList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} sapa={item} />}
      isLoading={isLoading}
      label="စပါးအမျိုးအစား အသစ်ထည့်ရန်"
      onPress={() => router.push("/sapa-list/add-new")}
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
