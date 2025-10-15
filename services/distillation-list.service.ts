import { supabase } from "@/config/supabase";

export async function getDistillationList() {
  const { data } = await supabase
    .from("distillation_list")
    .select("*, sapa_type!distillation_list_sapa_type_fkey(name)")
    .order("created_at", { ascending: false });

  return {
    data,
    total: data?.reduce((acc, curr) => acc + curr.amount, 0) || 0,
  };
}

export async function createDistillation(distillation: Record<string, any>) {
  if (!distillation.sapa_type) {
    return Promise.reject({
      message: "စပါး အမျိုးအစား ရွေးပါ။",
    });
  }

  if (!distillation.count) {
    return Promise.reject({
      message: "တင်း အရေအတွက် ထည့်ပါ။",
    });
  }

  if (!distillation.amount) {
    return Promise.reject({
      message: "ပေါင်းခံခ ထည့်ပါ။",
    });
  }

  const result = await supabase.from("distillation_list").insert({
    sapa_type: distillation.sapa_type,
    count: distillation.count,
    amount: distillation.amount,
  });

  if (result.error) {
    return Promise.reject({
      message: "တခုခုမှားယွင်းနေပါသည်",
    });
  }

  return result;
}

export function deleteDistillation(id: number) {
  return supabase.from("distillation_list").delete().eq("id", id);
}
