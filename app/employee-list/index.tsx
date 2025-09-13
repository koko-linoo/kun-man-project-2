import { BottomButtonList } from "@/components/Container";
import { ListItem } from "@/components/ListItem";
import { theme } from "@/config/theme";
import { useDeleteEmployee, useEmployeeList } from "@/quries/employee.query";
import { router } from "expo-router";
import { View } from "react-native";

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
    <>
      <View
        style={{
          margin: theme.spacing.md,
        }}
      >
        <ListItem
          disabled
          data={{
            စုစုပေါင်း: (data?.total || 0).toLocaleString() + " ကျပ်",
          }}
        />
      </View>
      <BottomButtonList
        items={data?.data || []}
        child={(item) => <Item key={item.id} data={item} />}
        isLoading={isLoading}
        label="ဝန်ထမ်း အသစ်ထည့်ရန်"
        onPress={() => router.push("/employee-list/add-new")}
      />
    </>
  );
}
