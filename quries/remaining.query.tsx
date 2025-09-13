import { remainingKeys } from "@/config/query-keys";
import { getRemainingList } from "@/services/remaining.service";
import { useQuery } from "@tanstack/react-query";

export function useRemainingList() {
  return useQuery({
    queryKey: remainingKeys.list(),
    queryFn: async () => getRemainingList(),
    select: (response) => response,
  });
}
