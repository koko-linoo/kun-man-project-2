import { supabase } from "@/config/supabase";

export async function getPurchaseList() {
  const { data } = await supabase
    .from("purchase_list")
    .select("*, sapa_type(name)")
    .order("created_at", { ascending: false });

  const total = data?.map((item) => item.amount).reduce((a, b) => a + b, 0);

  return {
    data,
    total,
  };
}

export async function createPurchase(purchase: Record<string, any>) {
  if (!purchase.name) {
    return Promise.reject({
      message: "အမည် ထည့်သွင်းပါ",
    });
  }

  if (!purchase.amount) {
    return Promise.reject({
      message: "တန်ဖိုးထည့်သွင်းပါ",
    });
  }

  if (!purchase.tin || !purchase.paung) {
    return Promise.reject({
      message: "တင်းနှင့် ပေါင် ထည့်သွင်းပါ",
    });
  }

  const result = await supabase.from("purchase_list").insert({
    name: purchase.name,
    amount: purchase.amount,
    tin: purchase.tin,
    paung: purchase.paung,
    sapa_type: purchase.sapa,
  });

  if (result.error) {
    return Promise.reject({
      message: "တခုခုမှားယွင်းနေပါသည်",
    });
  }

  return result;
}

export function deletePurchase(id: number) {
  return supabase.from("purchase_list").delete().eq("id", id);
}
