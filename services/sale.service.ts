import { supabase } from "@/config/supabase";
import { getDayRange } from "@/utils";

export async function getSaleList(params?: { date?: Date }) {
  let query = supabase.from("sale_list").select(`*, san_type(name)`);

  if (params?.date) {
    const [from, to] = getDayRange(params.date);
    query = query.gte("created_at", from).lte("created_at", to);
  }

  const { data } = await query.order("created_at", { ascending: false });

  const total = data?.map((item) => item.amount).reduce((a, b) => a + b, 0);

  return {
    data,
    total,
  };
}

export async function getTotalSale(): Promise<{
  data: SaleTotal[];
  total: number;
}> {
  let { data, error } = await supabase.rpc("gettotalsale");

  const total =
    data
      ?.map((item: SaleTotal) => item.amount)
      .reduce((a: number, b: number) => a + b, 0) || 0;

  if (error) {
    return Promise.reject({
      message: "တစ်ခုခု မှားယွင်းနေပါသည်",
    });
  }

  return { data, total };
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
