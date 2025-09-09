import { BottomButtonList } from "@/components/Container";
import { ListItem } from "@/components/ListItem";
import { useDeletePurchase, usePurchaseList } from "@/quries/purchase.query";
import { router } from "expo-router";

function Item({ data }: { data: Purchase }) {
  const { mutate, isPending } = useDeletePurchase();

  return (
    <ListItem
      disabled={isPending}
      data={{
        ရက်စွဲ: new Date(data.created_at).toLocaleDateString(),
        အမည်: data.name,
        "စပါး အမျိုးအစား": data.sapa_type?.name,
        "အလေးချိန် (တင်း)": data.tin,
        "အလေးချိန် (ပေါင်)": data.paung,
        တန်ဖိုး: `${data.amount?.toLocaleString()} ကျပ်`,
      }}
      onLongPress={() => mutate(data.id)}
    />
  );
}

export default function PurchaseList() {
  const { data, isLoading } = usePurchaseList();

  return (
    <BottomButtonList
      items={data?.data || []}
      child={(item) => <Item key={item.id} data={item} />}
      isLoading={isLoading}
      label="အဝယ်စာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/purchase-list/add-new")}
    />
  );
}
