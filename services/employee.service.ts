import { supabase } from "@/config/supabase";

export async function getEmployeeList() {
  const { data } = await supabase
    .from("employee_fees")
    .select<"*", Employee>("*")
    .order("created_at", { ascending: false });

  const total = data?.map((item) => item.fee).reduce((a, b) => a + b, 0);

  return {
    data,
    total,
  };
}

export function createEmployee(employee: Record<string, any>) {
  if (!employee.name) {
    return Promise.reject({
      message: "အမည်ထည့်သွင်းရန်လိုအပ်ပါသည်။",
    });
  }

  if (!employee.fee) {
    return Promise.reject({
      message: "လုပ်အားခထည့်သွင်းရန်လိုအပ်ပါသည်။",
    });
  }

  return supabase.from("employee_fees").insert({
    name: employee.name,
    fee: employee.fee,
  });
}
