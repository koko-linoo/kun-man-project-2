import { supabase } from "@/config/supabase";

export async function getOtherMillingList() {
  const { data } = await supabase
    .from("other_milling")
    .select("*, san_type(name)")
    .order("created_at", { ascending: false });

  return {
    data,
    total: data?.reduce((acc, curr) => acc + curr.amount, 0) || 0,
  };
}

export async function createOtherMilling(otherMilling: Record<string, any>) {
  if (!otherMilling.san_type) {
    return Promise.reject({
      message: "ဆန် အမျိုးအစား ရွေးပါ။",
    });
  }

  if (!otherMilling.san_count) {
    return Promise.reject({
      message: "ဆန် အရေအတွက် ထည့်ပါ။",
    });
  }

  if (!otherMilling.san_kwal_count) {
    return Promise.reject({
      message: "ဆန်ကွဲ အိတ် အရေအတွက် ထည့်ပါ",
    });
  }

  if (!otherMilling.amount) {
    return Promise.reject({
      message: "ကြိတ်ခ ထည့်ပါ။",
    });
  }

  const result = await supabase.from("other_milling").insert({
    san_type: otherMilling.san_type,
    san_count: otherMilling.san_count,
    san_kwal_count: otherMilling.san_kwal_count,
    amount: otherMilling.amount,
  });

  if (result.error) {
    return Promise.reject({
      message: "တခုခုမှားယွင်းနေပါသည်",
    });
  }

  return result;
}

export function deleteOtherMilling(id: number) {
  return supabase.from("other_milling").delete().eq("id", id);
}
