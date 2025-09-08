import { BottomButtonList } from "@/components/Container";
import { ListItem } from "@/components/ListItem";
import { useDeleteMilling, useMillingList } from "@/quries/milling.query";
import { router } from "expo-router";

function Item({ data }: { data: Milling }) {
  const { mutate, isPending } = useDeleteMilling();

  return (
    <ListItem
      disabled={isPending}
      data={{
        ရက်စွဲ: new Date(data.created_at).toLocaleDateString(),
        ဆန်အမျိုးအစား: data.san_type.name,
        အရေအတွက်: data.count,
      }}
      onLongPress={() => mutate(data.id)}
    />
  );
}

export default function MillingList() {
  const { data, isLoading } = useMillingList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} data={item} />}
      isLoading={isLoading}
      label="ဆန်ကြိတ်စာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/milling-list/add-new")}
    />
  );
}
