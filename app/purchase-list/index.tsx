import { BottomButton } from "@/components/Container";
import { router } from "expo-router";
import { Text } from "react-native";

export default function PurchaseList() {
  return (
    <BottomButton
      label="အဝယ် စာရင်း အသစ်ထည့်ရန်"
      onPress={() => router.push("/purchase-list/add-new")}
    >
      <Text>Purchase List</Text>
    </BottomButton>
  );
}
