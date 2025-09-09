import { BottomButtonList } from "@/components/Container";
import { ListItem } from "@/components/ListItem";
import { useDeleteSale, useSaleList } from "@/quries/sale.query";
import { router } from "expo-router";

function Item({ data }: { data: Sale }) {
  const { mutate, isPending } = useDeleteSale();

  return (
    <ListItem
      disabled={isPending}
      data={{
        ရက်စွဲ: new Date(data.created_at).toLocaleDateString(),
        အမည်: data.name,
        "ဆန် အမျိုးအစား": data.san_type?.name,
        "အိတ် အရေအတွက်": data.count + " အိတ်",
        တန်ဖိုး: `${data.amount?.toLocaleString()} ကျပ်`,
      }}
      onLongPress={() => mutate(data.id)}
    />
  );
}

export default function SaleList() {
  const { data, isLoading } = useSaleList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} data={item} />}
      isLoading={isLoading}
      label="အရောင်းစာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/sale-list/add-new")}
    />
  );
}
