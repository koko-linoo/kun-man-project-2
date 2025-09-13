import { supabase } from "@/config/supabase";

export async function getRemainingList(): Promise<Remaining[]> {
  let { data, error } = await supabase.rpc("getremaininglist");

  if (error) {
    return Promise.reject({
      message: "တစ်ခုခု မှားယွင်းနေပါသည်",
    });
  }

  return data;
}
