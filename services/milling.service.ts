import { supabase } from "@/config/supabase";

export async function getMillingList() {
  const { data } = await supabase
    .from("milling_list")
    .select("*, san_type(name)")
    .order("created_at", { ascending: false });

  const total = data?.map((item) => item.count).reduce((a, b) => a + b, 0);

  return {
    data,
    total,
  };
}

export async function createMilling(milling: Record<string, any>) {
  if (!milling.san_type) {
    return Promise.reject({
      message: "ဆန်အမျိုးအစား ထည့်သွင်းပါ",
    });
  }

  if (!milling.count) {
    return Promise.reject({
      message: "အိတ် အရေအတွက် ထည့်သွင်းပါ",
    });
  }

  const temp = [
    {
      count: milling.count,
      san_type: milling.san_type,
    },
  ];

  if (milling.extra) {
    temp.push({
      count: milling.extra,
      san_type: 1,
    });
  }
  if (milling.half) {
    temp.push({
      count: milling.half,
      san_type: 2,
    });
  }
  if (milling.twoThreeFour) {
    temp.push({
      count: milling.twoThreeFour,
      san_type: 3,
    });
  }
  if (milling.flowerNu) {
    temp.push({
      count: milling.flowerNu,
      san_type: 4,
    });
  }

  const result = await supabase.from("milling_list").insert(temp).select();

  if (result.error) {
    return Promise.reject({
      message: "တစ်ခုခု မှားယွင်းနေပါသည်",
    });
  }

  return result;
}

export function deleteMilling(id: number) {
  return supabase.from("milling_list").delete().eq("id", id);
}
