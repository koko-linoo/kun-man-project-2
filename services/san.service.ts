import { supabase } from "@/config/supabase";

export async function getSanList() {
  const { data } = await supabase
    .from("san_type")
    .select<"*", San>("*")
    .order("created_at", { ascending: false });

  return {
    data,
  };
}

export async function createSan(san: Record<string, any>) {
  if (!san.name) {
    return Promise.reject({
      message: "အမည်ထည့်သွင်းရန်လိုအပ်ပါသည်။",
    });
  }

  const result = await supabase.from("san_type").insert({
    name: san.name,
  });

  if (result.error) {
    return Promise.reject({
      message: "တခုခုမှားယွင်းနေပါသည်",
    });
  }

  return result;
}

export function deleteSan(id: number) {
  if (id < 5) {
    return Promise.reject({
      message: "ဤဆန်အမျိုးအစားကို ဖျက်၍မရပါ။",
    });
  }

  return supabase.from("san_type").delete().eq("id", id);
}
