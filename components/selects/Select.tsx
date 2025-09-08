import { useSanList } from "@/quries/san.query";
import { useSapaList } from "@/quries/sapa.query";
import { SelectInput, SelectItem } from "./SelectInput";

type SapaSelectProps = {
  value?: SelectItem;
  onChange: (value: SelectItem) => void;
};

export function SapaSelect(props: SapaSelectProps) {
  const { data, isPending } = useSapaList();

  return (
    <SelectInput
      disabled={isPending || !data?.data?.length}
      value={props.value}
      onChange={props.onChange}
      loading={isPending}
      items={data?.data ?? []}
      label="စပါးအမျိုးအစား"
    />
  );
}

export function SanSelect(props: SapaSelectProps) {
  const { data, isPending } = useSanList();

  return (
    <SelectInput
      disabled={isPending || !data?.data?.length}
      value={props.value}
      onChange={props.onChange}
      loading={isPending}
      items={data?.data ?? []}
      label="ဆန်အမျိုးအစား"
    />
  );
}
