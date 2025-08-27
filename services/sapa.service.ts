import { supabase } from "@/config/supabase";

export async function getSapaList() {
  const { data } = await supabase
    .from("sapa_type")
    .select<"*", Sapa>("*")
    .order("created_at", { ascending: false });

  return {
    data,
  };
}

export async function createSapa(sapa: Record<string, any>) {
  if (!sapa.name) {
    return Promise.reject({
      message: "အမည်ထည့်သွင်းရန်လိုအပ်ပါသည်။",
    });
  }

  const result = await supabase.from("sapa_type").insert({
    name: sapa.name,
  });

  if (result.error) {
    return Promise.reject({
      message: "Name already exists",
    });
  }

  return result;
}

export function deleteSapa(id: number) {
  return supabase.from("sapa_type").delete().eq("id", id);
}
