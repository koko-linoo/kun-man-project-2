import { BottomButtonList } from "@/components/Container";
import { ListItem } from "@/components/ListItem";
import { Text } from "@/components/Text";
import { theme } from "@/config/theme";
import { useDeleteEmployee, useEmployeeList } from "@/quries/employee.query";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

function Item({ data }: { data: Employee }) {
  const { mutate, isPending } = useDeleteEmployee();

  return (
    <ListItem
      disabled={isPending}
      data={{
        ရက်စွဲ: new Date(data.created_at).toLocaleDateString(),
        အမည်: data.name,
        လစာ: data.fee?.toLocaleString() + " ကျပ်",
      }}
      onLongPress={() => mutate(data.id)}
    />
  );
}

export default function EmployeeList() {
  const { data, isLoading } = useEmployeeList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} data={item} />}
      isLoading={isLoading}
      label="ဝန်ထမ်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/employee-list/add-new")}
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
