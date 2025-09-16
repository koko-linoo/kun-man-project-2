import { remainingKeys, saleKeys, saleTotalKeys } from "@/config/query-keys";
import {
  createSale,
  deleteSale,
  getSaleList,
  getTotalSale,
} from "@/services/sale.service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Toast from "react-native-toast-message";

export function useSaleList(params?: Record<string, any>) {
  return useQuery({
    queryKey: saleKeys.list(params),
    queryFn: async () => getSaleList(params),
    select: (response) => response,
  });
}

export function useGetTotalSale() {
  return useQuery({
    queryKey: saleTotalKeys.all,
    queryFn: async () => getTotalSale(),
    select: (response) => response,
  });
}

export function useCreateSale() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (Sale: Record<string, any>) => createSale(Sale),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: saleKeys.all,
      });

      queryClient.invalidateQueries({
        queryKey: remainingKeys.all,
      });
    },
    onError: (response) => {
      console.log(response);
      Toast.show({
        type: "error",
        text1: "Error",
        text2: response.message,
      });
    },
  });
}

export function useDeleteSale() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: number) => deleteSale(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: saleKeys.all });
      queryClient.invalidateQueries({ queryKey: remainingKeys.all });
    },
    onError: (response) => {
      Toast.show({
        type: "error",
        text1: "Error",
        text2: response.message,
      });
    },
  });
}
