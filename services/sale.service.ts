import { supabase } from "@/config/supabase";

export async function getSaleList() {
  const { data } = await supabase
    .from("sale_list")
    .select("*, san_type(name)")
    .order("created_at", { ascending: false });

  const total = data?.map((item) => item.amount).reduce((a, b) => a + b, 0);

  return {
    data,
    total,
  };
}

export async function createSale(sale: Record<string, any>) {
  if (!sale.name || !sale.amount || !sale.count || !sale.san_type) {
    return Promise.reject({
      message: "တစ်ခုခုလိုအပ်နေပါသည်",
    });
  }

  const result = await supabase.from("sale_list").insert(sale);

  if (result.error) {
    return Promise.reject({
      message: "တစ်ခုခုမှားယွင်းနေပါသည်",
    });
  }

  return result;
}

export function deleteSale(id: number) {
  return supabase.from("sale_list").delete().eq("id", id);
}
